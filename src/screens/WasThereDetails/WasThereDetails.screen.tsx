import React, { useState } from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import PaginatorIndicator from '../../components/PaginatorIndicator/PaginatorIndicator.component';
import {DEVICE_WIDTH} from '../../theme/sizes';
import styles from './WasThereDetails.style';

import Ionicons from 'react-native-vector-icons/Ionicons';

const WasThereDetails: React.FC = () => {

  const images = [
    'https://thumbs.dreamstime.com/b/jour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg',
    'https://thumbs.dreamstime.com/b/jour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg',
    'https://thumbs.dreamstime.com/b/jour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScrollView>
      <ScrollView
        style={styles.container}
        horizontal
        snapToInterval={DEVICE_WIDTH}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={event => {
          let offSetX = event.nativeEvent.contentOffset.x;
          let calculatedActiveIndex = Math.floor(offSetX / DEVICE_WIDTH)
          if (offSetX > 0 && Number.isInteger(calculatedActiveIndex)) {
            setActiveIndex(calculatedActiveIndex);
          }
        }}>
        {images.map((image: string, index: number) => {
          return <Image source={{uri: image}} style={styles.image} />;
        })}
      </ScrollView>
      <PaginatorIndicator activeIndex={activeIndex} data={images} />
      <View>
        <View style={styles.avatarAndTextAndFollowContainer}>
          <View style={styles.avatarAndTextContainer}>
            <Image source={{ uri: 'https://thumbs.dreamstime.com/b/jour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg' }} style={styles.avatar} />
            <View style={styles.textsContainer}>
              <Text>Beendip</Text>
              <Text>216k followers</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.captionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
      <View style={styles.visitAndHeartContainer}>
        <TouchableOpacity style={styles.visitContainer}>
          <Text>Visit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons style={styles.heartIcon} name='heart' color='#ee5253' size={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.moreLikeThis}>More Like this</Text>
    </ScrollView>
  );
};

export default WasThereDetails;
