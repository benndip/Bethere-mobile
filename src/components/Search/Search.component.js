import React, {useState, useEffect} from 'react';
import {View, TextInput, Keyboard} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import styles from './Search.style';

const Search = ({toHeight, onChangeText}) => {
  // animation
  const animatedBottom = useSharedValue(0);

  const animatedBottomStyle = useAnimatedStyle(() => {
    return {
      bottom: animatedBottom.value,
    };
  });

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      animatedBottom.value = withTiming(toHeight);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      animatedBottom.value = withTiming(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Animated.View style={[styles.container, animatedBottomStyle]}>
      <View style={styles.iconAndInputContainer}>
        <AntDesign name="search1" size={22} color="#ffffff" />
        <TextInput
          onChangeText={onChangeText}
          style={styles.input}
          placeholder="Search your place"
          placeholderTextColor={'#ffffff'}
        />
      </View>
    </Animated.View>
  );
};

export default Search;
