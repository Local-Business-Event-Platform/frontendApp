import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import Edit24 from '../../../utils/svgs/businessPage/Edit24';
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
          borderColor: onClick ? colors.interactive.primary : colors.tertiary,
          backgroundColor: onClick ? colors.interactive.primary : 'white',
        },
      ]}
      onPress={onPress}>
      <SText fStyle="BmdSb" text={buttonText} color={buttonTextColor} />
      <Edit24 onClick={onClick} />
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
    borderColor: colors.tertiary,
    borderRadius: 8,
  },
});
