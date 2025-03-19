import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {BContentProps} from '../../utils/types/businessType';
import SInput from '../Elements/SInput';
import SText from '../Elements/SText';

const BContentText = ({
  title,
  content,
  color,
  underline,
  onClick,
  value,
  onChangeText,
  placeholder,
}: BContentProps) => {
  return (
    <View style={styles.container}>
      <SText
        fStyle="BmdMd"
        text={title}
        color={color}
        textDecorationLine={underline}
        lineColor={color}
      />
      {onClick ? (
        <SInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      ) : (
        <SText
          nLine={10}
          flexShrink={1}
          lineHeight={SWidth * 24}
          fStyle="BxlSb"
          text={content}
          color={'#404040'}
        />
      )}
    </View>
  );
};

export default BContentText;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
    gap: SWidth * 8,
  },
});
