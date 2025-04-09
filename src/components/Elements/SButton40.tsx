import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {SButtonProps} from '../../utils/types/type';
import SText from './SText';

const SButton40 = ({
  onPress,
  disabled,
  ButtonColor,
  title,
  textColor,
  icon,
}: SButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, {backgroundColor: ButtonColor}]}>
      <SText fStyle="BmdSb" text={title} color={textColor} />
      {icon}
    </Pressable>
  );
};

export default SButton40;

const styles = StyleSheet.create({
  container: {
    height: SWidth * 40,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SWidth * 16,
    flexDirection: 'row',
    gap: SWidth * 8,
  },
});
