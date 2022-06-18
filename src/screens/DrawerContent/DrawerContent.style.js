import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
  },
  row: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 10,
  },
  bottomDrawerSection: {
    borderTopColor: 'transparent',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginVertical: 5
  },
  modalView: {
    position: 'absolute',
    top: '40%',
    alignSelf: 'center',
    width: '99%',
    height: 200,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  flagImageAndTextView: {
    width: '33%',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: 'rgba(236, 240, 241,1)',
  },
});
export default styles