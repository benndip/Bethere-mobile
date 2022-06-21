import { StyleSheet, StatusBar } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        paddingTop: StatusBar.currentHeight + 15
    },
    touchContainer: {
        width: '100%',
        height: 140,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 20
    },
    paymentProviderTouch: {
        width: '45%',
        height: '90%',
        padding: 5,
        borderRadius: 6,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    heading: {
        fontWeight: '700',
        alignSelf: 'center',
        marginVertical: 10,
        fontSize: 20
    },
    input: {
        width: '95%',
        height: 50,
        backgroundColor: 'rgba(200, 214, 229,0.5)',
        marginVertical: 60,
        paddingLeft: 10,
        borderRadius: 6,
        alignSelf: 'center'
    },
    encouragement: {
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 25,
        color: '#FFC104'
    },
    getCoinsTouch: {
        width: '95%',
        height: 50,
        backgroundColor: theme.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center'
    },
    getCoinsText: {
        fontSize: 20,
        color: '#ffffff'
    }
});

export default styles;