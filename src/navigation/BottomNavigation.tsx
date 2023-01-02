import React from 'react';
import {Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

import { BottomNavigatorParamList } from './types/BottomNavigatorParamList';
import HomeStack from './stacks/HomeStack';
import LocationStack from './stacks/LocationStack';
import WasThereStack from './stacks/WasThereStack';
import AccountStack from './stacks/AccountStack';

const Tab = createBottomTabNavigator<BottomNavigatorParamList>();

const { height } = Dimensions.get('window');

const BottomNavigation = () => {

  const { Navigator, Screen } = Tab

  return (
    <Navigator
      translucent={true}
      shifting={false}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';

          if (route.name === 'HomeStack') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }
          if (route.name === 'LocationStack') {
            iconName = focused ? 'location' : 'location-outline';
          }
          if (route.name === 'WasThereStack') {
            iconName = 'social-myspace'
          }
          if (route.name === 'AccountStack') {
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
      <Screen name="HomeStack" component={HomeStack} />
      <Screen
        name="LocationStack"
        component={LocationStack}
        options={({route}) => ({
          tabBarStyle: {display: 'none'},
        })}
      />
      <Screen name="WasThereStack" component={WasThereStack} options={{ tabBarIcon: ({ color }) => <Foundation name='social-myspace' size={22} color={color} /> }} />
      <Screen name="AccountStack" component={AccountStack} />
    </Navigator>
  );
};

export default BottomNavigation;
