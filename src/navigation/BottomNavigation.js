import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Home, Map, News, Account } from '../screens';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            translucent={true}
            shifting={false}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } if (route.name === 'Map') {
                        iconName = focused ? 'location' : 'location-outline';
                    } if (route.name === 'News') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline'
                    } if (route.name === 'Account') {
                        iconName = focused ? 'md-person' : 'md-person-outline'
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={22} color={color} />;
                },
                tabBarStyle: {
                    backgroundColor: '#000000',
                    borderWidth: 0,
                    height: 55,
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Map" component={Map}
                options={({ route }) => ({
                    tabBarStyle: { display: 'none' }
                })}
            />
            <Tab.Screen name="News" component={News} options={{ tabBarBadge: 3 }} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}

export default BottomNavigation