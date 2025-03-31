import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {SSButtonProps} from '../../utils/types/type';
import SText from './SText';

const SSButton = ({
  onPress,
  disabled,
  ButtonColor,
  borderColor,
  title,
  textColor,
}: SSButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.buttonStyle,
        {backgroundColor: ButtonColor, borderColor: borderColor},
      ]}>
      <SText fStyle="BmdSb" text={title} color={textColor} />
    </Pressable>
  );
};

export default SSButton;

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    height: SWidth * 40,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.25,
    borderColor: '#525252',
  },
});
