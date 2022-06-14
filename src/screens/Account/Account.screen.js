import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Account.style';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { RadioButton } from 'react-native-paper';

const Account = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const [name, setName] = useState('Oben Tabendip');
    const [country, setCountry] = useState('Cameroon');
    const [dateOfBirth, setDateOfBirth] = useState(new Date(1598051730000));
    const [phone, setPhone] = useState('+237 676492408');
    const [gender, setGender] = useState('M');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDateOfBirth(currentDate);
        console.log(currentDate);
    };

    const openDatePicker = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: 'date',
            is24Hour: true
        });
    }

    useEffect(() => {

    }, [])


    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <TouchableOpacity onPress={() => { }} style={styles.imageAndCamera}>
                    <Image style={styles.profileImage} source={{ uri: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg' }} />
                    <View style={{ width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: -5, top: -0, backgroundColor: '#ffffff' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#24BD87' }}>
                            <Feather
                                name='camera'
                                size={18}
                                color='#ffffff'
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.otherView}>
                    <Text style={styles.inputTitle}>Name on app</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={name}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Text style={styles.inputTitle}>Phone number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={phone}
                        value={phone}
                        onChangeText={(text) => setName(text)}
                    />
                    <Text style={styles.inputTitle}>Date of birth</Text>
                    <TouchableOpacity onPress={openDatePicker} style={styles.datePickerTouch}>
                        <Text style={styles.datePickerText}>{dateOfBirth.toDateString()}</Text>
                    </TouchableOpacity>
                    <Text style={styles.inputTitle}>Gender</Text>
                    <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                        <View style={{ flexDirection: 'row', width: '100%', height: 60, justifyContent: 'space-around' }}>
                            <View style={styles.buttonAndText}>
                                <RadioButton color='#24BD87' value="M" />
                                <Text>Male</Text>
                            </View>
                            <View style={styles.buttonAndText}>
                                <RadioButton color='' value="F" />
                                <Text>Female</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                    <Text style={styles.inputTitle}>Country</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={country}
                        value={country}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <TouchableOpacity style={styles.updateButton}>
                    <Text>Update</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Account;