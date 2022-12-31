import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from '../screens';

import BottomNavigation from './BottomNavigation';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return (
        <Drawer.Navigator
            initialRouteName='BottomNavigation'
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
                drawerType: 'slide',
                headerShown: false,
            }}
        >
            <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;