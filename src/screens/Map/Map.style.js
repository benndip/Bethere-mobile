import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mapContaier: {
        width: '100%',
        height: '100%'
    },
    map: {
        flex: 1
    },
    placesScroll: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        paddingVertical: 5
    },
    backArrowContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#414F59',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
        opacity: 0.8
    },
    filterContainer: {
        position: 'absolute',
        top: 40,
        right: 20,
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#414F59',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
        opacity: 0.8
    },
    placeTypesScroll: {
        position: 'absolute',
        top: 0.15 * height,
        width: 0.35 * width,
        paddingVertical: 5,
        right: 20,
        height: 0.6 * height,
        zIndex: 99999
    }
});

export default styles;