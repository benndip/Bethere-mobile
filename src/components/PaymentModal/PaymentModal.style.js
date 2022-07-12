import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    alignSelf: 'center',
    paddingHorizontal: 10,
    height: height * 0.4,
    paddingTop: 10,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.3,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 20,
    paddingLeft: 15,
  },
  payTouch: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#ff9f43',
  },
  topUpAccountText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
  },
  payText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default styles;
