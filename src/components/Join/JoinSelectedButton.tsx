import React from 'react';
import {ColorValue, Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SText from '../Elements/SText';

type JoinSelectedButtonProps = {
  onPress: () => void;
  title: string;
  backgroundColor: ColorValue;
};

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
    paddingTop: SWidth * 24,
    borderRadius: SWidth * 12,
    alignItems: 'center',
  },
});
