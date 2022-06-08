import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './Home.style';
import { FocusAwareStatusBar, PlacetypeCard, PlaceCard } from '../../components';
import { placetypes, places } from '../../../assets/data';

const Home = () => {

  const renderItem = ({ item }) => {
    return (
      <PlaceCard item={item} />
    )
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle='dark-content' translucent backgroundColor='transparent' />

      {/* Top view */}
      <View style={styles.topView}>
        <TouchableOpacity style={styles.drawerIconContainer}>
          <Svg
            height="80%" width="80%"
            viewBox="0 0 20 20"
          >
            <Path
              d="M7.5 11A1.5 1.5 0 0 1 9 12.5v4A1.5 1.5 0 0 1 7.5 18h-4A1.5 1.5 0 0 1 2 16.5v-4A1.5 1.5 0 0 1 3.5 11h4Zm9 0a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 0 1 1.5-1.5h4Zm-9 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Zm9 0h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Zm-9-10A1.5 1.5 0 0 1 9 3.5v4A1.5 1.5 0 0 1 7.5 9h-4A1.5 1.5 0 0 1 2 7.5v-4A1.5 1.5 0 0 1 3.5 2h4Zm9 0A1.5 1.5 0 0 1 18 3.5v4A1.5 1.5 0 0 1 16.5 9h-4A1.5 1.5 0 0 1 11 7.5v-4A1.5 1.5 0 0 1 12.5 2h4Zm-9 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Zm9 0h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Z"
              fill={'#2d3436'}
            />
          </Svg>
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.currentLocationText}>Current location</Text>
          <View style={styles.iconAndLocation}>
            <Entypo name="location-pin" color='#3BAFE9' size={18} />
            <Text style={styles.locationText}>Depansar, Bali</Text>
          </View>
        </View>
        <View style={styles.avatarContainer}>
          <Image source={require('../../../assets/images/avatar.png')} style={styles.avatarImage} />
        </View>
      </View>

      <FlatList
        style={styles.flatList}
        data={places}
        ListHeaderComponent={
          <>
            <View style={styles.placetypesContainer}>
              {placetypes.map(placetype=>(
                <PlacetypeCard item={placetype} key={placetype.id} />
              ))}
            </View>
            <View style={styles.popularAndViewAll}>
              <Text style={styles.popularText}>Popular in Town</Text>
              <TouchableOpacity>
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        numColumns={2}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Home