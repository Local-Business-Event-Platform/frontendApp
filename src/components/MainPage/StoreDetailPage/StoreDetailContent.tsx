import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {StoreDetailContentProps} from '../../../utils/types/StoreDetailType';
import SReviewBox from '../../Elements/SReviewBox';
import SText from '../../Elements/SText';

const StoreDetailContent = ({data}: StoreDetailContentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SText fStyle="BxlSb" text={data.title} />
        <SReviewBox
          review={data.review}
          reviewCount={data.reviewCount}
          gap={SWidth * 2}
        />
      </View>
      <SText
        lineHeight={SWidth * 24}
        flexShrink={1}
        nLine={100}
        fStyle="BlgRg"
        text={data.content}
      />
    </View>
  );
};

export default StoreDetailContent;

const styles = StyleSheet.create({
  container: {
    padding: SWidth * 24,
    gap: SWidth * 20,
  },

  titleContainer: {
    gap: SWidth * 8,
  },
});
