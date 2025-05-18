import React from 'react';
import {useState} from 'react';
import styles from './ColorBar.module.scss';

interface ColorInfo {
  color: string;
  label: string;
}

interface ColorBarProps {
  colors?: ColorInfo[];
  onSelectColor?: (color: string, label: string) => void;
  barHeight?: number;
  className?: string;
}

/**
 * ColorBar displays a horizontal bar of selectable color segments.
 *
 * @param {ColorBarProps} props - The props for the ColorBar component.
 * @return {JSX.Element} The rendered ColorBar component.
 */
export default function ColorBar({
  colors = [
    {color: '#FF5733', label: 'Red Orange'},
    {color: '#33FF57', label: 'Green'},
    {color: '#3357FF', label: 'Blue'},
    {color: '#F3FF33', label: 'Yellow'},
    {color: '#FF33F3', label: 'Magenta'},
    {color: '#33FFF3', label: 'Cyan'},
    {color: '#FF8C33', label: 'Orange'},
    {color: '#8C33FF', label: 'Purple'},
  ],
  onSelectColor = () => {},
  barHeight = 40,
  className = '',
}: ColorBarProps) {
  const [selectedColor, setSelectedColor] = useState<ColorInfo | null>(null);

  const handleColorClick = (colorInfo: ColorInfo) => {
    setSelectedColor(colorInfo);
    onSelectColor(colorInfo.color, colorInfo.label);
  };

  return (
    <div className={`${styles.colorBarContainer} ${className}`}>
      <div className={styles.title}>Color Palette</div>
      <div className={styles.colorBarWrapper}>
        <div
          className={styles.colorStrip}
          style={{height: `${barHeight}px`}}
        >
          {colors.map((colorInfo, index) => (
            <div
              key={`color-${index}`}
              className={`${styles.colorBox} ${selectedColor?.color === colorInfo.color ? styles.selected : ''}`}
              style={{backgroundColor: colorInfo.color}}
              onClick={() => handleColorClick(colorInfo)}
              title={`${colorInfo.label} (${colorInfo.color})`}
            />
          ))}
        </div>
        <div className={styles.labelStrip}>
          {colors.map((colorInfo, index) => (
            <div
              key={`label-${index}`}
              className={styles.colorLabel}
            >
              {colorInfo.label}
            </div>
          ))}
        </div>
      </div>

      {selectedColor && (
        <div className={styles.selectedColorIndicator}>
          <div
            className={styles.selectedSwatch}
            style={{backgroundColor: selectedColor.color}}
          />
          <span>Selected: {selectedColor.label} ({selectedColor.color})</span>
        </div>
      )}
    </div>
  );
}
