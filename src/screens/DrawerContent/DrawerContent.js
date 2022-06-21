import React, { useState } from 'react';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {
  View,
  Alert,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
  UIManager,
  LayoutAnimation,
} from 'react-native';
// import Share from 'react-native-share';
// import OneSignal from 'react-native-onesignal';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Share from 'react-native-share';

// import {AvatarAbrev} from '../../components';

import styles from './DrawerContent.style';

// import * as actions from '../../redux/actions/actions';
import theme from '../../theme';

//For the layout animation
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const DrawerContent = ({
  setItemsToWishlist,
  navigation,
  i18n,
  // changeLanguage,
  setUser,
  setToken,
  token,
  user,
  ...props
}) => {

  const [selectLanguage, setSelectLanguage] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currentLocale, setCurrentLocale] = useState('en')

  const changeLanguage = () => {
    setCurrentLocale(prev => prev == 'en' ? 'fr' : 'en');
  }

  const myCustomShare = async () => {
    let PLAYSTORE_LINK = ''
    let WEB_URL = ''
    const shareOptions = {
      message: `😃 Hello checkout Bethere 🎉 on Playstore at ${PLAYSTORE_LINK} and make fast sales for free(100.7% free). We also have our web site at ${WEB_URL}`,
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Sharing Error::=>', error);
      // return error
    }
  };

  const logout = () => {

  }


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <Avatar.Image size={80} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReq8M0wYyhycFPq6Al7C2X_oXytHTKdTil9A&usqp=CAU' }} />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                {user ? (
                  <Title style={styles.title}>
                    {user.name.split(' ').splice(0, 1)[0]}
                  </Title> //first name only
                ) : (
                  <Title style={styles.title}>Bethere</Title>
                )}
                {user && <Caption style={styles.caption}>{user.phone}</Caption>}
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label={'Home'}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bell-outline" color={color} size={size} />
              )}
              label={'Places nearby'}
              onPress={() => navigation.navigate('Map')}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="message1" color={color} size={size} />
              )}
              label={'News'}
              onPress={() => { }}
            />
          </Drawer.Section>
          <Drawer.Section title={'Preferences'}>
            <TouchableRipple
              onPress={() => {
                Linking.openURL(
                  'https://play.google.com/store/apps/details?id=com.backmarche',
                );
              }}>
              <View style={styles.preference}>
                <Text>{'Rate app on Playstore'}</Text>
                <View pointerEvents="none">
                  <Icon name="google-play" size={23} />
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple>
              <View style={{ overflow: 'hidden' }}>
                <DrawerItem
                  icon={({ color, size }) => (
                    <FontAwesome name="language" size={23} />
                  )}
                  label={'Language'}
                  onPress={() => {
                    LayoutAnimation.configureNext(
                      LayoutAnimation.Presets.spring,
                    );
                    setSelectLanguage(prev => !prev);
                  }}
                />
                <EvilIcons
                  name={`chevron-${selectLanguage ? 'down' : 'right'}`}
                  size={33}
                  style={{ position: 'absolute', right: 18, top: 16 }}
                  onPress={() => {
                    LayoutAnimation.configureNext(
                      LayoutAnimation.Presets.spring,
                    );
                    setSelectLanguage(prev => !prev);
                  }}
                />
                {selectLanguage && (
                  <>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'space-between',
                        paddingHorizontal: 69,
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                      onPress={() => changeLanguage('en')}>
                      <Text>{'English'}</Text>
                      <View
                        style={{
                          backgroundColor:
                            currentLocale === 'en'
                              ? theme.PRIMARY_COLOR
                              : '#fff',
                          width: 15,
                          height: 15,
                          borderRadius: 70.5,
                          borderWidth: 0.3,
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'space-between',
                        paddingHorizontal: 69,
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                      onPress={() => changeLanguage('fr')}>
                      <Text>{'French'}</Text>
                      <View
                        style={{
                          backgroundColor:
                            currentLocale === 'fr'
                              ? theme.PRIMARY_COLOR
                              : '#fff',
                          width: 15,
                          height: 15,
                          borderRadius: 70.5,
                          borderWidth: 0.3,
                        }}
                      />
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </TouchableRipple>
          </Drawer.Section>
          <Drawer.Section title={'Supprt'}>
            <TouchableRipple onPress={myCustomShare}>
              <View style={{ ...styles.preference }}>
                <Text>Share the app</Text>
                <View pointerEvents="none">
                  <Feather
                    name="share-2"
                    size={23}
                    color="rgba(99, 110, 114,1.0)"
                  />
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <View style={{ ...styles.preference }}>
                <Text>About us</Text>
                <View pointerEvents="none">
                  <Ionicons
                    name="people-outline"
                    size={23}
                    color="rgba(99, 110, 114,1.0)"
                  />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
          <View style={styles.coinsContainer}>
            <FontAwesome5 name='coins' size={16} color='#f0932b' style={styles.coinIcon} />
            <Text style={styles.coinsText}>2,300</Text>
            <Text>coins</Text>
          </View>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        {loading ? (
          <ActivityIndicator size={25} color="red" />
        ) : (
          <DrawerItem
            onPress={() =>
              Alert.alert(
                `'phrases.log_out`,
                `'phrases.sure_you_want_to_logout'`,
                [
                  {
                    text: `'words.no'`,
                    style: 'cancel',
                  },
                  { text: `'words.yes'`, onPress: logout },
                ],
                { cancelable: false },
              )
            }
            icon={() => <Icon name="exit-to-app" color={'red'} size={25} />}
            label={'Logout'}
            labelStyle={{ color: 'red' }}
          />
        )}
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;