import React from 'react';
import { View, StyleSheet } from 'react-native';
import Dartboard from './components/Dartboard.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Users from './views/Users.js';
import Scores from './views/Scores.js';
import { enableScreens } from 'react-native-screens';
enableScreens();


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Add players">
        <Stack.Screen name="Add players" component={Users} />
        <Stack.Screen name="Dartboard" component={Dartboard} />
        <Stack.Screen name="Scores" component={Scores} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
