import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {EventDateButtonProps} from '../../../utils/types/businessType';
import SText from '../../Elements/SText';

const EventDateButton = ({title, icon, onPress}: EventDateButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <SText fStyle="BlgMd" text={title} color={colors.text.disabled} />
      {icon}
    </Pressable>
  );
};

export default EventDateButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: SWidth * 48,
    justifyContent: 'space-between',
    paddingHorizontal: SWidth * 12,
    borderWidth: 1.25,
    borderColor: colors.interactive.secondary,
    borderRadius: SWidth * 8,
  },
});
