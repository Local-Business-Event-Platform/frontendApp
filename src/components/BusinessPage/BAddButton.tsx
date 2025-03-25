import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../globalStyle';
import BusinessPlus from '../../utils/svgs/businessPage/BusinessPlus';
import {TitleOnPressProps} from '../../utils/types/businessType';
import SText from '../Elements/SText';

const BAddButton = ({
  title,
  marginTop = SWidth * 24,
  onPress,
}: TitleOnPressProps) => {
  return (
    <Pressable
      style={[styles.container, {marginTop: marginTop}]}
      onPress={onPress}>
      <BusinessPlus />
      <SText fStyle="BlgSb" text={title} color={'#525252'} />
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
    borderColor: '#A1A1A1',
  },
});
