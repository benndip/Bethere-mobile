import {View, Text, Image, Pressable} from 'react-native';
import React, { useEffect, useState } from 'react';
import {PostItemType} from '../types';
import styles from './Post.style';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../theme/sizes';
import Entypo from 'react-native-vector-icons/Entypo';

interface IProps {
  item: PostItemType;
}

const Post: React.FC<IProps> = ({item}) => {
  const {url, likes, id} = item;

  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const calculatedLikes = likes/1000;

  useEffect(() => {
    Image.getSize(url, (srcWidth, srcHeight) => {

      const maxHeight = DEVICE_HEIGHT; // or something else
      const maxWidth = DEVICE_WIDTH;
      const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      setImageHeight(srcHeight * ratio)
      setImageWidth(srcWidth * ratio)

    }, error => {
      console.log('error:', error);
    });
  }, [])
  
  return (
    <Pressable style={styles(imageHeight).container}>
      <Image source={{uri: url}} style={styles(imageWidth, imageHeight).image} />
      <View style={styles().heartAndTextContainer}>
        <Entypo name='heart' color='#ee5253' size={16}  />
        {likes > 0 && <Text style={styles().likesText}>{calculatedLikes}k</Text>}
      </View>
      <Text numberOfLines={2} style={styles().captionText}>Visiting bwitingi was a so much cool experience</Text>
    </Pressable>
  );
};

export default Post;
