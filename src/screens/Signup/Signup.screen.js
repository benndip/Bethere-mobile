import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { RadioButton } from 'react-native-paper';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import styles from './Signup.style'

import { FormInput, FormButton, FocusAwareStatusBar } from '../../components';

const Signup = ({ navigation }) => {

  const phoneInput = useRef(null);

  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [gender, setGender] = useState('M');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };


  const registerUser = async () => {
    if (email.length == 0 || password.length == 0 || confirmPassword.length == 0 || country.length < 4) {
      setHasError(true);
      showToastWithGravityAndOffset('All Input fields must be filled')
      return false;
    }

    if (password !== confirmPassword) {
      setHasError(true);
      showToastWithGravityAndOffset('Password does not match')
      return false;
    }

  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateOfBirth(currentDate);
  };

  const openDatePicker = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange,
      mode: 'date',
      is24Hour: true
    });
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2e64e5" />
      <Text style={styles.text}>Welcome to <Text style={{ color: '#ff6b6b', fontWeight: 'bold', fontSize: 28 }}>Bethere</Text> 🔥</Text>

      <FormInput
        labelValue={password}
        onChangeText={(country) => setCountry(country)}
        placeholderText="Country"
        iconType="Safety"
      />

      <TouchableOpacity onPress={openDatePicker} style={styles.datePickerTouch}>
        <Text style={styles.datePickerText}>{dateOfBirth.length == 0 ? 'Date of birth' : dateOfBirth.toDateString()}</Text>
      </TouchableOpacity>

      <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
        <View style={{ flexDirection: 'row', width: '100%', height: 60, justifyContent: 'space-around', marginTop: 5, marginBottom: 10 }}>
          <View style={styles.buttonAndText}>
            <RadioButton color='#2e64e5' value="M" />
            <Text>Male</Text>
          </View>
          <View style={styles.buttonAndText}>
            <RadioButton color='#2e64e5' value="F" />
            <Text>Female</Text>
          </View>
        </View>
      </RadioButton.Group>

      <PhoneInput
        ref={phoneInput}
        defaultValue={phone}
        defaultCode="IN"
        layout="first"
        withShadow={false}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={text => setPhone(text)}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        passwordInput
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        passwordInput
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={registerUser}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
          Privacy Policy
        </Text>
      </View>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
