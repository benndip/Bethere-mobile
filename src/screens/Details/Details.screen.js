import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import ImageViewer from 'react-native-image-zoom-viewer';
import styles from './Details.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { FocusAwareStatusBar, ImageBoard, Map, AutoNavigation } from '../../components';
import { item_images } from '../../../assets/data';

const { height } = Dimensions.get('screen');

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Details = ({ route }) => {

  // const { id, item_images, name, description, location, user, price, category_id } = route.params.item

  const scrollY = useRef(new Animated.Value(0)).current
  const scrollViewRef = useRef(null);

  const [imagesForModal, setImagesForModal] = useState([]);
  const [imagesModalVisible, setImagesModalVisible] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false)

  const showImages = (image) => {
    let newImages = []
    newImages = item_images.map(image => ({ url: image.url, width: 400, height: 400 }));
    const selectedImage = newImages.find(img => img.url == image.url)
    const indexOfselectedImage = newImages.indexOf(selectedImage)
    const removedImages = newImages.splice(indexOfselectedImage, 1)
    newImages.unshift(removedImages[0])
    let imagesForModal = [...newImages]
    setImagesForModal(imagesForModal)
    setImagesModalVisible(true)
  }

  const handleBackButtonClick = () => {
    setImagesModalVisible(false)
  }

  const toggleNavigation = () => {
    setShowNavigation(prev => !prev);
  }

  const scrollToBottomScale = scrollY.interpolate({
    inputRange: [-1, 0, height * 0.9],
    outputRange: [0, 0, 1]
  })

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )
        }
      >
        <FocusAwareStatusBar backgroundColor='transparent' barStyle='light-content' translucent />
        <Modal
          isVisible={imagesModalVisible}
          onBackButtonPress={handleBackButtonClick}
          onBackdropPress={handleBackButtonClick}
          swipeDirection={['down']}
          onSwipeComplete={handleBackButtonClick}
          enableSwipeDown
          style={{ margin: 0 }}
        >
          <ImageViewer imageUrls={imagesForModal} />
        </Modal>
        <ImageBoard
          item_images={item_images}
          onImagePress={(image) => showImages(image)}
        />
        <View style={styles.placeAndRatingContainer}>
          <Text style={styles.nameOfPlace}>Osing London</Text>
          <TouchableOpacity style={styles.iconAndRatingContaier}>
            <Ionicons
              name='star'
              color='#f9ca24'
              size={22}
            />
            <Text style={styles.ratingText}>4.5</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.details}>This is the first palace of Ozin and also the best that we can have here. This can just be the best thing that we could do so that we have our being. But I am not saying anything. He</Text>
        <View style={styles.mapContainer}>
          <AnimatedTouchable
            onPress={() => scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true })}
            style={[styles.scrollToBottomView, { transform: [{ scale: scrollToBottomScale }] }]}
          >
            <AntDesign name='down' size={30} color='#ffffff' />
          </AnimatedTouchable>
          <Map
            centerCoordinate={[4, 9]}
            placeLocation={[9, 4]}
          />
        </View>
      </Animated.ScrollView>
      {showNavigation && <AutoNavigation onCancelNavigation={toggleNavigation} placeLocation={[9, 4]} />}
      <TouchableOpacity
        style={styles.touch}
        activeOpacity={0.7}
        onPress={toggleNavigation}
      >
        <Text style={styles.touchText}>Take me there</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Details