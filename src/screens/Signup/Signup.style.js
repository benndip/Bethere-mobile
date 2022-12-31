import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 22,
    marginBottom: 40,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: theme.PRIMARY_COLOR,
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
  phoneContainer: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 6,
    height: 55,
    alignSelf: 'center',
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  textInput: {
    paddingVertical: 0,
  },
  buttonAndText: {
    width: '49%',
    borderWidth: 1,
    borderColor: '#ccc',
    height: '95%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePickerTouch: {
    width: '100%',
    borderRadius: 6,
    height: 55,
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: '#ccc',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default styles;
