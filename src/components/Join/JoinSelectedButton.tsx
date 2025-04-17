import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {JoinSelectedButtonProps} from '../../utils/types/joinType';
import SText from '../Elements/SText';

const JoinSelectedButton = ({
  onPress,
  title,
  backgroundColor,
}: JoinSelectedButtonProps) => {
  return (
    <Pressable
      style={[styles.boxStyle, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <SText fStyle="BlgSb" text={title} />
    </Pressable>
  );
};

export default JoinSelectedButton;

const styles = StyleSheet.create({
  boxStyle: {
    width: '100%',
    height: SWidth * 248,
    borderRadius: SWidth * 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
