// filepath: client/src/components/LayerToggleControl/LayerToggleControl.tsx
import React from 'react';

interface LayerToggleControlProps {
  layers: { id: string; name: string }[]; // List of layers with their IDs and display names
  visibleLayers: string[]; // Currently visible layers
  setVisibleLayers: (layers: string[]) => void; // Function to update visible layers
}

const LayerToggleControl: React.FC<LayerToggleControlProps> = ({
  layers,
  visibleLayers,
  setVisibleLayers,
}) => {
  const handleToggle = (layerId: string) => {
    if (visibleLayers.includes(layerId)) {
      setVisibleLayers(visibleLayers.filter((id) => id !== layerId));
    } else {
      setVisibleLayers([...visibleLayers, layerId]);
    }
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
              type="checkbox"
              checked={visibleLayers.includes(layer.id)}
              onChange={() => handleToggle(layer.id)}
            />
            {layer.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default LayerToggleControl;
