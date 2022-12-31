import { StyleSheet, Dimensions } from "react-native";
import { DEVICE_WIDTH } from "../../theme/sizes";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: DEVICE_WIDTH * 0.4,
        height: 45,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    followingContainer: {
        width: 70,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    forYouContainer: {
        width: 60,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        backgroundColor: 'red',
        width: 60,
        height: 3,
        position: 'absolute',
        bottom: 0,
        borderRadius: 15
    },
    otherView: {
        flex: 1
    },
    flatList: {
        width: DEVICE_WIDTH,
    },
    listFooterComponent: {
        width: DEVICE_WIDTH,
        flexDirection: 'row',
        backgroundColor: 'red',
        flex: 1
    },
    individualMasonryContainer: { 
        width: DEVICE_WIDTH * 0.48,
    }
});

export default styles;