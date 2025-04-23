// import React, {useMemo} from 'react';
import React, {useState} from 'react';
import {Source, Layer} from 'react-map-gl';
import {MapGeoJSONFeature} from 'maplibre-gl';

// Contexts:
import {useFlags} from '../../contexts/FlagContext';

import * as constants from '../../data/constants';
import * as COMMON_COPY from '../../data/copy/common';
import LayerToggleControl from '../LayerToggleControl/LayerToggleControl';

interface IMapTractLayers {
  selectedFeatureId: string | number;
  selectedFeature: MapGeoJSONFeature | undefined;
}

/**
 * This function will determine the URL for the map tiles. It will read in a string that will designate either
 * high or low tiles. It will allow to overide the URL to the pipeline staging tile URL via feature flag.
 * Lastly, it allows to set the tiles to be local or via the CDN as well.
 *
 * @param {string} tilesetName
 * @return {string}
 */
export const featureURLForTilesetName = (tilesetName: string): string => {
  const flags = useFlags();

  const pipelineStagingBaseURL =
    process.env.GATSBY_CDN_TILES_BASE_URL + `/data-pipeline-staging`;
  const XYZ_SUFFIX = '{z}/{x}/{y}.pbf';

  if ('stage_hash' in flags) {
    const regex = /^[0-9]{4}\/[a-f0-9]{40}$/;
    if (!regex.test(flags['stage_hash'])) {
      console.error(COMMON_COPY.CONSOLE_ERROR.STAGE_URL);
    }

    return `${pipelineStagingBaseURL}/${flags['stage_hash']}/data/score/tiles/${tilesetName}/${XYZ_SUFFIX}`;
  } else {
    const featureTileBaseURL = constants.TILE_BASE_URL;
    const featureTilePath = constants.TILE_PATH;
    const mapTilesPath = process.env.GATSBY_MAP_TILES_PATH;

    const pathParts = [
      featureTileBaseURL,
      featureTilePath,
      mapTilesPath,
      tilesetName,
      XYZ_SUFFIX,
    ]
        .filter(Boolean)
        .map((part) => part.replace(/^\/|\/$/g, '')) // trim leading/trailing slashes
        .join('/');

    return pathParts.startsWith('http') ? pathParts : `/${pathParts}`;
  }
};

/**
 * This component will return the appropriate source and layers for the census layer on the
 * map.
 *
 * There are two use cases here, eg, when the MapBox token is or isn't provided. When the token
 * is not provided, the open-source map will be rendered. When the open-source map is rendered
 * only the interactive layers are returned from this component. The reason being is that the
 * other layers are supplied by he getOSBaseMap function.
 *
 * @param {string | number} selectedFeatureId
 * @param {MapGeoJSONFeature | undefined} selectedFeature
 * @return {Style}
 */
// const MapTractLayers = ({
//   selectedFeatureId,
//   selectedFeature,
// }: IMapTractLayers) => {
//   const filter = useMemo(
//       () => ['in', constants.GEOID_PROPERTY, selectedFeatureId],
//       [selectedFeature],
//   );

const MapTractLayers = ({
  selectedFeatureId,
  selectedFeature,
}: IMapTractLayers) => {
  // State to track visible layers
  const [visibleLayers, setVisibleLayers] = useState<string[]>([
    constants.HIGH_ZOOM_LAYER_ID, // Default visible layers
  ]);

  const layers = [
    {id: constants.HIGH_ZOOM_LAYER_ID, name: 'High Zoom Layer'},
    {id: constants.PSIM_BURDEN_LAYER_ID, name: 'GI Star Burdens'},
    {id: constants.PSIM_INDICATOR_LAYER_ID, name: 'GI Star Indicators'},
  ];

  return (
    <>
      {/* Add the LayerToggleControl */}
      <LayerToggleControl
        layers={layers}
        visibleLayers={visibleLayers}
        setVisibleLayers={setVisibleLayers}
      />

      <Source
        id={constants.HIGH_ZOOM_SOURCE_NAME}
        type="vector"
        promoteId={constants.GEOID_PROPERTY}
        tiles={[featureURLForTilesetName('high')]}
        maxzoom={constants.GLOBAL_MAX_ZOOM_HIGH}
        minzoom={constants.GLOBAL_MIN_ZOOM_HIGH}
      >
        {/* Render layers conditionally based on visibility */}
        {visibleLayers.includes(constants.HIGH_ZOOM_LAYER_ID) && (
          <Layer
            id={constants.HIGH_ZOOM_LAYER_ID}
            source-layer={constants.SCORE_SOURCE_LAYER}
            filter={['==', constants.SCORE_PROPERTY_HIGH, false]}
            type="fill"
            paint={{
              'fill-opacity': constants.NON_PRIORITIZED_FEATURE_FILL_OPACITY,
            }}
            minzoom={constants.GLOBAL_MIN_ZOOM_HIGH}
          />
        )}
        {visibleLayers.includes(constants.PSIM_BURDEN_LAYER_ID) && (
          <Layer
            id={constants.PSIM_BURDEN_LAYER_ID}
            source-layer={constants.SCORE_SOURCE_LAYER}
            type="fill"
            paint={{
              'fill-color': [
                'step',
                ['get', constants.PSIM_BURDEN],
                '#efeada',
                -0.05,
                '#1818ed',
                -0.01,
                '#0101b3',
                -1e-12,
                '#8c0303',
                0.01,
                '#c50000',
                0.05,
                '#efeada',
              ],
              'fill-opacity': 0.8,
            }}
            minzoom={constants.GLOBAL_MIN_ZOOM_HIGH}
          />
        )}
        {visibleLayers.includes(constants.PSIM_INDICATOR_LAYER_ID) && (
          <Layer
            id={constants.PSIM_INDICATOR_LAYER_ID}
            source-layer={constants.SCORE_SOURCE_LAYER}
            type="fill"
            paint={{
              'fill-color': [
                'step',
                ['get', constants.PSIM_INDICATOR],
                '#efeada',
                -0.05,
                '#1818ed',
                -0.01,
                '#0101b3',
                -1e-12,
                '#8c0303',
                0.01,
                '#c50000',
                0.05,
                '#efeada',
              ],
              'fill-opacity': 0.8,
            }}
            minzoom={constants.GLOBAL_MIN_ZOOM_HIGH}
          />
        )}
      </Source>
    </>
  );
};

//   return (
//     <>
//       <Source
//         id={constants.LOW_ZOOM_SOURCE_NAME}
//         type="vector"
//         promoteId={constants.GEOID_PROPERTY}
//         tiles={[featureURLForTilesetName('low')]}
//         maxzoom={constants.GLOBAL_MAX_ZOOM_LOW}
//         minzoom={constants.GLOBAL_MIN_ZOOM_LOW}
//       >
//         {/* Low zoom layer (static) - prioritized features only */}
//         <Layer
//           id={constants.LOW_ZOOM_LAYER_ID}
//           source-layer={constants.SCORE_SOURCE_LAYER}
//           filter={[
//             '>',
//             constants.SCORE_PROPERTY_LOW,
//             constants.SCORE_BOUNDARY_THRESHOLD,
//           ]}
//           type="fill"
//           paint={{
//             'fill-color': constants.PRIORITIZED_FEATURE_FILL_COLOR,
//             'fill-opacity': constants.LOW_ZOOM_PRIORITIZED_FEATURE_FILL_OPACITY,
//           }}
//           maxzoom={constants.GLOBAL_MAX_ZOOM_LOW}
//           minzoom={constants.GLOBAL_MIN_ZOOM_LOW}
//         />
//       </Source>

//       {/* The high zoom source */}
//       <Source
//         id={constants.HIGH_ZOOM_SOURCE_NAME}
//         type="vector"
//         promoteId={constants.GEOID_PROPERTY}
//         tiles={[featureURLForTilesetName('high')]}
//         maxzoom={constants.GLOBAL_MAX_ZOOM_HIGH}
//         minzoom={constants.GLOBAL_MIN_ZOOM_HIGH}
//       >
//         {/* High zoom layer (static) - non-prioritized features only */}
//         <Layer
//           id={constants.HIGH_ZOOM_LAYER_ID}
//           source-layer={constants.SCORE_SOURCE_LAYER}
//           filter={['==', constants.SCORE_PROPERTY_HIGH, false]}
//           type="fill"
//           paint={{
//             'fill-opacity': constants.NON_PRIORITIZED_FEATURE_FILL_OPACITY,
//           }}
//           minzoom={constants.GLOBAL_MIN_ZOOM_HIGH}
//         />

//         {/* High zoom layer (static) - prioritized features only */}
//         <Layer
//           id={constants.PRIORITIZED_HIGH_ZOOM_LAYER_ID}
//           source-layer={constants.SCORE_SOURCE_LAYER}
//           filter={['==', constants.SCORE_PROPERTY_HIGH, true]}
//           type="fill"
//           paint={{
//             'fill-color': constants.PRIORITIZED_FEATURE_FILL_COLOR,
//             'fill-opacity':
//               constants.HIGH_ZOOM_PRIORITIZED_FEATURE_FILL_OPACITY,
//           }}
//           minzoom={constants.GLOBAL_MIN_ZOOM_HIGH}
//         />

//         {/* High zoom layer (static) - grandfathered features only */}
//         <Layer
//           id={constants.GRANDFATHERED_HIGH_ZOOM_LAYER_ID}
//           source-layer={constants.SCORE_SOURCE_LAYER}
//           filter={['==', constants.IS_GRANDFATHERED, true]}
//           type="fill"
//           paint={{
//             'fill-color': constants.GRANDFATHERED_FEATURE_FILL_COLOR,
//             'fill-opacity':
//               constants.HIGH_ZOOM_PRIORITIZED_FEATURE_FILL_OPACITY,
//           }}
//           minzoom={constants.GLOBAL_MIN_ZOOM_HIGH}
//         />

//         {/* High zoom layer GI Star Burdens*/}
//         <Layer
//           id={constants.PSIM_BURDEN_LAYER_ID}
//           source-layer={constants.SCORE_SOURCE_LAYER}
//           type="fill"
//           paint={{
//             // Define the color scale using a Mapbox expression
//             'fill-color': [
//               'step', // Use a step expression for binned color scaling
//               ['get', constants.PSIM_BURDEN], // The property to base the color scale on
//               '#efeada', // Default color for values <= -1
//               -0.05,
//               '#1818ed', // Color for values > -0.05
//               -0.01,
//               '#0101b3', // Color for values > -0.01
//               -1e-12,
//               '#8c0303', // Color for values > -1e-12
//               0.01,
//               '#c50000', // Color for values > 0.01
//               0.05,
//               '#efeada', // Color for values > 0.05
//             ],
//             'fill-opacity': 0.8, // Set the opacity of the fill
//           }}
//           minzoom={constants.GLOBAL_MIN_ZOOM}
//         />

//         {/* High zoom layer (static) - controls the border between features */}
//         <Layer
//           id={constants.FEATURE_BORDER_LAYER_ID}
//           source-layer={constants.SCORE_SOURCE_LAYER}
//           type="line"
//           paint={{
//             'line-color': constants.FEATURE_BORDER_COLOR,
//             'line-width': constants.FEATURE_BORDER_WIDTH,
//             'line-opacity': constants.FEATURE_BORDER_OPACITY,
//           }}
//           maxzoom={constants.GLOBAL_MAX_ZOOM_FEATURE_BORDER}
//           minzoom={constants.GLOBAL_MIN_ZOOM_FEATURE_BORDER}
//         />

//         {/* High zoom layer (dynamic) - border styling around the selected feature */}
//         <Layer
//           id={constants.SELECTED_FEATURE_BORDER_LAYER_ID}
//           source-layer={constants.SCORE_SOURCE_LAYER}
//           filter={filter} // This filter filters out all other features except the selected feature.
//           type="line"
//           paint={{
//             'line-color': constants.SELECTED_FEATURE_BORDER_COLOR,
//             'line-width': constants.SELECTED_FEATURE_BORDER_WIDTH,
//           }}
//           minzoom={constants.GLOBAL_MIN_ZOOM_HIGH}
//         />
//       </Source>
//     </>
//   );
// };

export default MapTractLayers;
