import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './PlacetypeCard.style'

const PlacetypeCard = ({ item }) => {
  const { name, icon } = item
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
            <Image source={icon} style={styles.icon} />
        </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  )
}

export default PlacetypeCard