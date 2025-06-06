import uuid
import urllib3
import requests
import zipfile
import shutil

from pathlib import Path
from data_pipeline.config import settings
from data_pipeline.utils import get_module_logger
from tenacity import retry, stop_after_attempt, wait_exponential

logger = get_module_logger(__name__)


def _log_retry_failure(retry_state):
    logger.warning(
        f"Failure downloading {retry_state.kwargs['file_url']}. Will retry."
    )


class Downloader:
    """A simple class to encapsulate the download capabilities of the application"""

    num_retries = (
        settings.REQUEST_RETRIES
        if "REQUEST_RETRIES" in settings
        else settings.REQUESTS_DEFAULT_RETRIES
    )

    @classmethod
    @retry(
        stop=stop_after_attempt(num_retries),
        wait=wait_exponential(multiplier=1, min=4, max=10),
        before_sleep=_log_retry_failure,
    )
    def download_file_from_url(
        cls,
        file_url: str,
        download_file_name: Path,
        verify: bool = True,
    ) -> str:
        """Downloads a file from a remote URL location and returns the file location.

        Args:
                file_url (str): URL where the zip file is located
                download_file_name (pathlib.Path): file path where the file will be downloaded (called downloaded.zip by default)
                verify (bool): A flag to check if the certificate is valid. If truthy, an invalid certificate will throw an
                error (optional, default to False)

        Returns:
                None

        """
        # disable https warning
        urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

        download_file_name.parent.mkdir(parents=True, exist_ok=True)
        logger.debug(f"Downloading {file_url}")
        timeout = (
            settings.REQUEST_TIMEOUT
            if "REQUEST_TIMEOUT" in settings
            else settings.REQUESTS_DEFAULT_TIMOUT
        )
        response = requests.get(file_url, verify=verify, timeout=timeout)
        if response.status_code == 200:
            file_contents = response.content
            logger.debug("Downloaded.")
        else:
            # pylint: disable-next=broad-exception-raised
            raise Exception(
                f"HTTP response {response.status_code} from url {file_url}. Info: {response.content}"
            )

        # Write the contents to disk.
        file = open(download_file_name, "wb")
        file.write(file_contents)
        file.close()

        return download_file_name

    @classmethod
    @retry(
        stop=stop_after_attempt(num_retries),
        wait=wait_exponential(multiplier=1, min=4, max=10),
        before_sleep=_log_retry_failure,
    )
    def download_zip_file_from_url(
        cls,
        file_url: str,
        unzipped_file_path: Path,
        verify: bool = True,
    ) -> None:
        """Downloads a zip file from a remote URL location and unzips it in a specific directory, removing the temporary file after

        Args:
                file_url (str): URL where the zip file is located
                unzipped_file_path (pathlib.Path): directory and name of the extracted file
                verify (bool): A flag to check if the certificate is valid. If truthy, an invalid certificate will throw an
                error (optional, default to False)

        Returns:
                None

        """
        # dir_id allows us to evade race conditions on parallel ETLs
        dir_id = uuid.uuid4()

        zip_download_path = (
            settings.DATA_PATH
            / "tmp"
            / "downloads"
            / f"{dir_id}"
            / "download.zip"
        )

        zip_file_path = Downloader.download_file_from_url(
            file_url=file_url,
            download_file_name=zip_download_path,
            verify=verify,
        )

        with zipfile.ZipFile(zip_file_path, "r") as zip_ref:
            zip_ref.extractall(unzipped_file_path)

        # cleanup temporary file and directory
        shutil.rmtree(zip_download_path.parent)
