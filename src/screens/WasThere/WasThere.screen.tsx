import { View, Text, SafeAreaView, FlatList, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import styles from './WasThere.style'
import { FlashList } from "@shopify/flash-list";
import { Post } from '../../components';
import { PostItemType } from '../../components/types';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { DEVICE_WIDTH } from '../../theme/sizes';

type FlatListItemType = {
  id: number
  data: []
}

const WasThere = () => {

  const posts: Array<PostItemType> = [
    {
      id: 1,
      likes: 230,
      url: 'https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ='
    },
    {
      id: 2,
      likes: 43000,
      url: 'https://www.businessdestinations.com/wp-content/uploads/2016/07/Drones-2.jpg'
    },
    {
      id: 3,
      likes: 5000,
      url: 'https://www.toptravelsights.com/wp-content/uploads/2020/04/Stonehenge-featured.jpg'
    },
    {
      id: 4,
      likes: 100,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMI_G7JczLnb9MB2H5pfBOOYh7dk_sAseyDcW_dTpeg3Gmslnf_x9HsnNMTxD8hN-TJY&usqp=CAU'
    },
    {
      id: 5,
      likes: 100,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMI_G7JczLnb9MB2H5pfBOOYh7dk_sAseyDcW_dTpeg3Gmslnf_x9HsnNMTxD8hN-TJY&usqp=CAU'
    },
    {
      id: 6,
      likes: 100,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMI_G7JczLnb9MB2H5pfBOOYh7dk_sAseyDcW_dTpeg3Gmslnf_x9HsnNMTxD8hN-TJY&usqp=CAU'
    },
    {
      id: 7,
      likes: 230,
      url: 'https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE'
    },
    {
      id: 8,
      likes: 43000,
      url: 'https://www.businessdestinations.com/wp-content/uploads/2016/07/Drones-2.jpg'
    },
    {
      id: 9,
      likes: 5000,
      url: 'https://www.toptravelsights.com/wp-content/uploads/2020/04/Stonehenge-featured.jpg'
    },
    {
      id: 10,
      likes: 100,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMI_G7JczLnb9MB2H5pfBOOYh7dk_sAseyDcW_dTpeg3Gmslnf_x9HsnNMTxD8hN-TJY&usqp=CAU'
    },
    {
      id: 11,
      likes: 100,
      url: 'https://daytriptips.com/wp-content/uploads/2019/05/eiffel-tower.jpg'
    },
    {
      id: 12,
      likes: 100,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMI_G7JczLnb9MB2H5pfBOOYh7dk_sAseyDcW_dTpeg3Gmslnf_x9HsnNMTxD8hN-TJY&usqp=CAU'
    }
  ]

  const flatLists: any = [
    {
      id: 1,
      data: posts
    },
    {
      id: 2,
      data: posts
    }
  ];

  const renderFlashList = ({item}: {item: FlatListItemType}) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: DEVICE_WIDTH,flexDirection: 'row', paddingHorizontal: 3, justifyContent: 'space-between' }}>
          <View style={styles.individualMasonryContainer}>
            {item.data
              .filter((_, i) => i % 2 !== 0)
              .map((item: PostItemType, i: number) => (
                <Post item={item} />
              ))}
          </View>
          <View style={styles.individualMasonryContainer}>
            {item.data
              .filter((_, i) => i % 2 == 0)
              .map((item: PostItemType, i: number) => (
                <Post item={item} />
              ))}
          </View>
        </View>
      </ScrollView>
    );
  };

  // Animations

  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x
    }
  });

  const belowViewAnitedStyles = useAnimatedStyle(()=>{
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [0, DEVICE_WIDTH],
            [10, (DEVICE_WIDTH * 0.4 - 45)],
            Extrapolate.CLAMP,
          ),
        },
      ],
      width: interpolate(
        scrollX.value,
        [0, DEVICE_WIDTH],
        [50, 30],
        Extrapolate.CLAMP,
      )
    };
  })

  return (
    <SafeAreaView style={styles.container}>
      {/* Animated Header */}
      <View style={styles.header}>
        <View style={styles.followingContainer}>
          <Text>Following</Text>
        </View>
        <View style={styles.forYouContainer}>
          <Text>For You</Text>
        </View>
        <Animated.View style={[styles.bottomView, belowViewAnitedStyles]} />
      </View>

      <View style={styles.otherView}>
        <Animated.FlatList
          style={styles.flatList}
          data={flatLists}
          renderItem={renderFlashList}
          horizontal
          snapToInterval={DEVICE_WIDTH}
          snapToAlignment="start"
          decelerationRate={'fast'}
          onScroll={scrollHandler}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default WasThere