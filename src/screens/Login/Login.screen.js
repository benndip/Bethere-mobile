import React, {useState, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
  Alert,
} from 'react-native';

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

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const showToastWithGravityAndOffset = message => {
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
      .post('/login', userData)
      .then(res => {
        console.log(res.data.user);
        setUser(res.data.user);
        setToken(res.data.token);
      })
      .catch(error => {
        if (error.response) {
          Alert.alert('Signup Error', error.response.data.message, [
            {text: 'OKAY', onPress: () => console.log('OK Pressed')},
          ]);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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

      <FormButton buttonTitle="Sign In" onPress={login} />

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
