import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import StoreReviewItem from './StoreReviewItem';

type StoreDetailReviewProps = {
  data: {
    id: number;
    userImg: number;
    userName: string;
    reviewStar: number;
    reviewDate: string;
    reviewContent: string;
  }[];
};

const StoreDetailReview = ({data}: StoreDetailReviewProps) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <StoreReviewItem
          key={item.id}
          item={item}
          lastItem={index === data.length - 1}
        />
      ))}
    </View>
  );
};

export default StoreDetailReview;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SWidth * 24,
  },
});
