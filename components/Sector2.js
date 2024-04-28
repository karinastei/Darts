// import React, {useState} from 'react';
// import {TouchableOpacity, View} from 'react-native';
// import {Path, Svg} from 'react-native-svg';

// const Sector2 = ({ score, handlePress, angle, color, scale }) => {
//   const [clicked, setClicked] = useState(false);

//   const onPress = () => {
//     setClicked(!clicked);
//     handlePress(score);
//   };

//   return (
//     <Path 
//       onPress={onPress}
//       d={`m 272.5 ,144.5 c 12.07815,1.93674 23.16092,5.55319 33.20363,10.92475 l -10.25688,20.27521 c -8.92566,-4.43257 -17.51949,-7.31821 -26.19079,-8.44403 z`}
//       fill={!clicked ? color : 'red'}
//       stroke="black"
//       strokeWidth="1"
//       transform={`scale(${scale}) rotate(${angle} 255 255) `}
      
//     />
//   );
// };

// export default Sector2;


