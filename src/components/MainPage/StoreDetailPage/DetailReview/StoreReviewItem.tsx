import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import DetailReviewStar from '../../../../utils/svgs/storeDetailPage/DetailReviewStar';
import DetailReviewStarFill from '../../../../utils/svgs/storeDetailPage/DetailReviewStarFill';
import SText from '../../../Elements/SText';

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
        <View style={styles.userRow}>
          <FastImage
            style={styles.userImg}
            source={item.userImg}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={styles.userNameContainer}>
            <SText fStyle="BlgMd" text={item.userName} />
            <View style={styles.reviewContainer}>
              {Array.from({length: 5}).map((_, index) =>
                index < item.reviewStar ? (
                  <DetailReviewStarFill key={index} />
                ) : (
                  <DetailReviewStar key={index} />
                ),
              )}
            </View>
          </View>
        </View>
        <SText fStyle="BsmRg" text={item.reviewDate} color={'#525252E6'} />
      </View>
      <SText
        flexShrink={1}
        lineHeight={SWidth * 20}
        nLine={10}
        fStyle="BmdRg"
        text={item.reviewContent}
      />
    </View>
  );
};

export default StoreReviewItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SWidth * 24,
    gap: SWidth * 16,

    borderColor: '#E5E5E5',
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },

  userImg: {
    width: SWidth * 40,
    height: SWidth * 40,
    borderRadius: 999,
  },

  userNameContainer: {
    gap: SWidth * 4,
  },

  reviewContainer: {
    height: SWidth * 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SWidth * 4,
    paddingVertical: SWidth * 2,
    backgroundColor: '#FEFCE8',
    alignSelf: 'flex-start',
  },
});
