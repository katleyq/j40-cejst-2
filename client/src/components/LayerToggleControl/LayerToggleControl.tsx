import React from 'react';

interface LayerToggleControlProps {
  layers: { id: string; name: string }[]; // List of layers with their IDs and display names
  visibleLayers: string[]; // Currently visible layers (should always have one layer)
  setVisibleLayers: (layers: string[]) => void; // Function to update visible layers
}

const LayerToggleControl: React.FC<LayerToggleControlProps> = ({
  layers,
  visibleLayers,
  setVisibleLayers,
}) => {
  const handleToggle = (layerId: string) => {
    // If the selected layer is already visible, do nothing (to ensure at least one layer is always selected)
    if (visibleLayers.includes(layerId)) {
      return;
    }

    // Set the selected layer as the only visible layer
    setVisibleLayers([layerId]);
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
      <h4>Toggle Layers</h4>
      {layers.map((layer) => (
        <div key={layer.id}>
          <label>
            <input
              type="radio" // Use radio buttons instead of checkboxes
              name="layer-toggle" // Group all inputs together
              checked={visibleLayers.includes(layer.id)} // Only one layer can be selected
              onChange={() => handleToggle(layer.id)} // Call handleToggle when a layer is selected
            />
            {layer.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default LayerToggleControl;
