import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import BusinessDownArrow from '../../utils/svgs/businessPage/BusinessDownArrow';
import {SListButtonProps} from '../../utils/types/type';
import SText from './SText';

const SListButton = ({title, onPress}: SListButtonProps) => {
  return (
    <Pressable style={styles.listButton} onPress={onPress}>
      <SText fStyle="BlgMd" text={title} color={colors.disabled} />
      <BusinessDownArrow />
    </Pressable>
  );
};

export default SListButton;

const styles = StyleSheet.create({
  listButton: {
    borderWidth: 1.25,
    borderColor: colors.interactive.secondary,
    flexDirection: 'row',
    borderRadius: SWidth * 8,
    paddingHorizontal: SWidth * 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: SWidth * 48,
  },
});
