import os
from pathlib import Path
from subprocess import call
import subprocess
import datetime
import logging
import os
import shutil
import sys
import uuid
import zipfile
from pathlib import Path
from typing import List
from typing import Union

LOG_LEVEL = logging.DEBUG
# Log level for all loggers.

# from data_pipeline.utils import get_module_logger
# from data_pipeline.utils import remove_all_from_dir

# logger = get_module_logger(__name__)

# Trying to get mbtiles to generate inside script
# os.environ["PATH"] += "/Users/hoyler/.local/bin/tippecanoe" 


# I pulled this from a separate script so I could get it to run here

def get_module_logger(module_name: str) -> logging.Logger:
    """Instantiates a logger object on stdout

    Args:
        module_name (str): Name of the module outputting the logs

    Returns:
        logger (Logging.logger): A logger object

    """
    logger = logging.getLogger(module_name)
    handler = logging.StreamHandler()
    formatter = logging.Formatter(
        "%(asctime)s [%(name)40.40s] %(levelname)-8s %(message)s"
    )
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    logger.setLevel(LOG_LEVEL)
    logger.propagate = False  # don't send log messages to the parent logger (to avoid duplicate log messages)
    return logger


logger = get_module_logger(__name__)


def remove_all_from_dir(files_path: Path) -> None:
    """Removes all files and directories from a specific directory, except __init__.py files

    Args:
        files_path (pathlib.Path): Name of the directory where the files and directories will be deleted

    Returns:
        None

    """
    if os.path.exists(files_path):
        for file in os.listdir(files_path):
            # don't rempove __init__ files as they conserve dir structure
            if file == "__init__.py":
                continue
            if os.path.isfile(files_path / file):
                os.remove(files_path / file)
            else:
                shutil.rmtree(files_path / file)
    else:
        logger.warning(f"The following path does not exist: `{files_path}`.")


def generate_tiles(data_path: Path, generate_tribal_layer: bool) -> None:
    """Generates map tiles from geojson files

    Args:
        data_path (Path):  Path to data folder
        generate_tribal_layer (bool): If true, generate the tribal layer of the map

    Returns:
        None
    """

    def _generate_score_tiles() -> None:
        """Generates score map tiles"""
        score_tiles_path = data_path / "score" / "tiles"
        high_tile_path = score_tiles_path / "high"
        low_tile_path = score_tiles_path / "low"
        score_geojson_dir = data_path / "score" / "geojson"

        USA_HIGH_MIN_ZOOM = 5
        USA_HIGH_MAX_ZOOM = 11
        USA_LOW_MIN_ZOOM = 0
        USA_LOW_MAX_ZOOM = 7

        # remove existing mbtiles file
        remove_all_from_dir(score_tiles_path)

        # create dirs
        os.makedirs(high_tile_path, exist_ok=True)
        os.makedirs(low_tile_path, exist_ok=True)
        os.makedirs(score_geojson_dir, exist_ok=True)

        # check if input GeoJSON file exists
        if not (score_geojson_dir / "usa-high.geojson").exists():
            raise FileNotFoundError(f"Input GeoJSON file not found: {score_geojson_dir / 'usa-high.geojson'}")

        # generate high mbtiles file
        # logger.debug("Generating USA High mbtiles file")
        cmd = "tippecanoe "
        cmd += f"--minimum-zoom={USA_HIGH_MIN_ZOOM} --maximum-zoom={USA_HIGH_MAX_ZOOM} --layer=blocks "
        cmd += "--no-feature-limit --no-tile-size-limit "
        cmd += f"--output={high_tile_path}/usa_high.mbtiles {score_geojson_dir}/usa-high.geojson"

        # cmd += str(score_geojson_dir / "usa-high.geojson")
        # call(cmd, shell=True) This was the original command

        # Added this to check is mbtiles is working correctly
        # result = call(cmd, shell=True)
        # if result != 0:
        #     raise RuntimeError(f"Tippecanoe command failed with exit code {result}: {cmd}")

        print(f"Running command: {cmd}")
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"Error output: {result.stderr}")
            raise RuntimeError(f"Tippecanoe command failed with exit code {result.returncode}: {cmd}")
        

        # generate high mvts
        # logger.debug("Generating USA High mvt folders and files")
        cmd = "tippecanoe "
        cmd += f"--minimum-zoom={USA_HIGH_MIN_ZOOM} --maximum-zoom={USA_HIGH_MAX_ZOOM} --no-tile-compression "
        cmd += "--no-feature-limit  --no-tile-size-limit "
        cmd += f"--output-to-directory={high_tile_path} --layer=blocks "
        cmd += str(score_geojson_dir / "usa-high.geojson")
        call(cmd, shell=True)

        # generate low mbtiles file
        # logger.debug("Generating USA Low mbtiles file")
        cmd = "tippecanoe "
        cmd += f"--minimum-zoom={USA_LOW_MIN_ZOOM} --maximum-zoom={USA_LOW_MAX_ZOOM} --layer=blocks "
        cmd += f"--output={low_tile_path}/usa_low.mbtiles {score_geojson_dir}/usa-high.geojson "
        # cmd += str(score_geojson_dir / "usa-high.geojson")
        call(cmd, shell=True)

        # generate low mvts
        # logger.debug("Generating USA Low mvt folders and files")
        cmd = "tippecanoe "
        cmd += f"--minimum-zoom={USA_LOW_MIN_ZOOM} --maximum-zoom={USA_LOW_MAX_ZOOM} --no-tile-compression "
        cmd += "--drop-densest-as-needed "
        cmd += f"--output-to-directory={low_tile_path} --layer=blocks "
        cmd += str(score_geojson_dir / "usa-high.geojson")
        call(cmd, shell=True)

    def _generate_tribal_tiles() -> None:
        """Generates tribal layer tiles"""

        USA_TRIBAL_MIN_ZOOM = 0
        USA_TRIBAL_MAX_ZOOM = 11

        tribal_tiles_path = data_path / "tribal" / "tiles"
        tribal_geojson_dir = data_path / "tribal" / "geographic_data"

        # remove existing mbtiles file
        # remove_all_from_dir(tribal_tiles_path)

        # generate mbtiles file
        # logger.debug("Generating Tribal mbtiles file")
        cmd = "tippecanoe "
        cmd += "--layer=blocks "
        cmd += "--base-zoom=3 "
        cmd += f"--minimum-zoom={USA_TRIBAL_MIN_ZOOM} --maximum-zoom={USA_TRIBAL_MAX_ZOOM} "
        cmd += f"--output={tribal_tiles_path}/usa.mbtiles "
        cmd += str(tribal_geojson_dir / "usa.json")
        call(cmd, shell=True)

        # generate mvts
        # logger.debug("Generating Tribal mvt folders and files")
        cmd = "tippecanoe "
        cmd += "--layer=blocks "
        cmd += "--base-zoom=3 "
        cmd += "--no-tile-compression "
        cmd += "--drop-densest-as-needed "
        cmd += f"--minimum-zoom={USA_TRIBAL_MIN_ZOOM} --maximum-zoom={USA_TRIBAL_MAX_ZOOM} "
        cmd += f"--output-to-directory={tribal_tiles_path} "
        cmd += str(tribal_geojson_dir / "usa.json")
        call(cmd, shell=True)

    if generate_tribal_layer:
        _generate_tribal_tiles()
    else:
        _generate_score_tiles()

generate_tiles(data_path=Path('/capstone/justice40/data'), generate_tribal_layer=False)

# import os
# print(f"Current working directory: {os.getcwd()}")

