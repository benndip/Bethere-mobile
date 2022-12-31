import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
import theme from '../../theme';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: height / 15,
    backgroundColor: theme.PRIMARY_COLOR,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default styles;
