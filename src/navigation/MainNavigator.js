import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash, Login, Signup, Landing, Home, Map, Details } from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator 
        initialRouteName="Details"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name='Spalsh' component={Splash} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Map' component={Map} />
        <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default MainNavigator