import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import Edit20 from '../../../utils/svgs/businessPage/Edit20';
import {BusinessButtonProps} from '../../../utils/types/businessType';
import SText from '../../Elements/SText';

const BusinessButton = ({
  onClick,
  onPress,
  buttonText,
  buttonTextColor,
}: BusinessButtonProps) => {
  return (
    <Pressable
      style={[
        styles.editButton,
        {
          borderColor: onClick
            ? colors.bg.interactive.primary
            : colors.border.interactive.secondary,
          backgroundColor: onClick
            ? colors.bg.interactive.primary
            : colors.white,
        },
      ]}
      onPress={onPress}>
      <SText fStyle="BmdSb" text={buttonText} color={buttonTextColor} />
      <Edit20 onClick={onClick} />
    </Pressable>
  );
};

export default BusinessButton;

const styles = StyleSheet.create({
  editButton: {
    height: SWidth * 40,
    paddingHorizontal: SWidth * 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
    borderWidth: 1.25,
    borderRadius: 8,
  },
});
