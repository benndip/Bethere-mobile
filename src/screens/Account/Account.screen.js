import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Account.style';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { RadioButton } from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
import { FocusAwareStatusBar } from '../../components';
import ImagePicker from 'react-native-image-crop-picker';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';

const { height } = Dimensions.get('screen');

const Account = () => {

    const phoneInput = useRef(null);

    const [date, setDate] = useState(new Date())

    // states
    const [name, setName] = useState('Oben Tabendip');
    const [country, setCountry] = useState('Cameroon');
    const [dateOfBirth, setDateOfBirth] = useState(new Date(1598051730000));
    const [phone, setPhone] = useState('676492408');
    const [gender, setGender] = useState('M');
    const [selectingImage, setSelectingImage] = useState(false);

    // animations
    const scale = useSharedValue(0);
    const top = useSharedValue(-10);

    const scaleAnimatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            top: top.value
        }
    })

    // functions
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

    const openPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }

    const openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }

    const toggleImageSelection = () => {
        setSelectingImage(prev => !prev);
        const scaleToValue = selectingImage ? 0 : 1
        const topToValue = selectingImage ? -10 : 0.125 * height
        scale.value = withTiming(scaleToValue, { duration: 500 });
        top.value = withTiming(topToValue, { duration: 500 });
    }

    useEffect(() => {

    }, [])


    return (
        <View style={styles.container}>
            <FocusAwareStatusBar backgroundColor='#24BD87' />
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={toggleImageSelection} style={styles.imageAndCamera}>
                    <Image style={styles.profileImage} source={{ uri: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg' }} />
                    <View style={{ width: 45, height: 45, borderRadius: 30, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: -5, top: -0, backgroundColor: '#ffffff' }}>
                        <View style={{ width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#24BD87' }}>
                            <Feather
                                name={selectingImage ? 'x-circle' : 'edit'}
                                size={20}
                                color='#ffffff'
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <Animated.View style={[styles.textAndIconsContainer, scaleAnimatedStyles]}>
                    <TouchableOpacity onPress={openCamera} style={styles.textAndIcon}>
                        <Feather
                            name='camera'
                            size={22}
                            color='#227093'
                        />
                        <Text style={styles.iconText}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openPicker} style={styles.textAndIcon}>
                        <Feather
                            name='image'
                            size={22}
                            color='#227093'
                        />
                        <Text style={styles.iconText}>Gallery</Text>
                    </TouchableOpacity>
                </Animated.View>
                <View style={styles.otherView}>
                    <Text style={styles.inputTitle}>Name on app</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={name}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Text style={styles.inputTitle}>Phone number</Text>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={phone}
                        defaultCode="IN"
                        layout="first"
                        withShadow={false}
                        containerStyle={styles.phoneContainer}
                        textContainerStyle={styles.textInput}
                        onChangeFormattedText={text => {
                            setPhone(text);
                        }}
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
                    <Text style={styles.updateText}>Update</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Account;