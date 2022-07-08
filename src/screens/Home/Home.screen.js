import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './Home.style';
import theme from '../../theme';
import {
  FocusAwareStatusBar,
  PlacetypeCard,
  PlaceCard,
  Search,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import axios from '../../axios/axios';
import {ScrollView} from 'react-native-gesture-handler';

import {towns} from '../../../assets/data';
import {
  setPlaces,
  setPlacesByTown,
  setPlacesByPlacetype,
} from '../../redux/slices/places';
import {setPlacetypes, togglePlacetypes} from '../../redux/slices/placetypes';

const {height} = Dimensions.get('screen');

const TO_HEIGHT = height * 0.35;

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const renderItem = ({item}) => {
    return (
      <PlaceCard
        item={item}
        onPress={() => navigation.navigate('Details', {item})}
      />
    );
  };

  const places = useSelector(state => state.places.currentPlaces);
  const placetypes = useSelector(state => state.placetypes.currentPlacetypes);

  const dispatch = useDispatch();

  const fetchPlacetypes = () => {
    setLoading(true);
    axios
      .get('/place-types')
      .then(res => {
        const {status, data} = res;
        dispatch(setPlacetypes(data.placeTypes));
      })
      .catch(error => {
        console.log(error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchPlaces = () => {
    setLoading(true);
    axios
      .get('/places')
      .then(res => {
        const {status, data} = res;
        dispatch(setPlaces(data.places));
      })
      .catch(error => {
        console.log(error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchTowns = () => {
    setLoading(true);
    axios
      .get('/towns')
      .then(res => {
        const {status, data} = res;
        dispatch(setTowns(data.places));
      })
      .catch(error => {
        console.log(error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTowns();
    fetchPlaces();
    fetchPlacetypes();
  }, []);

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.PRIMARY_COLOR}
      />

      {/* Top view */}
      <View style={styles.topView}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.drawerIconContainer}>
          <Svg height="80%" width="80%" viewBox="0 0 20 20">
            <Path
              d="M7.5 11A1.5 1.5 0 0 1 9 12.5v4A1.5 1.5 0 0 1 7.5 18h-4A1.5 1.5 0 0 1 2 16.5v-4A1.5 1.5 0 0 1 3.5 11h4Zm9 0a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 0 1 1.5-1.5h4Zm-9 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Zm9 0h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Zm-9-10A1.5 1.5 0 0 1 9 3.5v4A1.5 1.5 0 0 1 7.5 9h-4A1.5 1.5 0 0 1 2 7.5v-4A1.5 1.5 0 0 1 3.5 2h4Zm9 0A1.5 1.5 0 0 1 18 3.5v4A1.5 1.5 0 0 1 16.5 9h-4A1.5 1.5 0 0 1 11 7.5v-4A1.5 1.5 0 0 1 12.5 2h4Zm-9 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Zm9 0h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Z"
              fill={'#2d3436'}
            />
          </Svg>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.currentLocationText}>Current location</Text>
          <View style={styles.iconAndLocation}>
            <Entypo name="location-pin" color="#3BAFE9" size={18} />
            <Text style={styles.locationText}>Depansar, Bali</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Account')}
          style={styles.avatarContainer}>
          <Image
            source={require('../../../assets/images/avatar.png')}
            style={styles.avatarImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.towns}>
        <ScrollView
          horizontal
          contentContainerStyle={{alignItems: 'center', paddingLeft: 4}}
          showsHorizontalScrollIndicator={false}>
          {towns.map(town => (
            <TouchableOpacity style={styles.town} key={town.id}>
              <Text style={styles.townText}>{town.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        style={styles.flatList}
        data={places}
        ListHeaderComponent={
          <>
            <View style={styles.placetypesContainer}>
              {placetypes.map(placetype => (
                <PlacetypeCard item={placetype} key={placetype.id} />
              ))}
            </View>
            <View style={styles.popularAndViewAll}>
              <Text style={styles.popularText}>Popular in Town</Text>
              <TouchableOpacity onPress={() => dispatch(togglePlacetypes())}>
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        ListEmptyComponent={
          <ActivityIndicator
            size={'large'}
            color={theme.PRIMARY_COLOR}
            style={{alignSelf: 'center'}}
          />
        }
        numColumns={2}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <Search toHeight={TO_HEIGHT} />
    </View>
  );
};

export default Home;
