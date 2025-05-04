import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import {ModalDetailItemProps} from '../../../../utils/types/modalType';
import SText from '../../SText';

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
