import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight + 5,
        paddingHorizontal: 12,
    },
    scroll:{
        width: '100%',
        flex: 1,
    },
    heading: {
        fontSize: 19,
        marginVertical: 12,
        alignSelf: 'center'
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: StatusBar.currentHeight + 20
    }
});

export default styles;