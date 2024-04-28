import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const Sector = ({ score, handlePress, angle, color, scale, path }) => {
  const [clicked, setClicked] = useState(false);

  const onPress = () => {
    setClicked(!clicked);
    handlePress(score);
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


