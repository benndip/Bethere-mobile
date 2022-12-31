import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

import {Home, Map, News, Account, WasThere} from '../screens';

const Tab = createBottomTabNavigator();

const { height } = Dimensions.get('window');

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      translucent={true}
      shifting={false}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }
          if (route.name === 'Map') {
            iconName = focused ? 'location' : 'location-outline';
          }
          if (route.name === 'WasThere') {
            iconName = 'social-myspace'
          }
          if (route.name === 'Account') {
            iconName = focused ? 'md-person' : 'md-person-outline';
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#000000',
          borderWidth: 0,
          height: height * 0.1,
          borderTopColor: 'transparent',
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Map"
        component={Map}
        options={({route}) => ({
          tabBarStyle: {display: 'none'},
        })}
      />
      <Tab.Screen name="WasThere" component={WasThere} options={{ tabBarIcon: ({ color }) => <Foundation name='social-myspace' size={22} color={color} /> }} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
