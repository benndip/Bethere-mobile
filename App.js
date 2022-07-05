import 'react-native-gesture-handler';
import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox, ToastAndroid, BackHandler} from 'react-native';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);
LogBox.ignoreAllLogs(true);

//Setting the storage options
const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24 * 365, // 1 year
  enableCache: true,
  sync: {},
});

//setting global variables and functions that can be used over the whole app
global.storage = storage;

import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  let clicks = 0;
  const routeNameRef = useRef();
  const navigationRef = useRef();

  const backAction = () => {
    if (navigationRef.current.getCurrentRoute().name === 'Home') {
      if (clicks > 0) {
        BackHandler.exitApp();
      } else {
        ToastAndroid.show(
          'click again to exit Bethere',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        clicks++;
      }
      setTimeout(() => {
        clicks = 0;
      }, 1000);
      return true;
    }
    return false;
  };

  useEffect(() => {
    const init = async () => {
      BackHandler.addEventListener('hardwareBackPress', backAction);
    };
    init();
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }>
      <MainNavigator />
    </NavigationContainer>
  );
}
