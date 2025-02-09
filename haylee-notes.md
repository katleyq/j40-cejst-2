# Notes
This repository is massive and I'm using this markdown to keep track of places that will need our attention for various tasks

## Adding a Layer to the Application
Files to check:

- `data/data-pipeline/data_pipeline/score/adding_variables_to_score.md` is the markdown with information about important files to check and modify when adding data. Will need to modify to fit our needs, but it's a good start. 

- `data/data-pipeline/data_pipeline/application.py` houses commands (?) about generating the tiles, including the score tiles and tribal tiles. Will need to edit this to include our new layer?

Files I modified:
- `data/data-pipeline/data_pipeline/tile/generate.py` I copied a second set of the entire script but with chatgpt's version for adding a G star layer. Haven't tried it yet, but 99% sure it's not going to work. 

- `data/data-pipeline/data_pipeline/etl/sources/gstar_test` A test folder to add the tract ID and standardized G star scores. 