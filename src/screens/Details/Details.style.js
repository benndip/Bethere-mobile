import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    nameOfPlace: {
        fontWeight: 'bold',
        marginVertical: 10,
        fontSize: 22,
        marginLeft: 5
    },
    details: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 16,
        lineHeight: 22
    },
    touch: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: 60,
        marginVertical: 10,
        backgroundColor: '#2c2c54',
        width: '90%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    },
    touchText:{
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 22
    },
    mapContainer: {
        height: 0.6 * height,
        width: '100%',
        alignSelf: 'center',
        marginVertical: 20
    }
});

export default styles;