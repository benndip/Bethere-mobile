import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: 0.45 * width,
    flex: 1,
    height: height * 0.27,
    borderRadius: 10,
    margin: 8,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 0,
    padding: 5,
    alignItems: 'center',
  },
  imageContainer: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '72%',
    borderRadius: 10,
    marginTop: 10,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: 'red',
  },
  image: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '90%',
    marginTop: 6,
    height: '27%',
    padding: 2,
  },
  placeName: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 3,
  },
  heartContainer: {
    backgroundColor: '#ffffff',
    width: 28,
    height: 28,
    borderRadius: 25,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    top: 10,
    zIndex: 9999,
  },
});

export default styles;
