import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    nameOfPlace: {
        fontWeight: 'bold',
        marginVertical: 10,
        fontSize: 22
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
        height: height,
        width: '100%',
        alignSelf: 'center',
        marginVertical: 20
    },
    scrollToBottomView: {
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        backgroundColor: '#ff5252',
        opacity: 0.9,
        zIndex: 99999,
        right: 15,
        top: 60,
        justifyContent:'center',
        alignItems: 'center'
    },
    placeAndRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal: 5
    },
    iconAndRatingContaier: {
        justifyContent: 'center',
        width: '22%',
        height: 60,
        alignItems: 'center'
    },
    ratingText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    vr_ar: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        width: 100,
        justifyContent: 'space-between',
        margin: 10
    }
});

export default styles;