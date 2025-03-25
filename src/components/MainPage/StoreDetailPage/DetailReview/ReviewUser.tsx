import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import DetailReviewStar from '../../../../utils/svgs/storeDetailPage/DetailReviewStar';
import DetailReviewStarFill from '../../../../utils/svgs/storeDetailPage/DetailReviewStarFill';
import SText from '../../../Elements/SText';

type ReviewUserProps = {
  img: number;
  userName: string;
  reviewStar: number;
};

const ReviewUser = ({img, userName, reviewStar}: ReviewUserProps) => {
  return (
    <View style={styles.userRow}>
      <FastImage
        style={styles.userImg}
        source={img}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.userNameContainer}>
        <SText fStyle="BlgMd" text={userName} />
        <View style={styles.reviewContainer}>
          {Array.from({length: 5}).map((_, index) =>
            index < reviewStar ? (
              <DetailReviewStarFill key={index} />
            ) : (
              <DetailReviewStar key={index} />
            ),
          )}
        </View>
      </View>
    </View>
  );
};

export default ReviewUser;

const styles = StyleSheet.create({
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
