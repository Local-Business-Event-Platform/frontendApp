import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {SInputSuccessProps} from '../../utils/types/type';
import SText from './SText';

const SInputSuccess = ({
  title,
  titleColor = '#525252',
  content,
  contentColor = '#A1A1A1',
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
