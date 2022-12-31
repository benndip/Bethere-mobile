import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Splash,
  Login,
  Signup,
  Landing,
  Home,
  Map,
  Details,
  Account,
  MainScene,
  MainArScene,
  News,
  Payment,
} from '../screens';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="MainScene" component={MainScene} />
      <Stack.Screen name="MainArScene" component={MainArScene} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
