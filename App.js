import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {LogBox} from "react-native";

LogBox.ignoreLogs([ "exported from 'deprecated-react-native-prop-types'." ])
LogBox.ignoreAllLogs(true)

import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
