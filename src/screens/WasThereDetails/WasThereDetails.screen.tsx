import React, { useState } from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import PaginatorIndicator from '../../components/PaginatorIndicator/PaginatorIndicator.component';
import {DEVICE_WIDTH} from '../../theme/sizes';
import styles from './WasThereDetails.style';

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
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
    </ScrollView>
  );
};

export default WasThereDetails;
