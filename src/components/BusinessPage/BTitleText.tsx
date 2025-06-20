import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {BTitleTextProps} from '../../utils/types/businessType';
import SText from '../Elements/SText';

const BTitleText = ({
  title,
  content,
  contentColor,
  color,
  underline,
}: BTitleTextProps) => {
  return (
    <View style={styles.container}>
      <SText
        fStyle="BmdMd"
        text={title}
        color={color}
        textDecorationLine={underline}
        lineColor={color}
      />
      <SText
        nLine={20}
        flexShrink={1}
        lineHeight={SWidth * 24}
        fStyle="BxlSb"
        text={content}
        color={contentColor}
      />
    </View>
  );
};

export default BTitleText;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 8,
  },
});
