FROM ubuntu:22.04

ENV TZ=America/Los_Angeles

# Install packages
RUN apt-get update && TZ=America/Los_Angeles DEBIAN_FRONTEND=noninteractive apt-get install -y \
    build-essential \
    make \
    gcc \
    git \
    unzip \
    wget \
    software-properties-common \
    libsqlite3-dev \
    zlib1g-dev

# tippecanoe
RUN apt-get update
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-add-repository -y ppa:git-core/ppa
RUN mkdir -p /tmp/tippecanoe-src && git clone https://github.com/mapbox/tippecanoe.git /tmp/tippecanoe-src
WORKDIR /tmp/tippecanoe-src
RUN /bin/sh -c make && make install

## gdal
RUN add-apt-repository ppa:ubuntugis/ppa
RUN apt-get -y install gdal-bin libgdal-dev

# Install python3.10
RUN add-apt-repository ppa:deadsnakes/ppa 
RUN apt install -y python3.10-dev
RUN apt install -y python3-pip
RUN update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.10 1
RUN update-alternatives --config python3

# Copy all project files into the container
COPY . /data-pipeline
WORKDIR /data-pipeline

# Python package installation using poetry. See:
# https://stackoverflow.com/questions/53835198/integrating-python-poetry-with-docker
ENV PYTHONFAULTHANDLER=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONHASHSEED=random \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    POETRY_VERSION=1.8.4

RUN pip install "poetry==$POETRY_VERSION"
RUN poetry config virtualenvs.create false \
    && poetry config virtualenvs.in-project false \
    && poetry install --only main --no-interaction --no-ansi
RUN pip install openpyxl

# Default behavior is to output the options for "full-run". This prevents the entire pipeline from running unintentionally.
ENTRYPOINT [ "poetry", "run", "python3", "-m", "data_pipeline.application"]  
CMD ["full-run", "--help"]