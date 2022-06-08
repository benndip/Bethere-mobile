import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import ImageViewer from 'react-native-image-zoom-viewer';

import styles from './Details.style';

import { FocusAwareStatusBar, ImageBoard, Map, AutoNavigation } from '../../components';
import { item_images } from '../../../assets/data';

const Details = ({ route }) => {

  // const { id, item_images, name, description, location, user, price, category_id } = route.params.item

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

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
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
        <Text style={styles.nameOfPlace}>Osing London</Text>
        <Text style={styles.details}>This is the first palace of Ozin and also the best that we can have here. This can just be the best thing that we could do so that we have our being. But I am not saying anything. He</Text>
        <View style={styles.mapContainer}>
          <Map
            centerCoordinate={[4, 9]}
            placeLocation={[9, 4]}
          />
        </View>
      </ScrollView>
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