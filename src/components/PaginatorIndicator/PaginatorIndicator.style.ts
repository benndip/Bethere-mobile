import { StyleSheet } from "react-native";
import { DEVICE_WIDTH } from "../../theme/sizes";

const styles = StyleSheet.create({
    container : {
        height: 20,
        width: DEVICE_WIDTH * 0.9,
        alignSelf: 'center',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5
    }
});

export default styles;