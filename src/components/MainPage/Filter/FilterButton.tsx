import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {FilterButtonProps} from '../../../utils/types/mainType';
import SText from '../../Elements/SText';

const FilterButton = ({title, onPress, icon}: FilterButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <SText
        fStyle="BmdSb"
        text={title}
        color={colors.text.interactive.secondary}
      />
      {icon}
    </Pressable>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  container: {
    height: SWidth * 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.25,
    borderColor: colors.border.interactive.secondary,
    gap: SWidth * 8,
    paddingHorizontal: SWidth * 16,
    borderRadius: SWidth * 8,
    backgroundColor: colors.white,
  },
});
