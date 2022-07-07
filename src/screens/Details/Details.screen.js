import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity, Animated, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import ImageViewer from 'react-native-image-zoom-viewer';
import styles from './Details.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import Entypo from 'react-native-vector-icons/Entypo';

import Tts from 'react-native-tts';

import {
  FocusAwareStatusBar,
  ImageBoard,
  Map,
  AutoNavigation,
} from '../../components';
import {item_images} from '../../../assets/data';

const {height} = Dimensions.get('screen');

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Details = ({route, navigation}) => {
  const {id, place_images, name, about, lat, lng, reviews} = route.params.item;

  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  const [imagesForModal, setImagesForModal] = useState([]);
  const [imagesModalVisible, setImagesModalVisible] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [ttsStatus, setTtsStatus] = useState('initiliazing');
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);
  const [playing, setPlaying] = useState(false);

  const showImages = image => {
    let newImages = [];
    newImages = item_images.map(image => ({
      url: image.url,
      width: 400,
      height: 400,
    }));
    const selectedImage = newImages.find(img => img.url == image.url);
    const indexOfselectedImage = newImages.indexOf(selectedImage);
    const removedImages = newImages.splice(indexOfselectedImage, 1);
    newImages.unshift(removedImages[0]);
    let imagesForModal = [...newImages];
    setImagesForModal(imagesForModal);
    setImagesModalVisible(true);
  };

  const handleBackButtonClick = () => {
    setImagesModalVisible(false);
  };

  const toggleNavigation = () => {
    setShowNavigation(prev => !prev);
  };

  const scrollToBottomScale = scrollY.interpolate({
    inputRange: [-1, 0, height * 0.9],
    outputRange: [0, 0, 1],
  });

  useEffect(() => {
    Tts.addEventListener('tts-start', _event => setTtsStatus('started'));
    Tts.addEventListener('tts-finish', _event => setTtsStatus('finished'));
    Tts.addEventListener('tts-cancel', _event => setTtsStatus('cancelled'));
    Tts.setDefaultRate(speechRate);
    Tts.setDefaultPitch(speechPitch);
    Tts.getInitStatus().then(setTtsStatus('initialized'));
    return () => {
      Tts.removeEventListener('tts-start', _event => setTtsStatus('started'));
      Tts.removeEventListener('tts-finish', _event => setTtsStatus('finished'));
      Tts.removeEventListener('tts-cancel', _event =>
        setTtsStatus('cancelled'),
      );
    };
  }, []);

  const readText = async () => {
    Tts.stop();
    Tts.speak(about);
    setPlaying(true);
  };

  const updateSpeechRate = async rate => {
    await Tts.setDefaultRate(rate);
    setSpeechRate(rate);
  };

  const stopReadText = async () => {
    Tts.stop();
    setPlaying(false);
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <FocusAwareStatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
        <Modal
          isVisible={imagesModalVisible}
          onBackButtonPress={handleBackButtonClick}
          onBackdropPress={handleBackButtonClick}
          swipeDirection={['down']}
          onSwipeComplete={handleBackButtonClick}
          enableSwipeDown
          style={{margin: 0}}>
          <ImageViewer imageUrls={imagesForModal} />
        </Modal>
        <ImageBoard
          place_images={place_images}
          onImagePress={image => showImages(image)}
        />
        <View style={styles.placeAndRatingContainer}>
          <Text style={styles.nameOfPlace}>{name}</Text>
          <TouchableOpacity style={styles.iconAndRatingContaier}>
            <Ionicons name="star" color="#f9ca24" size={22} />
            <Text style={styles.ratingText}>{reviews.length}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.details}>{about}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '50%',
            marginVertical: 10,
            paddingLeft: 10,
          }}>
          {!playing ? (
            <Entypo name="controller-play" size={32} onPress={readText} />
          ) : (
            <AntDesign name="pause" size={32} onPress={stopReadText} />
          )}
          <Slider
            style={styles.slider}
            minimumValue={0.5}
            maximumValue={2}
            value={speechPitch}
            onSlidingComplete={updateSpeechRate}
          />
        </View>
        <View style={styles.vr_ar}>
          <MaterialCommunityIcons
            name="virtual-reality"
            color="#ff6b81"
            size={45}
            onPress={() => navigation.navigate('MainScene')}
          />
          <MaterialCommunityIcons
            name="augmented-reality"
            color="#f6b93b"
            size={45}
            onPress={() => navigation.navigate('MainArScene')}
          />
        </View>
        <View style={styles.mapContainer}>
          <AnimatedTouchable
            onPress={() =>
              scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true})
            }
            style={[
              styles.scrollToBottomView,
              {transform: [{scale: scrollToBottomScale}]},
            ]}>
            <AntDesign name="down" size={30} color="#ffffff" />
          </AnimatedTouchable>
          <Map placeLocation={[lng, lat]} />
        </View>
      </Animated.ScrollView>
      {showNavigation && (
        <AutoNavigation
          onCancelNavigation={toggleNavigation}
          placeLocation={[lng, lat]}
        />
      )}
      <TouchableOpacity
        style={styles.touch}
        activeOpacity={0.7}
        onPress={toggleNavigation}>
        <Text style={styles.touchText}>Take me there</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
