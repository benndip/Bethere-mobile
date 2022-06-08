import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        height: width,
        width: width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
        flexDirection: 'row'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    largerView: {
        flex: 1,
        borderWidth: .3,
        borderColor: '#c8d6e5',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    smallerView: {
        flex: 1,
        borderWidth: .1,
        borderColor: '#c8d6e5',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    smallestView: {
        flex: 1,
        borderColor: '#c8d6e5'
    }
});

export default styles