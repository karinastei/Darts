import React from 'react';
import { View, StyleSheet } from 'react-native';
import Dartboard from './components/Dartboard.js';

const App = () => {
  return (
    <View style={styles.container}>
      <Dartboard />
      
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});

export default App;
