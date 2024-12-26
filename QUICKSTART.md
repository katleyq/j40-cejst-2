# Local Quickstart

Install [`git`](https://git-scm.com/). See [Install Git](INSTALLATION.md#install-git).

Open a terminal, clone this repository, and change directory to the repository root:

```sh
$ git clone https://github.com/usds/justice40-tool
Cloning into 'justice40-tool'...
$ cd justice40-tool
```

Install [`docker`](https://docs.docker.com/get-docker/). See [Install Docker](INSTALLATION.md#install-docker).

> _Important_: To be able to run the entire application, you may need to increase the memory allocated for docker to at least 8096 MB. See [this post](https://stackoverflow.com/a/44533437) for more details.

Use `docker compose` to run the application:

```sh
$ docker compose up
```
Docker compose will spin up three containers: A data pipeline container, a data server, and a web server. 

The data pipeline container can run the entire data pipeline, or any individual step. By default it will simply display the options for the full pipeline run. To have it actually run the pipeline, remove the `, "--help"` from the `[command]` in the `docker-compose.yml` file before launch. Note that it can take an hour or more to run the full pipeline. Furthermore, the data container mounts your local repo directory to read and write files so if you've previously run the pipeline manually on your local system, your score and map tile files will get overwritten.

The data server will make the files created by the data pipeline container available to the web server

The web server will run the application website. After it initializes, you should be able to open the web server in your browser at [http://localhost:8000](http://localhost:8000).