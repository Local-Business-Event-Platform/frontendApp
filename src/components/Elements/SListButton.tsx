import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import DownArrow24 from '../../utils/svgs/businessPage/DownArrow24';
import {SListButtonProps} from '../../utils/types/type';
import SText from './SText';

const SListButton = ({title, onPress}: SListButtonProps) => {
  return (
    <Pressable style={styles.listButton} onPress={onPress}>
      <SText fStyle="BlgMd" text={title} color={colors.text.disabled} />
      <DownArrow24 />
    </Pressable>
  );
};

export default SListButton;

const styles = StyleSheet.create({
  listButton: {
    borderWidth: 1.25,
    borderColor: colors.border.secondary,
    backgroundColor: colors.bg.primary,
    flexDirection: 'row',
    borderRadius: SWidth * 8,
    paddingHorizontal: SWidth * 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: SWidth * 48,
  },
});
