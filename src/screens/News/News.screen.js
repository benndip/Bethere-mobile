import { View, Text, FlatList } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './News.styles';

import { news_data } from '../../../assets/data';
import { News, FocusAwareStatusBar } from '../../components'
import theme from '../../theme';

const NewsScreen = ({ navigation }) => {

  const renderItem = ({ item }) => {
    return <News item={item} />
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle='light-content' backgroundColor={theme.PRIMARY_COLOR} />
      <Text style={styles.heading}>What's Trending</Text>
      <AntDesign name='left' size={20} style={styles.icon} onPress={() => navigation.goBack()} />
      <FlatList
        data={news_data}
        renderItem={renderItem}
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default NewsScreen