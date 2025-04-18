import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import {SButtonProps} from '../../utils/types/type';
import SText from './SText';

const SButton40 = ({
  onPress,
  disabled,
  borderWidth,
  ButtonColor,
  title,
  textColor,
  icon,
}: SButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {backgroundColor: ButtonColor, borderWidth: borderWidth},
      ]}>
      <SText fStyle="BmdSb" text={title} color={textColor} />
      {icon}
    </Pressable>
  );
};

export default SButton40;

const styles = StyleSheet.create({
  container: {
    height: SWidth * 40,
    borderColor: colors.border.interactive.secondary,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SWidth * 16,
    flexDirection: 'row',
    gap: SWidth * 8,
  },
});
