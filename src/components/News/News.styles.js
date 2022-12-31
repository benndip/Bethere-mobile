import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');
import theme from '../../theme/index';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height * 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        borderBottomColor: '#ccc',
        paddingHorizontal: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    },
    description: {
        fontWeight: '300',
        color: 'gray'
    },
    genre: {
        color: '#f0932b',
        fontWeight: '700'
    },
    datePosted:{
        fontSize: 12,
        color: '#ccc'
    },
    dot: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ccc'
    },
    textsContainer: {
        width: '60%',
        height: '85%',
        justifyContent: 'space-between',
    },
    imageContainer:{
        width: '40%',
        height: '85%',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        borderRadius: 10
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default styles;