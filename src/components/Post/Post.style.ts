import { StyleSheet } from "react-native";

import {DEVICE_WIDTH} from '../../theme/sizes';

const styles = (imageWidth?: number, imageHeight?: number) => StyleSheet.create({
    container: {
      width: DEVICE_WIDTH * 0.48,
      height: imageHeight,
      overflow: 'hidden',
      marginVertical: 6,
    },
    image: {
        width: DEVICE_WIDTH * 0.48,
        height: imageHeight,
        resizeMode: 'cover',
        borderRadius: 10
    },
    heartAndTextContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 2,
        marginTop: 3
    },
    likesText: {
        fontSize: 12,
        marginLeft: 6,
        color: '#000000'
    },
    captionText: {
        fontSize: 12,
        color: '#1e272e'
    }
  });

export default styles;