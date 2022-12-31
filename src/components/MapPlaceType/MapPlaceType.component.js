import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import styles from './MapPlaceType.style';

const MapPlaceType = ({ item }) => {
  const { name, icon } = item;
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.nameContainer}>
        <Text numberOfLines={1} style={styles.place}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MapPlaceType