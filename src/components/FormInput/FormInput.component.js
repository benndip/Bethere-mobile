import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import styles from './FormInput.style';

const FormInput = ({ labelValue, placeholderText, iconType, secureTextEntry, passwordInput, ...rest }) => {

  const [textEntry, SetTextEntry] = useState(true)

  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        secureTextEntry={passwordInput ? textEntry : null}
        {...rest}
      />
      {
        passwordInput &&
        <Feather
          name={textEntry ? 'eye' : 'eye-off'}
          size={25}
          color="#666"
          onPress={() => SetTextEntry(!textEntry)}
          style={{ position: 'absolute', right: 15, zIndex: 999999 }}
        />
      }
    </View>
  );
};

export default FormInput;