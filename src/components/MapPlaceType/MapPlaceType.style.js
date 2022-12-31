import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: '90%',
        height: 80,
        borderRadius: 8,
        marginVertical: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 1
    },
    place: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    icon: {
        width: 40,
        height: 40
    },
    nameContainer: {
        width: '55%',
    }
});

export default styles;