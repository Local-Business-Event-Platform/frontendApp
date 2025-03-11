import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SWidth} from '../../../globalStyle';
import {SInputProps} from '../../utils/types/type';
import SText from './SText';

const SInput = ({
  title,
  value,
  onChangeText,
  editable,
  placeholder,
}: SInputProps) => {
  return (
    <View style={styles.container}>
      {title && <SText fStyle="BmdMd" text={title} />}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        style={styles.inputStyle}
        placeholder={placeholder}
      />
    </View>
  );
};

export default SInput;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 8,
  },

  inputStyle: {
    borderWidth: SWidth * 1.25,
    borderColor: '#E5E5E5',
    borderRadius: SWidth * 8,
    height: SWidth * 48,
    paddingHorizontal: SWidth * 12,
  },
});
