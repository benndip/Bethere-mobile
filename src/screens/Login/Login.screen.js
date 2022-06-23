import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
} from 'react-native';

import PhoneInput from 'react-native-phone-number-input';

import axois from '../../axios/axios';

import styles from './Login.style';

import {FormInput, FocusAwareStatusBar, FormButton} from '../../components';

const Login = ({navigation}) => {
  const phoneInput = useRef(null);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
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
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2e64e5" />
      <Image
        source={require('../../../assets/images/auth.png')}
        style={styles.logo}
      />
      <Text
        style={{
          color: '#ff6b6b',
          fontWeight: 'bold',
          fontSize: 28,
          marginVertical: 20,
        }}>
        Bethere
      </Text>

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
