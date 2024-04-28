// import React, {useState} from 'react';
// import {TouchableOpacity, View} from 'react-native';
// import {Path, Svg} from 'react-native-svg';

// const Sector = ({ score, handlePress, angle, color, scale }) => {
//   const [clicked, setClicked] = useState(false);

//   const onPress = () => {
//     setClicked(!clicked);
//     // handlePress(score);
//   };

//   return (
//     <Path 
//       onPress={onPress}
//       d={`m 279,105 c 16,2.68 31.86675,7.72435 46.28235,15.44994 l -20.30756,39.94046 c -10.3529,-5.42988 -21.33462,-9.20909 -33.12629,-10.86219 z`}
//       fill={!clicked ? color : 'red'}
//       stroke="black"
//       strokeWidth="1"
//       transform={`scale(${scale}) rotate(${angle} 255 255) `}
      
//     />
//   );
// };

// export default Sector;


