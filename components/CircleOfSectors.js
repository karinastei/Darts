// FullCircle.js
import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Sector from './Sector';

const Circle = () => {
  const [handlePress, clicked, setClicked] = useState(false);

  const onPress = () => {
    setClicked(!clicked);
    handlePress(score);
  };
  
  return (
    <View style={styles.container}>
    <Sector key={0} angle={0} color={'blue'} handlePress={handlePress}></Sector> 
    <Sector angle={30} color={'green'} handlePress={handlePress}></Sector>   
    <Sector angle={60} color={'blue'} handlePress={handlePress}></Sector>
    <Sector angle={90} color={'green'} handlePress={handlePress}></Sector> 
    <Sector angle={120} color={'blue'} handlePress={handlePress}></Sector> 
    <Sector angle={150} color={'green'} handlePress={handlePress}></Sector>
    <Sector angle={180} color={'blue'} handlePress={handlePress}></Sector>
    <Sector angle={210} color={'green'} handlePress={handlePress}></Sector>
    <Sector angle={240} color={'blue'} handlePress={handlePress}></Sector>
    <Sector angle={270} color={'green'} handlePress={handlePress}></Sector>
    <Sector angle={300} color={'blue'} handlePress={handlePress}></Sector>
    <Sector angle={330} color={'green'} handlePress={handlePress}></Sector>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});

export default Circle;
