import {StyleSheet} from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../theme/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5
  }
});

export default styles;
