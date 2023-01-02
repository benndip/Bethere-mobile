import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LocationStackParamList } from '../types/LocationStackParamList';

import { Map } from '../../screens';

const Stack = createNativeStackNavigator<LocationStackParamList>();

const LocationStack = () => {

    const { Navigator, Screen } = Stack;

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Map' component={Map} />
        </Navigator>
    )
}

export default LocationStack