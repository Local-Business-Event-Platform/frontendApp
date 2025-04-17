import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import Plus24 from '../../utils/svgs/businessPage/Plus24';
import {TitleOnPressProps} from '../../utils/types/businessType';
import SText from '../Elements/SText';

const BAddButton = ({title, onPress}: TitleOnPressProps) => {
  return (
    <Pressable style={[styles.container]} onPress={onPress}>
      <Plus24 />
      <SText
        fStyle="BlgSb"
        text={title}
        color={colors.text.interactive.secondary}
      />
    </Pressable>
  );
};

export default BAddButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    height: SWidth * 56,
    borderRadius: SWidth * 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SWidth * 8,
    borderStyle: 'dashed',
    borderColor: colors.border.primary,
  },
});
