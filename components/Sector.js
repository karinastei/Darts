import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const Sector = ({ score, handlePress, angle, color, scale, path }) => {

  const onPress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const position = { x: locationX, y: locationY, score };
    handlePress(score, position);
  };

  return (
    <Path 
      onPress={onPress}
      d={path}
      fill={color}
      stroke="black"
      strokeWidth="1"
      transform={`scale(${scale}) rotate(${angle} 255 255) `}
      
    />
  );
};

export default Sector;


