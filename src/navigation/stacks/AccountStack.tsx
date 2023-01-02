import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Account } from '../../screens';

const Stack = createNativeStackNavigator();

const AccountStack = () => {

  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Account" component={Account} />
    </Navigator>
  );
};

export default AccountStack;
