import React, {useEffect} from 'react';
import {Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import styles from './BethereText.style';

const BethereText = () => {
  const opacityValue = useSharedValue(0);

  const bethereTextAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
    };
  });

  useEffect(() => {
    opacityValue.value = withTiming(1, {duration: 2000});
  }, []);

  return (
    <Animated.Text style={[styles.bethereText, bethereTextAnimatedStyles]}>
      Be<Text style={{color: '#6C63FF'}}>there</Text>{' '}
      <Text style={{color: '#FF6584'}}>!</Text>{' '}
    </Animated.Text>
  );
};

export default BethereText;
