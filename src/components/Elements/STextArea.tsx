import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {fontFamilies, SWidth} from '../../../globalStyle';

type STextAreaProps = {
  value: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
};

const STextArea = ({value, placeholder, onChangeText}: STextAreaProps) => {
  return (
    <TextInput
      value={value}
      style={styles.container}
      multiline={true}
      placeholder={placeholder}
      placeholderTextColor={'#A1A1A1'}
      numberOfLines={6}
      maxLength={200}
      onChangeText={onChangeText}
    />
  );
};

export default STextArea;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    minHeight: SWidth * 104,
    borderWidth: SWidth * 1.25,
    borderColor: '#E5E5E5',
    borderRadius: SWidth * 8,
    padding: SWidth * 12,
    textAlignVertical: 'top',
    fontSize: SWidth * 16,
    lineHeight: SWidth * 20,
    fontFamily: fontFamilies.pretendardMedium,
  },
});
