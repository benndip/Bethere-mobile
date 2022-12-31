import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 40,
    width: '100%',
    backgroundColor: '#F6F6F6',
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
    justifyContent: 'space-between',
  },
  iconAndLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  locationText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  currentLocationText: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  placetypesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginVertical: 0,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
  flatList: {
    width: '100%',
  },
  popularAndViewAll: {
    width: '100%',
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 9,
    marginBottom: 10,
    alignItems: 'center',
  },
  popularText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewAllText: {
    color: '#3BAFE9',
  },
  towns: {
    width: '100%',
    height: 60,
    alignSelf: 'center',
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  town: {
    width: 100,
    height: '80%',
    backgroundColor: '#000',
    marginRight: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2f3640',
  },
  townText: {
    color: '#ffffff',
  },
});

export default styles;
