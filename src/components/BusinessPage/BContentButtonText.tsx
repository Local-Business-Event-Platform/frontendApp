import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {BContentProps} from '../../utils/types/businessType';
import SText from '../Elements/SText';
import JoinInputButton from '../Join/JoinUser/JoinInputButton';

const BContentButtonText = ({
  title,
  content,
  color,
  underline,
  onClick,
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
        <JoinInputButton
          value={''}
          onChangeText={() => {}}
          placeholder={'123-45-67890'}
          buttonTitle="인증"
          textDecorationLine="underline"
          onPress={() => {}}
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

export default BContentButtonText;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
    gap: SWidth * 8,
  },
});
