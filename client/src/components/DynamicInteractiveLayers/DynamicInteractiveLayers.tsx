// import React, {useEffect} from 'react';
// import LayerToggleControl from '../LayerToggleControl/LayerToggleControl';
// import * as constants from '../../data/constants';

// interface DynamicInteractiveLayersProps {
//   visibleLayers: string[];
//   setVisibleLayers: (layers: string[]) => void;
//   setInteractiveLayerIds: (layerIds: string[]) => void;
// }

// const DynamicInteractiveLayers: React.FC<DynamicInteractiveLayersProps> = ({
//   visibleLayers,
//   setVisibleLayers,
//   setInteractiveLayerIds,
// }) => {
//   const layers = [
//     {
//       id: constants.DEFAULT_LAYER_ID,
//       name: 'High Zoom + Prioritized High Zoom',
//     },
//     {id: constants.PSIM_BURDEN_HIGH_LAYER_ID, name: 'PSIM Burden Layer'},
//     {id: constants.ADD_BURDEN_HIGH_LAYER_ID, name: 'Additive Burden Layer'},
//   ];

//   // Update the interactiveLayerIds dynamically
//   useEffect(() => {
//     if (visibleLayers.includes(constants.DEFAULT_LAYER_ID)) {
//       setInteractiveLayerIds([
//         constants.HIGH_ZOOM_LAYER_ID,
//         constants.PRIORITIZED_HIGH_ZOOM_LAYER_ID,
//       ]);
//     } else {
//       setInteractiveLayerIds(visibleLayers);
//     }
//   }, [visibleLayers, setInteractiveLayerIds]);

//   return (
//     <LayerToggleControl
//       layers={layers}
//       visibleLayers={visibleLayers}
//       setVisibleLayers={(layerId) => setVisibleLayers([layerId])} // Ensure only one layer is selected
//     />
//   );
// };

// export default DynamicInteractiveLayers;
