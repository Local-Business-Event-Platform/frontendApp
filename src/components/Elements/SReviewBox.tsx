import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import Star20 from '../../utils/svgs/businessPage/Star20';
import {SReviewBoxProps} from '../../utils/types/type';
import SText from './SText';

const SReviewBox = ({
  review,
  reviewCount,
  gap = SWidth * 4,
}: SReviewBoxProps) => {
  return (
    <View style={[styles.container, {gap: gap}]}>
      <Star20 />
      <SText
        fStyle="BmdSb"
        text={`${review ? review : 0} / 5.0`}
        color={colors.text.secondary}
      />
      <SText
        fStyle="BmdSb"
        text={`(${reviewCount ? reviewCount : 0})`}
        color={colors.text.disabled}
      />
    </View>
  );
};

export default SReviewBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg.warningSubtle,
    flexDirection: 'row',
    paddingHorizontal: SWidth * 4,
    paddingVertical: SWidth * 2,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});
