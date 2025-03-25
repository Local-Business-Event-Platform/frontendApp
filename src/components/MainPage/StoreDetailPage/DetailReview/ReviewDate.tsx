import React from 'react';
import {StyleSheet} from 'react-native';
import SText from '../../../Elements/SText';

type ReviewDateProps = {
  reviewDate: string;
};

const ReviewDate = ({reviewDate}: ReviewDateProps) => {
  return <SText fStyle="BsmRg" text={reviewDate} color={'#525252E6'} />;
};

export default ReviewDate;

const styles = StyleSheet.create({});
