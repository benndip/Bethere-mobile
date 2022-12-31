import React, {useState, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import PhoneInput from 'react-native-phone-number-input';

import axois from '../../axios/axios';

import styles from './Login.style';
import {setUser, setToken} from '../../redux/slices/auth';

import {
  FormInput,
  FocusAwareStatusBar,
  FormButton,
  BethereText,
} from '../../components';
import theme from '../../theme';

const Login = ({navigation}) => {
  const phoneInput = useRef(null);

  const dispatch = useDispatch();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const showToastWithGravityAndOffset = message => {
    setLoading(false);
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const login = () => {
    setLoading(true);
    if (phone.length < 3 || password.length < 0) {
      setHasError(true);
      showToastWithGravityAndOffset('All Input fields must be filled');
      return false;
    }

    const userData = {
      phone,
      password,
    };

    axois
      .post('/auth/login', userData)
      .then(res => {
        const {status, data} = res;
        // console.log(res);
        if (status == 200) {
          dispatch(setUser(data.user));
          dispatch(setToken(data.token));
          Alert.alert(
            '✨ Login successful ✨',
            'Welcome to Bethere, where the world is made known ',
            [
              {
                text: 'Hurray!!!',
                onPress: () => navigation.navigate('DrawerNavigation'),
              },
            ],
            {
              cancelable: false,
            },
          );
        }
      })
      .catch(error => {
        if (error.response) {
          const {status, data} = error.response;
          console.log(data.message);
          Alert.alert('❌ Login Error ❌', data.message, [{text: 'OKAY'}]);
        } else if (error.request) {
          console.log(error.request);
          Alert.alert(
            'No internet',
            'Please check your internet connection and try again',
            [{text: 'OKAY'}],
          );
        } else {
          console.log(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="always">
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={theme.PRIMARY_COLOR}
      />
      <Image
        source={require('../../../assets/images/auth.png')}
        style={styles.logo}
      />
      <BethereText />
      <PhoneInput
        ref={phoneInput}
        defaultValue={phone}
        defaultCode="CM"
        layout="first"
        withShadow={false}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={text => setPhone(text)}
      />

      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        passwordInput
      />

      {loading ? (
        <ActivityIndicator size={'large'} color="red" />
      ) : (
        <FormButton buttonTitle="Sign In" onPress={login} />
      )}

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;
