import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Platform, FlatList } from 'react-native';
import { FocusAwareStatusBar, MapPlace, MapPlaceType } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MapboxGL from "@react-native-mapbox-gl/maps";

import styles from './Map.style';

import { places, placetypes } from '../../../assets/data';

MapboxGL.setAccessToken("pk.eyJ1IjoiYmVubmRpcCIsImEiOiJjbDN2OXFsZnQwaXdxM2lwaWlnbjhpOTF2In0.gM_r3V8ooTJficCmGqVgIg");


const Map = () => {

    const IS_ANDROID = Platform.OS === 'android';

    const mapRef = useRef(null);
    const cameraRef = useRef(null);

    const [isAndroidPermissionGranted, setIsAndroidPermissionGranted] = useState(false);
    const [isFetchingAndroidPermission, setIsFetchingAndroidPermission] = useState(true);
    const [zoomLevel, setZoomLevel] = useState(14);
    const [showPlaces, setShowPlaces] = useState(true);

    const onUserLocationUpdate = () => {

    }

    const renderItem = ({ item }) => <MapPlace item={item} />
    const renderItemMapPlaceType = ({ item }) => <MapPlaceType item={item} />

    useEffect(() => {
        MapboxGL.setTelemetryEnabled(true);

        //Grant permissions for location
        if (IS_ANDROID) {
            const isGranted = MapboxGL.requestAndroidLocationPermissions();
            setIsAndroidPermissionGranted(isGranted);
            setIsFetchingAndroidPermission(false);
        };
    }, []);

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
            <View style={styles.backArrowContainer}>
                <Ionicons name='chevron-back-sharp' color='#ffffff' size={20} />
            </View>
            <View style={styles.filterContainer}>
                <FontAwesome name='filter' color='#ffffff' size={20} />
            </View>
            <View style={styles.mapContaier}>
                <MapboxGL.MapView
                    style={styles.map}
                    compassEnabled={false}
                    ref={c => (mapRef.current = c)}
                    zoomLevel={zoomLevel}
                    centerCoordinate={[4, 9]}
                    zoomEnabled={true}
                    rotateEnabled={true}
                    userTrackingMode={MapboxGL.UserTrackingModes.Follow}
                    logoEnabled={false}
                >
                    <MapboxGL.Camera
                        zoomLevel={zoomLevel}
                        animationMode={'flyTo'}
                        animationDuration={5000}
                        ref={c => (cameraRef.current = c)}
                        centerCoordinate={[4, 9]}
                        followUserLocation={true}
                        followUserMode='normal'
                    />
                    <MapboxGL.UserLocation
                        animated={true}
                        visible={true}
                        androidRenderMode='normal'
                        onUpdate={onUserLocationUpdate}
                        showsUserHeadingIndicator={true}
                    />
                </MapboxGL.MapView>
            </View>
            {
                showPlaces
                &&
                <FlatList
                    horizontal
                    data={places}
                    renderItem={renderItem}
                    style={styles.placesScroll}
                    showsHorizontalScrollIndicator={false}
                />
            }
            <FlatList
                style={styles.placeTypesScroll}
                renderItem={renderItemMapPlaceType}
                data={placetypes}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Map