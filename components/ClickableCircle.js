import React, { useState } from 'react';
import { Circle, Svg } from 'react-native-svg';

const ClickableCircle = ({ score, handlePress, size, color }) => {

  const onPress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const position = { x: locationX, y: locationY, score };
    handlePress(score, position);
  };

  return (
      <Circle onPress={onPress}
        cx={255}
        cy={255}
        r={size / 2 - 3}
        stroke="black"
        strokeWidth="2"
        fill={color}
      />

  );
};

export default ClickableCircle;
