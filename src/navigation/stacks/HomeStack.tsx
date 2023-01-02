import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../types/HomeStackParamList';

import { Home } from '../../screens';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {

    const { Navigator, Screen } = Stack;

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Home' component={Home} />
        </Navigator>
    )
}

export default HomeStack