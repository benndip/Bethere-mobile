import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        width,
        height,
        opacity: 0.95
    },
    modalView: {
        width: 0.85 * width,
        height: 0.33 * height,
        backgroundColor: '#151516',
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: 20,
        alignItems: 'center',
        padding: 30
    },
    exploreText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 0.065 * width,
        alignSelf:'center',
        textAlign:'center'
    },
    bestAppText: {
        color: '#FFFFFF',
        fontSize: 14,
        alignSelf:'center',
        textAlign:'center',
        marginTop: 24,
        opacity: 0.8,
        lineHeight: 20
    },
    createAccountBtn: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 50,
        borderRadius: 30,
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createAccountText:{
        fontWeight: '500',
        fontSize: 16
    },
    alreadyAccountText:{
        textDecorationLine: 'underline',
        color: '#FFFFFF',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 24,
        fontSize: 14
    },
    bethereText: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        top: 40,
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
        letterSpacing: 5
    }
});

export default styles;