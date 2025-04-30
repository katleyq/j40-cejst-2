import React from 'react';
import * as constants from '../../data/constants';
import * as styles from './LayerToggleControl.module.scss';

interface LayerToggleControlProps {
  layers: { id: string; name: string }[]; // List of layers with their IDs and display names
  visibleLayer: string; // Currently visible layer (only one layer can be visible at a time)
  setLayerState: (layerId: string, interactiveLayerIds: string[]) => void;
  // Callback to update both visible layer and interactive layer IDs
}

const getInteractiveLayerIdsFunc = (layerId: string): string[] => {
  if (layerId === constants.LEGACY_LAYER_ID) {
    return [
      constants.HIGH_ZOOM_LAYER_ID,
      constants.PRIORITIZED_HIGH_ZOOM_LAYER_ID,
    ];
  } else if (layerId === constants.PSIM_BURDEN_LAYER_ID) {
    return [constants.PSIM_BURDEN_HIGH_LAYER_ID];
  } else if (layerId === constants.ADD_BURDEN_LAYER_ID) {
    return [constants.ADD_BURDEN_HIGH_LAYER_ID];
  }
  return [];
};

const LayerToggleControl: React.FC<LayerToggleControlProps> = ({
  layers,
  visibleLayer,
  setLayerState,
}) => {
  const handleToggle = (layerId: string) => {
    // If the selected layer is already visible, do nothing
    if (visibleLayer === layerId) {
      return;
    }
    const interactiveLayerIds = getInteractiveLayerIdsFunc(layerId);

    // Determine the interactive layer IDs based on the selected layer
    // THIS USED TO WORK!!
    // const interactiveLayerIds: string[] = [];
    // if (layerId === constants.LEGACY_LAYER_ID) {
    //   interactiveLayerIds.push(
    //       constants.HIGH_ZOOM_LAYER_ID,
    //       constants.PRIORITIZED_HIGH_ZOOM_LAYER_ID,
    //   );
    // } else if (layerId === constants.PSIM_BURDEN_LAYER_ID) {
    //   interactiveLayerIds.push(constants.PSIM_BURDEN_HIGH_LAYER_ID);
    // } else if (layerId === constants.ADD_BURDEN_LAYER_ID) {
    //   interactiveLayerIds.push(constants.ADD_BURDEN_HIGH_LAYER_ID);
    // }

    // Update the visible layer and interactive layer IDs
    setLayerState(layerId, interactiveLayerIds);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'white',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      }}
    >
      <h4 className={styles.noMarginTop}>Toggle Layers</h4>
      {layers.map((layer) => (
        <div key={layer.id}>
          <label>
            <input
              type="radio" // Use radio buttons instead of checkboxes
              name="layer-toggle" // Group all inputs together
              checked={visibleLayer === layer.id} // Only one layer can be selected
              onChange={() => handleToggle(layer.id)} // Call handleToggle when a layer is selected
            />
            {layer.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export {getInteractiveLayerIdsFunc};

export default LayerToggleControl;
