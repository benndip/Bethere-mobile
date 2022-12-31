import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'

import styles from './Payment.style'
import { FocusAwareStatusBar } from '../../components'
import theme from '../../theme'

const Payment = () => {
    const mtnColor = '#000000';
    const orangeColor = '#F7B800';

    const [provider, setProvider] = useState('');

    const toggleProvider = (provider) => {
        setProvider(provider)
    }

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar translucent barStyle='light-content' backgroundColor={theme.PRIMARY_COLOR} />
            <Text style={styles.heading}>Select payment provider</Text>
            <View style={styles.touchContainer}>
                <TouchableOpacity onPress={() => toggleProvider('mtn')} style={[styles.paymentProviderTouch, { backgroundColor: provider == 'mtn' ? mtnColor : 'transparent' }]}>
                    <Image style={styles.image} source={require('../../../assets/images/mtn.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleProvider('orange')} style={[styles.paymentProviderTouch, { backgroundColor: provider == 'orange' ? orangeColor : 'transparent' }]}>
                    <Image style={styles.image} source={require('../../../assets/images/orange.png')} />
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.input}
                keyboardType='number-pad'
                placeholder='Enter amount. e.g 1000'
            />
            <Text style={styles.encouragement}>
                Recharge your account with more coins to get the best experice you need on Bethere.
                Experience Autinavigation, Virtual Reality, Augmented Reality and much much more ...
            </Text>
            <TouchableOpacity style={styles.getCoinsTouch}>
                <Text style={styles.getCoinsText}>Get coins</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Payment