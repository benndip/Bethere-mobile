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
import Lottie from 'lottie-react-native';
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

import {setPlaces, setPlacesByTown} from '../../redux/slices/places';
import {setPlacetypes, togglePlacetypes} from '../../redux/slices/placetypes';
import {setTowns} from '../../redux/slices/towns';
import {setUser} from '../../redux/slices/auth';

const {width, height} = Dimensions.get('screen');

const TO_HEIGHT = height * 0.35;

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(' ');

  const token = useSelector(state => state.auth.token);

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
  const towns = useSelector(state => state.towns.towns);

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
        dispatch(setTowns(data.towns));
      })
      .catch(error => {
        console.log(error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchUserDetails = () => {
    setLoading(true);
    axios
      .get('/user-info', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        const {status, data} = res;
        dispatch(setUser(data.user));
      })
      .catch(error => {
        console.log(error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const search = items => {
    return items.filter(
      item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.about.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  useEffect(() => {
    fetchUserDetails();
    fetchTowns();
    fetchPlacetypes();
    fetchPlaces();
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
            <Text style={styles.locationText}>Cameroon, Buea</Text>
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
            <TouchableOpacity
              onPress={() => dispatch(setPlacesByTown(town.id))}
              style={styles.town}
              key={town.id}>
              <Text style={styles.townText}>{town.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        style={styles.flatList}
        data={search(places)}
        ListHeaderComponent={
          searchTerm.length == 0 && (
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
          )
        }
        refreshing={loading}
        onRefresh={() => {
          fetchPlaces();
          fetchUserDetails();
          fetchTowns();
          fetchPlacetypes();
        }}
        ListEmptyComponent={
          <View
            style={{
              width,
              height: '40%',
              zIndex: 9999,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Lottie
              source={require('../../../assets/lotties/68796-empty-search.json')}
              autoPlay
              loop
              style={{width: '100%', height: '100%'}}
            />
            <Text style={{alignSelf: 'center', marginTop: 10}}>
              Ooops, no places found. Please tyr another
            </Text>
          </View>
        }
        numColumns={2}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <Search onChangeText={text => setSearchTerm(text)} toHeight={TO_HEIGHT} />
    </View>
  );
};

export default Home;
