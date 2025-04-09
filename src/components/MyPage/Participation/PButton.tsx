import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../../globalStyle';
import SSButton from '../../Elements/SSButton';

type PButtonProps = {
  checked: boolean;
  title: string;
  newTitle: string;
  onPress: () => void;
};

const PButton = ({checked, title, newTitle, onPress}: PButtonProps) => {
  return (
    <SSButton
      title={!checked ? title : newTitle}
      textColor={checked ? '#8c8c8c' : colors.tertiary}
      ButtonColor={checked ? colors.interactive.secondary : colors.white}
      borderColor={checked ? colors.interactive.secondary : colors.tertiary}
      onPress={onPress}
    />
  );
};

export default PButton;

const styles = StyleSheet.create({});
