import React from 'react';
import {ColorValue, Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import SText from '../../SText';

type ModalDetailItemProps = {
  title: string;
  titleColor: ColorValue;
  onPress: () => void;
  border: number;
};

const ModalDetailItem = ({
  title,
  titleColor,
  onPress,
  border,
}: ModalDetailItemProps) => {
  return (
    <Pressable
      style={[styles.container, {borderBottomWidth: border}]}
      onPress={onPress}>
      <SText fStyle="BxlRg" text={title} color={titleColor} />
    </Pressable>
  );
};

export default ModalDetailItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SWidth * 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.border.secondary,
  },
});
