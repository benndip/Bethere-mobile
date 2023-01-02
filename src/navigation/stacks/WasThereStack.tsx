import React from "react";

import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import { WasThere, WasThereDetails } from "../../screens";
import { WasThereStackParamList } from "../types/WasThereStackParamList";

const Stack = createNativeStackNavigator<WasThereStackParamList>();

const WasThereStack = () => {

    const { Navigator, Screen } = Stack
    
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName='WasThere'>
            <Screen name='WasThere' component={WasThere} />
            <Screen name='WasThereDetails' component={WasThereDetails} />
        </Navigator>
    )
}

export default WasThereStack