# Documentation index

There is lots of existing documentation in this repository and this file attempts to index it along with light annotations.

## Top-level

- [`README.md`](/README.md): The top-level README file, mostly pointers to other documentation files for particular tasks
- [`QUICKSTART.md`](/QUICKSTART.md): Instructions for quickly running the site locally using Docker
- [`CONTRIBUTING.md`](/CONTRIBUTING.md), [`COMMUNITY_GUIDLEINES.md`](/COMMUNITY_GUIDELINES.md), [`CODE_OF_CONDUCT.md`](/CODE_OF_CONDUCT.md): Guidelines for participation in this product and community
- [`DATASETS.md`](/DATASETS.md): Comprehensive documentation of all the data that is incorporated into CEJST. The actual data processing is in the [data/data-pipeline](/data/data-pipeline/) directory, but this documentation should be kept up to date with the code there
- [`INSTALLATION.md`](/INSTALLATION.md): A more developer-focused set of instructions for installing dependencies to be able to make changes to the site

## Documentation

- [Glossary](/docs/glossary.md): A glossary of terms used on the project
- [Operations](/docs/operations/): Files documenting the operation of the site, including artifacts, version rollbacks, and deployment
- [`architecture/README.md`](/docs/architecture/README.md): General description of the technical architecture of the site
- [Decisions](/docs/decisions/): This project uses Architecture Decision Records (ADRs) to document technical decisions as they are made

## Client

- [`README.md`](/client/README.md): Instructions for installing dependencies and running the front-end website. Very detailed, **the first starting point for web developers**.
- [`VIEW_MAP_DATA.md`](/client/VIEW_MAP_DATA.md): Detailed instructions for inspecting how the application records and displays the map data
- [`DESIGN2DEV.md`](/client/DESIGN2DEV.md): **Outdated** Documents how visual designers and developers can work together. Some details on how the site handles styling.

## Data pipeline

- [`README.md`](/data/data-pipeline/README.md): Very detailed description of the backend data process, including installation, running, and testing. **The first starting point for backend data developers**.
- [`INSTALLATION.md`](/data/data-pipeline/INSTALLATION.md): Detailed instructions on installing the dependencies for developing on the data pipeline.
- [Comparison tool](/data/data-pipeline/data_pipeline/comparison_tool/README.md): Information about a tool for comparing CEJST scores using parametrized Jupyter notebooks
- [Adding a variable](/data/data-pipeline/data_pipeline/score/adding_variables_to_score.md): Instructions for adding a new variable to the CEJST score

## Github Workflows

- [`README.md`](/.github/workflows/README.md): Details about the Github Actions workflows for testing and deploying the application
- [`INFRASTRUCTURE.md`](/.github/workflows/INFRASTRUCTURE.md): Details about the infrastructure that the site runs on
- [`ENVIRONMENT_VARIABLES.md`](/.github/workflows/ENVIRONMENT_VARIABLES.md): Details about the environment variable configuration and the secrets for deploying the site