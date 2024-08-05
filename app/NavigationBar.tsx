import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FavoriteScreen from './(tabs)/favorite';
import MainScreen from './(tabs)/main';
import ProfileScreen from './(tabs)/profile';
import SearchScreen from './(tabs)/search';

const mainName = 'Main';
const searchName = 'Search';
const favoriteName = 'Favorite';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CustomTabBarButton({ children, onPress, accessibilityLabel, accessibilityState }) {
  const isFocused = accessibilityState ? accessibilityState.selected : false;
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <View style={[styles.iconContainer, isFocused && styles.focusedIconContainer]}>
        <View style={styles.stateLayer}>{children}</View>
      </View>
      <Text style={styles.labelText}>{accessibilityLabel}</Text>
    </TouchableOpacity>
  );
}

function NavigationBar() {
  return (
    <Tab.Navigator
      initialRouteName={mainName}
      screenOptions={( { route }) => ({
        tabBarButton: (props) => (
          <CustomTabBarButton
          
            {...props}
            accessibilityLabel={
              route.name === mainName
                ? "Для вас"
                : route.name === searchName
                ? "Пошук"
                : route.name === favoriteName
                ? "Улюблене"
                : "Профіль"
            }
          />
        ),
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let iconStyle = styles.icon;

          if (route.name === mainName) {
            iconSource = require('../assets/icons/home.png');
            iconStyle = styles.homeIcon;
          } else if (route.name === searchName) {
            iconSource = require('../assets/icons/search.png');
          } else if (route.name === favoriteName) {
            iconSource = require('../assets/icons/like.png');
          } else if (route.name === profileName) {
            iconSource = require('../assets/icons/profile.png');
          }

          return <Image source={iconSource} style={iconStyle} />;
        },
        tabBarStyle: styles.navbar,
        tabBarShowLabel: false,
        headerShown: false,
        
      })}
    >
      <Tab.Screen name={mainName} component={MainScreen} />
      <Tab.Screen name={searchName} component={SearchScreen} />
      <Tab.Screen name={favoriteName} component={FavoriteScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Stack.Navigator screenOptions={({ headerShown: false })} >
      <Stack.Screen name="MainTab" component={NavigationBar}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderTopColor: '#1835B6',
    borderTopWidth: 2,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    height: 32,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: 'transparent',
  },
  focusedIconContainer: {
    backgroundColor: '#FFB7B7',
  },
  stateLayer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
  homeIcon: {
    width: 18,
    height: 18,
  },
  icon: {
    width: 24,
    height: 24,
  },
  labelText: {
    marginTop: 4,
    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 15,
    color: '#1835B6',
  },
});
