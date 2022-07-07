import React from 'react';
import {View, Image, Pressable} from 'react-native';

import styles from './ImageBoard.style';

const ImageBoard = ({place_images, onImagePress}) => {
  switch (place_images.length) {
    case 1:
      return (
        <View style={styles.container}>
          {place_images.map(itemImg => (
            <Pressable
              key={itemImg.id}
              onPress={() => onImagePress(itemImg)}
              style={styles.largerView}>
              <Image source={{uri: itemImg.url}} style={styles.image} />
            </Pressable>
          ))}
        </View>
      );

    case 2:
      return (
        <View style={styles.container}>
          {place_images.map(itemImg => (
            <Pressable
              onPress={() => onImagePress(itemImg)}
              style={styles.largerView}
              key={itemImg.id}>
              <Image source={{uri: itemImg.url}} style={styles.image} />
            </Pressable>
          ))}
        </View>
      );

    case 3:
      let firstImage = place_images.find(image => image); //Returns the first element in the array
      let secondAndThirdImages = place_images.slice(1, 3); //return place_images at index 1 and 2(3-1)
      return (
        <View style={styles.container}>
          <Pressable
            onPress={() => onImagePress(firstImage)}
            style={styles.largerView}>
            <Image source={{uri: firstImage.url}} style={styles.image} />
          </Pressable>
          <View style={styles.smallerView}>
            {secondAndThirdImages.map(itemImg => (
              <Pressable
                onPress={() => onImagePress(itemImg)}
                style={[styles.smallestView, {borderBottomWidth: 0.2}]}
                key={itemImg.id}>
                <Image source={{uri: itemImg.url}} style={styles.image} />
              </Pressable>
            ))}
          </View>
        </View>
      );
    default:
      return null;
  }
};

export default ImageBoard;
