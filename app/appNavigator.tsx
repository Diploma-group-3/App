import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Diet from './(tabs)/diet';
import LoadingScreen from './(tabs)/loading';
import Login from './(tabs)/login';
import Map from './(tabs)/map';
import OnBoarding from './(tabs)/onboarding';
import Profile from './(tabs)/profile';
import Register from './(tabs)/register';
import Settings from './(tabs)/settinngs';
import NavigationBar from './NavigationBar';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Diet" component={Diet} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={NavigationBar} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
};

export default AppNavigator;
