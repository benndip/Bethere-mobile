import {View} from 'react-native';
import React from 'react';
import styles from './PaginatorIndicator.style';

interface IProps {
  data: string[];
  activeIndex: number
}

const PaginatorIndicator: React.FC<IProps> = ({data, activeIndex}) => {
  return (
    <View style={styles.container}>
      {data.map((data, index) => (
        <View style={[styles.dot, { backgroundColor: activeIndex == index ? '#ee5253' : '#ccc' }]} />
      ))}
    </View>
  );
};

export default PaginatorIndicator;
