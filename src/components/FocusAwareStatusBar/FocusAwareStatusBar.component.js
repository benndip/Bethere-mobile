import React, {useEffect} from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import SystemNavigationBar from 'react-native-system-navigation-bar';


const FocusAwareStatusBar = (props) => {
  const isFocused = useIsFocused();

  const setNativeBottomTab = () => {
    SystemNavigationBar.navigationHide();

  }

  useEffect(() => {
    setNativeBottomTab()
  }, [])
  
  return isFocused && <StatusBar {...props} />;
}

export default FocusAwareStatusBar;