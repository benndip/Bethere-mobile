import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        width,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderWidth: 0,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20, 
        alignSelf: 'center'
    },
    iconAndInputContainer: {
        width: '90%',
        height: '55%',
        alignSelf: 'center',
        borderColor: 'green',
        borderWidth: 0,
        flexDirection: 'row',
        backgroundColor: '#303030',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 10

    },
    input: {
        width: '90%',
        marginLeft: 5,
        paddingLeft: 2,
        color: '#ffffff',
    }
});

export default styles;