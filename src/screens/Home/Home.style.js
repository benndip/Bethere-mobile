import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 50,
        width: '100%',
        backgroundColor: '#F6F6F6'
    },
    drawerIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 60,
        justifyContent: 'space-between'
    },
    iconAndLocation: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarContainer: {
        width: 40,
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        overflow: 'hidden'
    },
    avatarImage: {
        width: '100%',
        height: '100%'
    },
    locationText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    currentLocationText: {
        fontSize: 12,
        color: '#8A8A8A'
    },
    placetypesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        marginVertical: 0,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 2
    },
    flatList: {
        width: '100%'
    },
    popularAndViewAll: {
        width: '100%',
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 9,
        marginBottom: 10,
        alignItems: 'center'
    },
    popularText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    viewAllText:{
        color: '#3BAFE9',

    }
});

export default styles;