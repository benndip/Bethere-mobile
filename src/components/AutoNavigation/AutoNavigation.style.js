import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        width,
        height,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9999999
    }
});

export default styles;