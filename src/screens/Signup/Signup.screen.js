import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import PhoneInput from 'react-native-phone-number-input';
import {RadioButton} from 'react-native-paper';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

import axois from '../../axios/axios';

import styles from './Signup.style';
import theme from '../../theme';
import {setUser, setToken} from '../../redux/slices/auth';

import {
  FormInput,
  FormButton,
  FocusAwareStatusBar,
  BethereText,
} from '../../components';

const Signup = ({navigation}) => {
  const phoneInput = useRef(null);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [country, setCountry] = useState('Cameroon');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('M');
  const [dateOfBirth, setDateOfBirth] = useState('');
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

  const registerUser = async () => {

    navigation.navigate('DrawerNavigation')
    
    // setLoading(true);
    // if (
    //   name.length < 3 ||
    //   phone.length < 3 ||
    //   password.length < 0 ||
    //   confirmPassword.length < 3 ||
    //   country.length < 4
    // ) {
    //   setHasError(true);
    //   showToastWithGravityAndOffset('All Input fields must be filled');
    //   return false;
    // }

    // if (password !== confirmPassword) {
    //   setHasError(true);
    //   showToastWithGravityAndOffset('Password does not match');
    //   return false;
    // }

    // const userData = {
    //   name,
    //   phone,
    //   gender,
    //   country,
    //   password,
    //   password_confirmation: confirmPassword,
    //   date_of_birth: dateOfBirth,
    // };

    // axois
    //   .post('/auth/register', userData)
    //   .then(res => {
    //     const {status, data} = res;
    //     // console.log(res);
    //     if (status == 200) {
    //       dispatch(setUser(data.user));
    //       dispatch(setToken(data.token));
    //       Alert.alert(
    //         '✨ Successful Registration ✨',
    //         'Welcome to Bethere, where the world is made known ',
    //         [
    //           {
    //             text: 'Hurray!!!',
    //             onPress: () => navigation.navigate('DrawerNavigation'),
    //           },
    //         ],
    //         {
    //           cancelable: false,
    //         },
    //       );
    //     }
    //   })
    //   .catch(error => {
    //     if (error.response) {
    //       const {status, data} = error.response;
    //       console.log(data.message);
    //       Alert.alert('❌ Signup Error ❌', data.message, [{text: 'OKAY'}]);
    //     } else if (error.request) {
    //       console.log(error.request);
    //       Alert.alert(
    //         'No internet',
    //         'Please check your internet connection and try again',
    //         [{text: 'OKAY'}],
    //       );
    //     } else {
    //       console.log(error.message);
    //     }
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateOfBirth(currentDate);
  };

  const openDatePicker = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange,
      mode: 'date',
      is24Hour: true,
    });
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        width: '100%',
        paddingTop: 80,
        justifyContent: 'center',
        backgroundColor: '#f9fafd',
      }}
      behavior="height">
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <FocusAwareStatusBar
          barStyle="light-content"
          backgroundColor={theme.PRIMARY_COLOR}
        />
        <BethereText />
        <FormInput
          labelValue={name}
          onChangeText={name => setName(name)}
          placeholderText="Name"
          iconType="Safety"
        />

        <TouchableOpacity
          onPress={openDatePicker}
          style={styles.datePickerTouch}>
          <Text style={styles.datePickerText}>
            {dateOfBirth.length == 0
              ? 'Date of birth'
              : dateOfBirth.toDateString()}
          </Text>
        </TouchableOpacity>

        <RadioButton.Group
          onValueChange={newValue => setGender(newValue)}
          value={gender}>
          <View
            style={{
              flexDirection: 'row',
              width: Dimensions.get('screen').width * 0.9,
              height: 60,
              justifyContent: 'space-between',
              marginTop: 5,
              marginBottom: 10,
              alignItems: 'center',
            }}>
            <View style={styles.buttonAndText}>
              <RadioButton color="#2e64e5" value="M" />
              <Text>Male</Text>
            </View>
            <View style={styles.buttonAndText}>
              <RadioButton color="#2e64e5" value="F" />
              <Text>Female</Text>
            </View>
          </View>
        </RadioButton.Group>

        <PhoneInput
          ref={phoneInput}
          defaultValue={phone}
          defaultCode="CM"
          layout="first"
          withShadow={false}
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textInput}
          onChangeFormattedText={text => setPhone(text)}
          onChangeCountry={country => setCountry(country.name)}
        />

        <FormInput
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          passwordInput
        />

        <FormInput
          labelValue={confirmPassword}
          onChangeText={userPassword => setConfirmPassword(userPassword)}
          placeholderText="Confirm Password"
          iconType="lock"
          passwordInput
        />

        {loading ? (
          <ActivityIndicator size={'large'} color={theme.PRIMARY_COLOR} />
        ) : (
          <FormButton buttonTitle="Sign Up" onPress={registerUser} />
        )}

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Privacy Policy
          </Text>
        </View>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
