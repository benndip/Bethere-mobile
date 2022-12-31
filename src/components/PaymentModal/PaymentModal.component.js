import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import axios from '../../axios/axios';
import styles from './PaymentModal.style';

const PaymentModal = ({isVisible, onBackdropPress}) => {
  const [amount, setAmount] = useState(0);
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const token = useSelector(state => state.auth.token);

  const pay = () => {
    setLoading(true);
    const data = {
      amount,
      from: `237${phone}`,
      description: reason,
    };

    axios
      .post('request-payment', data, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        const {status, data} = res;
        // console.log(res);
        if (status == 200) {
          Alert.alert(
            'Payment request successful',
            'Please dail *126# on your device to comfirm payment',
            [
              {
                text: 'Okay',
              },
            ],
            {
              cancelable: true,
            },
          );
          setAmount('');
          setPhone('');
          setReason('');
        }
      })
      .catch(error => {
        if (error.response) {
          const {status, data} = error.response;
          console.log(data.message);
          Alert.alert('❌ Payment Request Error ❌', data.message, [
            {text: 'OKAY'},
          ]);
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
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <Text style={styles.topUpAccountText}>Top up account</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Amount e.g. 500"
          onChangeText={text => setAmount(text)}
          value={amount}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Phone number"
          onChangeText={text => setPhone(text)}
          value={phone}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setReason(text)}
          placeholder="Reason for payment"
          value={reason}
        />
        {loading ? (
          <ActivityIndicator size={'large'} color="#ee5253" />
        ) : (
          <TouchableOpacity onPress={pay} style={styles.payTouch}>
            <Text style={styles.payText}>Pay</Text>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
};

export default PaymentModal;
