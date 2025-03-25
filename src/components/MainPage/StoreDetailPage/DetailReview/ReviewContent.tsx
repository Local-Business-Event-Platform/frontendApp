import React from 'react';
import {StyleSheet} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import SText from '../../../Elements/SText';

type ReviewContentProps = {
  content: string;
};

const ReviewContent = ({content}: ReviewContentProps) => {
  return (
    <SText
      flexShrink={1}
      lineHeight={SWidth * 20}
      nLine={10}
      fStyle="BmdRg"
      text={content}
    />
  );
};

export default ReviewContent;

const styles = StyleSheet.create({});
