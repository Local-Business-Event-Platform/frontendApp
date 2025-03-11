import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {SButtonProps} from '../../utils/types/type';
import SText from './SText';

const SButton = ({onPress, ButtonColor, title, textColor}: SButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonStyle, {backgroundColor: ButtonColor}]}>
      <SText fStyle="BlgSb" text={title} color={textColor} />
    </Pressable>
  );
};

export default SButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: SWidth * 56,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
