import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../globalStyle';
import Check from '../../utils/svgs/Check';

type SCheckBoxProps = {
  checkValue: boolean;
  onPress: () => void;
};

const SCheckBox = ({checkValue, onPress}: SCheckBoxProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          borderColor: checkValue ? '#155DFC' : '#525252',
          backgroundColor: checkValue ? '#155DFC' : '#FFFFFF',
        },
      ]}
      onPress={onPress}>
      <Check />
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
