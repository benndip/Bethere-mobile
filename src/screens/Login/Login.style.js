import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: theme.PRIMARY_COLOR,
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
});

export default styles;
