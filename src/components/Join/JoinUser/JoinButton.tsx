import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {JoinButtonProps} from '../../../utils/types/joinType';
import SText from '../../Elements/SText';

const JoinButton = ({
  title,
  buttonOnPress,
  disabled,
  backgroundColor,
  textDecorationLine,
}: JoinButtonProps) => {
  return (
    <Pressable
      style={[styles.buttonContainer, {backgroundColor: backgroundColor}]}
      disabled={disabled}
      onPress={buttonOnPress}>
      <SText
        fStyle="BlgSb"
        text={title}
        color={colors.secondary}
        textDecorationLine={textDecorationLine}
      />
    </Pressable>
  );
};

export default JoinButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: SWidth * 48,
    paddingVertical: SWidth * 14,
    paddingHorizontal: SWidth * 24,

    borderRadius: SWidth * 8,
  },
});
