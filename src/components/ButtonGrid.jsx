import React, { useState } from 'react';
import styles from '../styles/buttonGridStyles';

const ButtonGrid = () => {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1',
    '#96CEB4', '#FFEAA7', '#DDA0DD',
    '#98D8C8', '#F7DC6F', '#BB8FCE'
  ];

  const [buttonStates, setButtonStates] = useState(
    Array(9).fill().map(() => ({ color: '#fff', disabled: false, clicked: false }))
  );
  const [colorIndex, setColorIndex] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredReset, setHoveredReset] = useState(false);

  const handleButtonClick = (buttonIndex) => {
    if (buttonStates[buttonIndex].disabled) return;

    const newStates = [...buttonStates];
    newStates[buttonIndex] = {
      color: colors[colorIndex % colors.length],
      disabled: true,
      clicked: true
    };
    
    setButtonStates(newStates);
    setColorIndex(colorIndex + 1);
  };

  const handleReset = () => {
    setButtonStates(Array(9).fill().map(() => ({ color: '#fff', disabled: false, clicked: false })));
    setColorIndex(0);
  };

  const getButtonStyle = (index) => {
    const baseStyle = {
      ...styles.button,
      backgroundColor: buttonStates[index].color,
    };

    if (buttonStates[index].disabled) {
      return { ...baseStyle, ...styles.buttonDisabled };
    }

    if (hoveredButton === index) {
      return { ...baseStyle, ...styles.buttonHover };
    }

    return baseStyle;
  };

  const getResetButtonStyle = () => {
    return hoveredReset 
      ? { ...styles.resetButton, ...styles.resetButtonHover }
      : styles.resetButton;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Button Color Assignment</h1>
      
      <div style={styles.buttonGrid}>
        {buttonStates.map((state, index) => (
          <button
            key={index}
            style={getButtonStyle(index)}
            onClick={() => handleButtonClick(index)}
            onMouseEnter={() => setHoveredButton(index)}
            onMouseLeave={() => setHoveredButton(null)}
            disabled={state.disabled}
          >
            {state.clicked ? `Button ${index + 1}` : `Click Me ${index + 1}`}
          </button>
        ))}
      </div>

      <button
        style={getResetButtonStyle()}
        onClick={handleReset}
        onMouseEnter={() => setHoveredReset(true)}
        onMouseLeave={() => setHoveredReset(false)}
      >
        Reset All Colors
      </button>

      <div style={styles.colorInfo}>
        <div style={styles.currentColor}>
          Next Color: <strong>{colors[colorIndex % colors.length]}</strong>
        </div>
        <div style={styles.colorList}>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                ...styles.colorSwatch,
                backgroundColor: color,
                border: index === (colorIndex % colors.length) ? '3px solid #333' : '2px solid #ddd'
              }}
              title={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonGrid;
