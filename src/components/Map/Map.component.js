import React, {useEffect, useRef, useState} from 'react';
import {View, PermissionsAndroid, Platform} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Geolocation from 'react-native-geolocation-service';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import {lineString as makeLineString} from '@turf/helpers';
import {useDispatch} from 'react-redux';
import {setLocation} from '../../redux/slices/location';

import styles from './Map.style';

const accessToken =
  'pk.eyJ1IjoiYmVubmRpcCIsImEiOiJjbDN2OXFsZnQwaXdxM2lwaWlnbjhpOTF2In0.gM_r3V8ooTJficCmGqVgIg';

MapboxGL.setAccessToken(accessToken);
const directionsClient = MapboxDirectionsFactory({accessToken});

const Maps = ({placeLocation}) => {
  const mapRef = useRef(null);
  const cameraRef = useRef(null);

  const [route, setRoute] = useState(null);
  const [userLocation, setUserLocation] = useState([9, 4]);

  const dispatch = useDispatch();

  const requestPermission = () => {
    if (Platform.OS === 'ios') return Promise.resolve(true);
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'GPS coordinate rights required',
        message: 'This data is needed to generate your address',
      },
    ).then(granted => {
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return Promise.resolve('You can use the location');
      } else {
        return Promise.reject('Location permission denied');
      }
    });
  };

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

  const fetchRoute = async () => {
    const reqOptions = {
      waypoints: [{coordinates: userLocation}, {coordinates: placeLocation}],
      profile: 'walking',
      geometries: 'geojson',
    };
    const res = await directionsClient.getDirections(reqOptions).send();
    const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
    setRoute(newRoute);
  };

  const renderRoute = () => {
    let layerStyles = {
      route: {
        lineColor: 'brown',
        lineCap: MapboxGL.LineJoin.Round,
        lineWidth: 3,
        lineOpacity: 0.84,
      },
    };
    return (
      route && (
        <MapboxGL.ShapeSource id="routeSource" shape={route}>
          <MapboxGL.LineLayer id="routeFill" style={layerStyles.route} />
        </MapboxGL.ShapeSource>
      )
    );
  };

  useEffect(() => {
    onUserLocationUpdate();
    MapboxGL.locationManager.start();
  }, []);

  useEffect(() => {
    fetchRoute();
    requestPermission();
  }, [userLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.normalMapView}>
        <MapboxGL.MapView
          ref={c => (mapRef.current = c)}
          centerCoordinate={userLocation}
          style={styles.container}
          logoEnabled={false}
          onUserLocationUpdate={onUserLocationUpdate}
          compassEnabled={true}>
          <MapboxGL.Camera
            zoomLevel={14}
            animationMode={'flyTo'}
            animationDuration={2500}
            ref={c => (cameraRef.current = c)}
            centerCoordinate={userLocation}
          />
          <MapboxGL.PointAnnotation
            id="yes"
            title="Buea"
            snippet="ok"
            coordinate={placeLocation}
          />
          <MapboxGL.UserLocation
            animated={true}
            visible
            onUpdate={onUserLocationUpdate}
            showsUserHeadingIndicator
          />
          {renderRoute()}
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default Maps;
