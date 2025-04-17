import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {BContentProps} from '../../utils/types/businessType';
import SInput from '../Elements/SInput';
import SText from '../Elements/SText';

const BContentButtonText = ({
  title,
  content,
  contentColor,
  color,
  value,
  onChangeText,
  buttonOnPress,
  onClick,
}: BContentProps) => {
  return (
    <View style={styles.container}>
      <SText fStyle="BmdMd" text={title} color={color} lineColor={color} />
      {onClick ? (
        <SInput
          value={value}
          onChangeText={onChangeText}
          placeholder={'123-45-67890'}
          buttonTitle="인증"
          buttonOnPress={buttonOnPress}
        />
      ) : (
        <SText
          nLine={10}
          flexShrink={1}
          lineHeight={SWidth * 24}
          fStyle="BxlSb"
          text={content}
          color={contentColor}
        />
      )}
    </View>
  );
};

export default BContentButtonText;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 8,
  },
});
