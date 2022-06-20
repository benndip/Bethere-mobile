import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './News.styles';

const New = ({ item }) => {

    const { title, description, type, url, created_at } = item;

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: url }} />
            </View>
            <View style={styles.textsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description} numberOfLines={3}>{description}</Text>
                <Text style={styles.genre}>{type} <Text style={styles.dot}>.</Text>  <Text style={styles.datePosted}>{created_at}</Text> </Text>
            </View>
        </TouchableOpacity>
    );
}

export default New