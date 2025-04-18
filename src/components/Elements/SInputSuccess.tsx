import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import {SInputSuccessProps} from '../../utils/types/type';
import SText from './SText';

const SInputSuccess = ({
  title,
  titleColor = colors.text.tertiary,
  content,
  contentColor = colors.text.disabled,
}: SInputSuccessProps) => {
  return (
    <View style={styles.container}>
      <SText fStyle="BmdMd" text={title} color={titleColor} />
      <SText fStyle="BxlSb" text={content} color={contentColor} />
    </View>
  );
};

export default SInputSuccess;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 8,
  },
});
