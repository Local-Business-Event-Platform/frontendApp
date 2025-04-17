import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import Check8 from '../../utils/svgs/auth/Check8';
import {SCheckBoxProps} from '../../utils/types/type';

const SCheckBox = ({checkValue, onPress}: SCheckBoxProps) => {
  return (
    <Pressable
      hitSlop={10}
      style={[
        styles.container,
        {
          borderColor: checkValue
            ? colors.interactive.primary
            : colors.tertiary,
          backgroundColor: checkValue
            ? colors.interactive.primary
            : colors.white,
        },
      ]}
      onPress={onPress}>
      <Check8 />
    </Pressable>
  );
};

export default SCheckBox;

const styles = StyleSheet.create({
  container: {
    width: SWidth * 16,
    height: SWidth * 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: SWidth * 1.25,
    borderRadius: SWidth * 4,
  },
});
