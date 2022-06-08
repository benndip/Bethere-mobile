import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView
} from 'react-native';

import styles from './Login.style';

import {FormInput, FormButton, SocialButton, FocusAwareStatusBar} from '../../components'

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const login = () => {

  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#f9fafd" />
      <Image
        source={require('../../../assets/images/auth.png')}
        style={styles.logo}
      />
      <Text style={{ color: '#ff6b6b', fontWeight: 'bold', fontSize: 28, marginVertical: 20 }}>Bethere</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Phone number"
        iconType="user"
        keyboardType="phone-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null}

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
