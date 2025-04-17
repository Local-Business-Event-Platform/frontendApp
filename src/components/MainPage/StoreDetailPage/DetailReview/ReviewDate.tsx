import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../../../globalStyle';
import SText from '../../../Elements/SText';

type ReviewDateProps = {
  reviewDate: string;
};

const ReviewDate = ({reviewDate}: ReviewDateProps) => {
  return (
    <SText
      fStyle="BsmRg"
      text={reviewDate}
      color={`${colors.text.tertiary}E6`}
    />
  );
};

export default ReviewDate;

const styles = StyleSheet.create({});
