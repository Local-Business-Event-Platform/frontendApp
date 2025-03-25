import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import BusinessStar from '../../utils/svgs/businessPage/BusinessStar';
import {SReviewBoxProps} from '../../utils/types/type';
import SText from './SText';

const SReviewBox = ({review, reviewCount}: SReviewBoxProps) => {
  return (
    <View style={styles.reviewContainer}>
      <BusinessStar />
      <SText fStyle="BmdSb" text={`${review ? review : 0} / 5.0`} />
      <SText fStyle="BmdSb" text={`(${reviewCount ? reviewCount : 0})`} />
    </View>
  );
};

export default SReviewBox;

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: '#FEFCE8',
    flexDirection: 'row',
    paddingHorizontal: SWidth * 4,
    paddingVertical: SWidth * 2,
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: SWidth * 4,
  },
});
