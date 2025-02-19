# Notes
This repository is massive and so I've decided to use this markdown to keep track of places that will need our attention for various tasks

- [Scoring](#scoring)
- [Extract, Transform, Load](#extract-transform-load)
- [Where's the Data?](#wheres-the-data)
- [Tiling and Viewing Data on the Map](#tiling-and-viewing-data-on-the-map)
- [Editing Aesthetics](#editing-aesthetics)
- [Adding a Layer to the Application](#adding-a-layer-a-to-the-application)
- [Miscellaneous](#miscellaneous)


## Scoring

- `data/data-pipeline/data_pipeline/etl/score/etl_score.py` houses the bulk of merging the datasets and calculating the actual score. It feels like the output of this should be the `usa.csv` with everything. `~/etl/score/etl_utils.py` handles the generation of the codebook and the actualy converting to csv, xlsx, shp, etc. 

## Extract, Transform, Load

- Every dataset in `data/data-pipeline/data_pipeline/etl/sources` has an `etl.py` file. This file **defines a subclass of `ExtractTransformLoad` that is unique to that dataset.** 

    For instance, `~etl/sources/nlcd_nature_deprived/etl.py` defines a specific ETL class for the Nature Deprived Communities dataset. It builds off of the template `ExtractTransformLoad` class but tunes specific variables to meet the needs of this dataset. Every dataset CEJST uses has its own ETL subclass customized to that data.

    In essence, rather than manually typing out the data wrangling and processing, CEJST uses the ETL framework to make all of the data management robust and reproducible. It's harder to parse, but I think I'm finally starting to grasp 1. Where the data is and 2. What they're doing with it. 

## Where's the Data?

- `data/data-pipeline/settings.toml` houses the Amazon AWS links to the data. Neither version 1 nor version 2 links work.

- `data/data-pipeline/data_pipeline/tests/sources` houses all the actual data files that are outputted during the ETL process

    I think it's possible to shorten the data pipeline by truncating the initial pull from AWS. If we can modify where it starts the process from the sources outputted from ETL, I think we can get the app back up and running with the DAC layer...


## Tiling and Viewing Data on the Map

- `client/VIEW_MAP_DATA.md` has detailed instructions on understanding how the map gets data via PBF files. It also contains troubleshooting information if the data isn't loading, a good place to start for fixing the missing tiles post new administration.

## Editing Aesthetics
- `client/src/pages/index.tsx`: The home page of the application

- `client/src/data/copy/explore.tsx`: Where the text for the home page lives. All the text is housed in separate little chunks inside of larger functions. This also includes the text that shows up interactively as you click around the map. 

- `client/src/components/J40Header/J40Header.tsx`: Changing header stuff, including logo

## Adding a Layer to the Application

Files to check:

- `data/data-pipeline/data_pipeline/score/adding_variables_to_score.md` is the markdown with information about important files to check and modify when adding data. Will need to modify to fit our needs, but it's a good start. 

- `data/data-pipeline/data_pipeline/application.py` houses commands (?) about generating the tiles, including the score tiles and tribal tiles. Will need to edit this to include our new layer?

Files I modified:

- `data/data-pipeline/data_pipeline/tile/generate.py` I copied a second set of the entire script but with chatgpt's version for adding a G star layer. Haven't tried it yet, but 99% sure it's not going to work. 

- `data/data-pipeline/data_pipeline/etl/sources/gstar_test` A test folder to add the tract ID and standardized G star scores. 

## Miscellaneous

- `data/data-pipeline/data_pipeline/etl/score/constants.py` contains the column names of the geo data frame. They're also in the codebook, but this is where they're defined. 

- `data/data-pipeline/data_pipeline/etl/sources/geo_utils.py`: Utililities for turning geographies into tracts using census data


