# CEJST Tool

[![CC0 License](https://img.shields.io/badge/license-CCO--1.0-brightgreen)](https://github.com/DOI-DO/j40-cejst-2/blob/main/LICENSE.md)

_[¡Lea esto en español!](README-es.md)_

This repo contains the code, processes, and documentation for the data and tech powering the [Climate and Economic Justice Screening Tool (CEJST)](https://screeningtool.geoplatform.gov).

## Background

The CEJST was announced in the [Executive Order on Tackling the Climate Crisis at Home and Abroad](https://www.federalregister.gov/documents/2021/02/01/2021-02177/tackling-the-climate-crisis-at-home-and-abroad) in January 2021. The CEJST includes interactive maps which federal agencies can use.

## Contributing

Contributions are always welcome! We encourage contributions in the form of discussion on issues in this repo and pull requests of documentation and code.

Visit [CONTRIBUTING.md](CONTRIBUTING.md) for ways to get started.

## For Developers and Data Scientists

### Repository Structure
```
j40-cejst-2/
├── client/                        # Front-end web application
│   ├── public/                    # Static assets
│   ├── src/
│   │   ├── components/            # React components
│   │   │   ├── AreaDetail/        # Details panel for selected areas
│   │   │   ├── DownloadButton/    # Download functionality
│   │   │   ├── GovernmentBanner/  # Official site banner
│   │   │   ├── J40Header/         # Site header component
│   │   │   ├── J40Map.tsx         # Main map component
│   │   │   ├── Language/          # Language selector component
│   │   │   ├── LayerToggleControl/# Controls for toggling map layers
│   │   │   ├── MapInfoPanel/      # Side panel with map information
│   │   │   ├── MapSearch/         # Search functionality for the map
│   │   │   ├── MapTractLayers/    # Map layers for census tracts
│   │   │   ├── MapTribalLayers/   # Map layers for tribal lands
│   │   │   └── ...                # Other UI components
│   │   ├── contexts/              # React contexts
│   │   │   ├── FlagContext/       # Feature flag context
│   │   │   └── ...                # Other contexts
│   │   ├── data/                  # Data files and constants
│   │   │   ├── constants.tsx      # Application constants
│   │   │   ├── copy/              # Text content
│   │   │   │   ├── common.tsx     # Shared text content
│   │   │   │   ├── explore.tsx    # Map exploration text
│   │   │   │   └── ...            # Other text content
│   │   │   └── ...                # Other data files
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── images/                # Image assets
│   │   ├── pages/                 # Page components
│   │   │   ├── index.tsx          # Homepage
│   │   │   ├── methodology.tsx    # Methodology page
│   │   │   ├── downloads.tsx      # Downloads page
│   │   │   └── ...                # Other pages
│   │   └── styles/                # Global styles
│   ├── static/                    # Static files served by Gatsby
│   │   └── tiles/                 # (Location for local map tiles)
│   ├── .env.development           # Dev environment variables
│   ├── .env.production            # Production environment variables
│   ├── gatsby-config.js           # Gatsby configuration
│   ├── gatsby-node.js             # Gatsby build customization
│   └── package.json               # Dependencies and scripts
│
├── data/                          # Data processing pipeline
│   └── data-pipeline/             # ETL processes
│       ├── data_pipeline/         # Python package for data processing
│       │   ├── __init__.py        # Package initialization
│       │   ├── config.py          # Configuration settings
│       │   ├── constants.py       # Pipeline constants
│       │   ├── utils.py           # Utility functions
│       │   ├── tile/              # Tile generation code
│       │   │   └── generate.py    # Tile generation script
│       │   ├── etl/               # Extract, Transform, Load code
│       │   │   ├── score/         # Scoring algorithms
│       │   │   ├── extract/       # Data extraction scripts
│       │   │   └── transform/     # Data transformation scripts
│       │   ├── content/           # Content management
│       │   │   └── schemas/       # Data schemas
│       │   └── data/              # Data directories
│       │       ├── download/      # Downloaded raw data
│       │       ├── score/         # Score data
│       │       │   ├── geojson/   # GeoJSON files
│       │       │   └── tiles/     # Generated map tiles
│       │       │       ├── high/  # High resolution tiles
│       │       │       └── low/   # Low resolution tiles
│       │       ├── source/        # Source data files
│       │       └── ...            # Other data categories
│       ├── tests/                 # Unit and integration tests
│       ├── pyproject.toml         # Poetry configuration
│       ├── settings.toml          # Application settings
│       ├── setup.py               # Package installation script
│       └── README.md              # Pipeline documentation
│
├── docs/                          # Documentation
│   ├── architecture/              # Architecture diagrams
│   ├── development/               # Development guides
│   └── user/                      # User guides
│
├── tools/                         # Development and deployment tools
│   ├── scripts/                   # Utility scripts
│   └── ci/                        # CI/CD configuration
│
├── .github/                       # GitHub configuration
│   └── workflows/                 # GitHub Actions workflows
│
├── .gitignore                     # Git ignore rules
├── LICENSE                        # Project license
└── README.md                      # Repository documentation
```

### Datasets

The intermediate steps of the data pipeline, the scores, and the final output that is consumed by the frontend are all public and can be accessed directly. Visit [DATASETS.md](DATASETS.md) for these direct download links.

### Local Quickstart

If you want to run the entire application locally, visit [QUICKSTART.md](QUICKSTART.md).

### Advanced Guides

If you have software experience or more specific use cases, in-depth documentation of how to work with this project can be found in [INSTALLATION.md](INSTALLATION.md).

### Project Documentation

For more general documentation on the project that is not related to getting set up, including architecture diagrams and engineering decision logs, visit [docs/](docs/).

## Glossary

Confused about a term? Heard an acronym and have no idea what it stands for? Check out [our glossary](docs/glossary.md)!

## Feedback

If you have any feedback or questions, please reach out to us in our Google Group [justice40-open-source](https://groups.google.com/g/justice40-open-source).
