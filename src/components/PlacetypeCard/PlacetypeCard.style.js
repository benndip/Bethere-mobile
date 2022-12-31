import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '48%',
        height: 55,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        marginVertical: 5,
        alignSelf:'center'
    },
    iconContainer: {
        width: '30%',
        height: '80%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(99, 110, 114,0.15)',
        marginRight: 15,
        overflow: 'hidden'
    },
    name: {
        fontWeight: '600',
        fontSize: 16
    },
    icon: {
        width: 30,
        height: 30
    }
});

export default styles;