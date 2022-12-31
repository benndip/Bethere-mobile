import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
// import MapboxNavigation from '@homee/react-native-mapbox-navigation';
import MapboxGL from '@rnmapbox/maps';
import Geolocation from 'react-native-geolocation-service';
import {setLocation} from '../../redux/slices/location';
import {useDispatch} from 'react-redux';

import styles from './AutoNavigation.style';

const AutoNavigation = ({placeLocation, onCancelNavigation}) => {
  const [userLocation, setUserLocation] = useState([9, 4]);

  const dispatch = useDispatch();

  const onUserLocationUpdate = () => {
    Geolocation.getCurrentPosition(
      info => {
        dispatch(setLocation([info.coords.longitude, info.coords.latitude]));
        setUserLocation([info.coords.longitude, info.coords.latitude]);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    MapboxGL.locationManager.start();
  }, []);

  return (
    <View style={styles.container}>
      {/* <MapboxNavigation
        origin={userLocation}
        destination={placeLocation}
        shouldSimulateRoute={true}
        showsEndOfRouteFeedback
        onLocationChange={onUserLocationUpdate}
        onRouteProgressChange={event => {
          const {
            distanceTraveled,
            durationRemaining,
            fractionTraveled,
            distanceRemaining,
          } = event.nativeEvent;
        }}
        onError={event => {
          const {message} = event.nativeEvent;
        }}
        onCancelNavigation={onCancelNavigation}
        onArrive={() => {
          // Called when you arrive at the destination.
        }}
      /> */}
    </View>
  );
};

export default AutoNavigation;
