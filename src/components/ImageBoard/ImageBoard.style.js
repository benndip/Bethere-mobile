import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: 0.8 * width,
    width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  largerView: {
    flex: 1,
    borderWidth: 0.3,
    borderColor: '#c8d6e5',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  smallerView: {
    flex: 1,
    borderWidth: 0.1,
    borderColor: '#c8d6e5',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  smallestView: {
    flex: 1,
    borderColor: '#c8d6e5',
  },
});

export default styles;
