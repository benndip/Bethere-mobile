import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import styles from './Landing.style';
import { FocusAwareStatusBar } from '../../components';

const { height } = Dimensions.get('screen');

const Landing = ({ navigation }) => {  

  const bottomValue = useSharedValue(-0.33 * height);
  const opacityValue = useSharedValue(0);

  const modalViewAnimatedStyles = useAnimatedStyle(()=>{
    return {
      bottom: bottomValue.value,
      opacity: opacityValue.value
    }
  });

  useEffect(() => {
    bottomValue.value = withTiming(30,{ duration: 1500 })
    opacityValue.value = withTiming(0.9,{ duration: 2000 })
  }, [])
  
  return (
    <View style={styles.container}>
        <FocusAwareStatusBar barStyle="light-content" translucent backgroundColor='transparent'  />
        <Text style={styles.bethereText}>Bethere</Text>
        <Image source={require('../../../assets/images/background.jpg')} style={styles.backgroundImage} />
        <Animated.View style={[styles.modalView, modalViewAnimatedStyles]}>
          <Text style={styles.exploreText}>Explore the world here</Text>
          <Text style={styles.bestAppText}>The best tourist app in the world in 2022. Answer to tourists for the best experice</Text>
          <TouchableOpacity 
            onPress={()=>navigation.navigate('Signup')}
            style={styles.createAccountBtn}
           >
            <Text style={styles.createAccountText}>Create an account</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>navigation.navigate('Login')}
          >
            <Text style={styles.alreadyAccountText}>Already have an account ?</Text>
          </TouchableOpacity>
        </Animated.View>
    </View>
  )
}

export default Landing