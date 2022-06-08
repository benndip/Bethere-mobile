import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withSpring } from 'react-native-reanimated';


import styles from './Splash.style';

const Splash = () => {

  const opacityValue = useSharedValue(0);
  const bottomValue = useSharedValue(0);

  const bethereTextAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value
    };
  });

  const belowTextAnimatedStyles = useAnimatedStyle(()=>{
    return {
      bottom: bottomValue.value
    }
  })
  useEffect(() => {
    opacityValue.value = withTiming(1, {duration: 2000});
    bottomValue.value = withSpring(10)
  }, [])


  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/splash.png')} style={styles.image} />
      <Animated.Text style={[styles.bethereText, bethereTextAnimatedStyles]}>Be<Text style={{ color: '#6C63FF' }}>there</Text> <Text style={{ color: '#FF6584' }}>!</Text> </Animated.Text>
      <Animated.Text style={[styles.belowText, belowTextAnimatedStyles]}>From <Text style={{ fontSize: 22, color: '#FF6584', fontWeight: 'bold' }}>Immersecity</Text> <Text style={{ fontSize: 100 }}>.</Text></Animated.Text>
    </View>
  )
}

export default Splash