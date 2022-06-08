import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from 'react-native-geolocation-service';
import { connect } from 'react-redux';
// import * as actions from '../../redux/actions/actions';


import styles from './Map.style'
MapboxGL.setAccessToken("pk.eyJ1IjoiYmVubmRpcCIsImEiOiJjbDN2OXFsZnQwaXdxM2lwaWlnbjhpOTF2In0.gM_r3V8ooTJficCmGqVgIg");

const Maps = ({ centerCoordinate, placeLocation }) => {

	const mapRef = useRef(null);
	const cameraRef = useRef(null);


	const onUserLocationUpdate = () => {
		// Geolocation.getCurrentPosition(info => {
		// 	getUserLocation([info.coords.longitude, info.coords.latitude])
		// }, (error) => {
		// 	console.log(error.code, error.message);
		// },
		// 	{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 })
	}

	useEffect(() => {
		MapboxGL.locationManager.start();
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.normalMapView}>
				<MapboxGL.MapView
					ref={c => (mapRef.current = c)}
					centerCoordinate={centerCoordinate}
					style={styles.container}
					logoEnabled={false}
					compassEnabled={true}
				>
					<MapboxGL.Camera
						zoomLevel={8}
						animationMode={'flyTo'}
						animationDuration={2500}
						ref={c => (cameraRef.current = c)}
						centerCoordinate={centerCoordinate}
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
				</MapboxGL.MapView>
			</View>
		</View>
	)
}

export default Maps
