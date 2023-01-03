import {StyleSheet} from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../theme/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarAndTextAndFollowContainer:{
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  followButton: {
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 45,
    borderRadius: 52
  },
  textsContainer: {
    marginLeft: 5
  },
  captionText: {
    alignSelf: 'center',
    textAlign: 'center'
  },
  visitAndHeartContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    alignSelf: 'center',
    marginVertical: 10
  },
  visitContainer: {
    width: 60,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  heartIcon: {
    marginLeft: 10
  },
  moreLikeThis: {
    alignSelf: 'center'
  }
});

export default styles;
