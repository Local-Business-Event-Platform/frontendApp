import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {SButtonProps} from '../../utils/types/type';
import SText from './SText';

const SButton56 = ({
  flex = true,
  onPress,
  disabled,
  ButtonColor,
  title,
  textColor,
}: SButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {flex: flex ? 1 : 0, backgroundColor: ButtonColor},
      ]}>
      <SText fStyle="BlgSb" text={title} color={textColor} />
    </Pressable>
  );
};

export default SButton56;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: SWidth * 56,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
