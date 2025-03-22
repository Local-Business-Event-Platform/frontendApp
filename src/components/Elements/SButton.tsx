import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {SButtonProps} from '../../utils/types/type';
import SText from './SText';

const SButton = ({
  onPress,
  disabled,
  ButtonColor,
  title,
  textColor,
}: SButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.buttonStyle, {backgroundColor: ButtonColor}]}>
      <SText fStyle="BlgSb" text={title} color={textColor} />
    </Pressable>
  );
};

export default SButton;

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    height: SWidth * 56,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
