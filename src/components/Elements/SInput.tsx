import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SWidth} from '../../../globalStyle';
import SText from './SText';

type SInputProps = {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
};

const SInput = ({title, value, onChangeText}: SInputProps) => {
  return (
    <View style={styles.container}>
      <SText fStyle="BmdMd" text={title} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        placeholder="Placeholder"
      />
    </View>
  );
};

export default SInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: SWidth * 8,
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: SWidth * 8,
    height: SWidth * 48,
    paddingHorizontal: SWidth * 12,
  },
});
