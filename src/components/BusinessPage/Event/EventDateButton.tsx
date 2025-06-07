import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {EventDateButtonProps} from '../../../utils/types/businessType';
import SText from '../../Elements/SText';

const EventDateButton = ({
  title,
  icon,
  onPress,
  onLayout,
  borderColor,
  textColor,
}: EventDateButtonProps) => {
  return (
    <Pressable
      style={[styles.container, {borderColor: borderColor}]}
      onPress={onPress}
      onLayout={onLayout}>
      <SText fStyle="BlgMd" text={title} color={textColor} />
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

    borderRadius: SWidth * 8,
  },
});
