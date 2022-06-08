import React from 'react'
import { View, TouchableOpacity, Text, Pressable, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './PlaceCard.style'

const PlaceCard = ({ item }) => {

  const { name, image, location } = item;

  return (
    <Pressable style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.heartContainer}>
          <Ionicons name="heart" color='#F32F31' size={18} />
        </TouchableOpacity>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.placeName}>{name}</Text>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <Entypo name="location-pin" color='#ccc' size={18} style={{ marginLeft: -5 }}/>
          <Text numberOfLines={1}>PlaceCard, Bali</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default PlaceCard