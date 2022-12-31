import React from 'react'
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './MapPlace.style'

const MapPlace = ({ item }) => {
    const { name, details, minutes, distance, image } = item;
    return (
        <Pressable style={styles.container}>
            <TouchableOpacity style={styles.touch}>
                <Ionicons name="heart" color='#F32F31' size={20} />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.place}>{name}</Text>
                <Text numberOfLines={2} style={styles.details}>{details}</Text>
                <Text style={styles.minuteText}>{minutes}mnt <Text style={styles.distanceText}>({distance}km)</Text></Text>
            </View>
        </Pressable>
    )
}

export default MapPlace