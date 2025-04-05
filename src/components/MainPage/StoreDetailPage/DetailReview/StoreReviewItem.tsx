import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import ReviewContent from './ReviewContent';
import ReviewDate from './ReviewDate';
import ReviewUser from './ReviewUser';

type StoreReviewItemProps = {
  item: {
    id: number;
    userImg: any;
    userName: string;
    reviewStar: number;
    reviewDate: string;
    reviewContent: string;
  };
  lastItem: boolean;
};

const StoreReviewItem = ({item, lastItem}: StoreReviewItemProps) => {
  return (
    <View style={[styles.container, !lastItem && {borderBottomWidth: 1}]}>
      <View style={styles.userContainer}>
        <ReviewUser
          img={item.userImg}
          userName={item.userName}
          reviewStar={item.reviewStar}
        />
        <ReviewDate reviewDate={item.reviewDate} />
      </View>
      <ReviewContent content={item.reviewContent} />
    </View>
  );
};

export default StoreReviewItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SWidth * 24,
    gap: SWidth * 16,
    borderColor: colors.interactive.secondary,
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
