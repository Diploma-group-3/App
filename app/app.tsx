import { useFonts } from 'expo-font';
import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './appNavigator';



const App = () => {
  let [fontsLoaded]=useFonts({
    'Comfortaa':require('../assets/fonts/Comfortaa-Regular.ttf'),
  })
  return(
  <AppNavigator />);
  
};

export default App;
