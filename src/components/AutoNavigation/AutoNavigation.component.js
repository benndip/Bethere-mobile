import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import MapboxNavigation from '@homee/react-native-mapbox-navigation';
import MapboxGL from '@react-native-mapbox-gl/maps';

import styles from './AutoNavigation.style';

const AutoNavigation = ({ placeLocation, onCancelNavigation }) => {

    useEffect(() => {
        MapboxGL.locationManager.start();
    }, [])

    return (
        <View style={styles.container}>
            <MapboxNavigation
                origin={[-97.760288, 30.273566]}
                destination={[-97.918842, 30.494466]}
                shouldSimulateRoute={true}
                showsEndOfRouteFeedback
                onLocationChange={(event) => {
                    const { latitude, longitude } = event.nativeEvent;
                }}
                onRouteProgressChange={(event) => {
                    const {
                        distanceTraveled,
                        durationRemaining,
                        fractionTraveled,
                        distanceRemaining,
                    } = event.nativeEvent;
                }}
                onError={(event) => {
                    const { message } = event.nativeEvent;
                }}
                onCancelNavigation={onCancelNavigation}
                onArrive={() => {
                    // Called when you arrive at the destination.
                }}
            />
        </View>
    )
}

export default AutoNavigation