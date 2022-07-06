import React, {useEffect, useRef} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from './PlacetypeCard.style';

const AnimatedTouchable = Animatable.createAnimatableComponent(Pressable);

const PlacetypeCard = ({item}) => {
  const animationRef = useRef(null);
  const {name, icon} = item;

  const fadeInDown = () => animationRef.current.fadeInDown();

  useEffect(() => {
    fadeInDown();
  }, []);

  return (
    <AnimatedTouchable
      activeOpacity={0.7}
      onPress={() => {
        console.log('Hello');
      }}
      style={styles.container}
      ref={animationRef}>
      <View style={styles.iconContainer}>
        <Image source={{uri: icon}} style={styles.icon} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </AnimatedTouchable>
  );
};

export default PlacetypeCard;
