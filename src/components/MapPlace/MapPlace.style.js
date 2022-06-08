import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        width: 0.85 * width,
        height: 0.12 * height,
        backgroundColor: '#ffffff',
        marginHorizontal: 5,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: '30%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginHorizontal: 10,
        borderRadius: 10
    },
    detailsContainer:{
        width: '60%',
        height: '85%',
        overflow: 'hidden',
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        height: '100%',
        alignSelf: 'center'
    },
    minuteText: {
        color: '#3BAFE9',
        fontSize: 12
    },
    distanceText: {
        color: '#141516'
    },
    place: {
        fontWeight: '700',
        fontSize: 18
    },
    details: {
        color: '#000',
        opacity: 0.5,
        fontSize: 14
    },
    touch: {
        position: 'absolute',
        top: 9,
        right: 10,
        zIndex: 99999
    }
});

export default styles;