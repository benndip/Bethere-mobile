import { StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    image: {
        width: 0.9 * width,
        height: 0.32 * height
    },
    bethereText:{
        fontSize: 62,
        fontWeight: 'bold',
        color: '#2d3436'
    },
    belowText: {
        position: 'absolute',
        color: '#353b48'
    }
});

export default styles;