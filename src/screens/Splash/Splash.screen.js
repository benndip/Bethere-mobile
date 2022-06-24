import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {setUser, setToken} from '../../redux/slices/auth';
import {BethereText} from '../../components';

import styles from './Splash.style';

const Splash = ({navigation}) => {
  const bottomValue = useSharedValue(0);

  const belowTextAnimatedStyles = useAnimatedStyle(() => {
    return {
      bottom: bottomValue.value,
    };
  });

  const checkRouteToGo = async () => {
    try {
      const notFirstTime = await storage.load({key: 'NOTFIRSTTIME'});
      try {
        const user = await storage.load({key: 'USER'});
        const token = await storage.load({key: 'TOKEN'});
        setUser(user);
        setToken(token);
        navigation.navigate('DrawerNavigation');
      } catch (error) {
        navigation.navigate('Landing');
      }
    } catch (error) {
      await storage.save({
        key: 'NOTFIRSTTIME',
        data: true,
        expires: 1000 * 3600 * 24 * 360,
      });
      navigation.navigate('Landing');
    }
  };

  useEffect(() => {
    bottomValue.value = withSpring(10);
    setTimeout(() => {
      checkRouteToGo(); // run this  2 seconds later so we wait for animation to complete.
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6C63FF" />
      <Image
        source={require('../../../assets/images/splash.png')}
        style={styles.image}
      />
      <BethereText />
      <Animated.Text style={[styles.belowText, belowTextAnimatedStyles]}>
        From{' '}
        <Text style={{fontSize: 22, color: '#FF6584', fontWeight: 'bold'}}>
          Immersecity
        </Text>{' '}
        <Text style={{fontSize: 100}}>.</Text>
      </Animated.Text>
    </View>
  );
};

export default Splash;
