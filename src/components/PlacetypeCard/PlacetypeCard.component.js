import React, {useEffect, useRef} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useDispatch} from 'react-redux';
import {setPlacesByPlacetype} from '../../redux/slices/places';

import styles from './PlacetypeCard.style';

const AnimatedTouchable = Animatable.createAnimatableComponent(Pressable);

const PlacetypeCard = ({item}) => {
  const animationRef = useRef(null);
  const {name, icon} = item;

  const dispatch = useDispatch();

  const fadeInDown = () => animationRef.current.fadeInDown();

  useEffect(() => {
    fadeInDown();
  }, []);

  return (
    <AnimatedTouchable
      activeOpacity={0.7}
      onPress={() => dispatch(setPlacesByPlacetype(item.id))}
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
