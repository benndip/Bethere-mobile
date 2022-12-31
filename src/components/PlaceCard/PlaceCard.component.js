import React from 'react';
import {View, TouchableOpacity, Text, Pressable, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './PlaceCard.style';

const PlaceCard = ({item, onPress}) => {
  const {name, lat, lng, placetype, town, place_images} = item;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.heartContainer}>
          <Ionicons name="heart" color="#F32F31" size={18} />
        </TouchableOpacity>
        <Image
          resizeMode="cover"
          source={{uri: place_images[0].url}}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.placeName}>
          {name}
        </Text>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <Entypo
            name="location-pin"
            color="#ccc"
            size={18}
            style={{marginLeft: -5}}
          />
          <Text style={{letterSpacing: 2}} numberOfLines={1}>
            {town.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PlaceCard;
