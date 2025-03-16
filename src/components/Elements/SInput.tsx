import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {fontFamilies, SWidth} from '../../../globalStyle';
import JoinPasswordClose from '../../utils/svgs/auth/JoinPasswordClose';
import JoinPasswordOpen from '../../utils/svgs/auth/JoinPasswordOpen';
import {SInputProps} from '../../utils/types/type';
import SText from './SText';

const SInput = ({
  title,
  value,
  onChangeText,
  editable,
  keyboardType,
  secureTextEntry,
  placeholder,
  iconOn,
  iconOnPress,
}: SInputProps) => {
  return (
    <View style={styles.container}>
      {title && <SText fStyle="BmdMd" text={title} />}
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={styles.inputStyle}
          placeholder={placeholder}
          placeholderTextColor={'#A1A1A1'}
        />
        {iconOn && (
          <Pressable style={styles.passwordIcon} onPress={iconOnPress}>
            {secureTextEntry ? <JoinPasswordOpen /> : <JoinPasswordClose />}
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default SInput;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 8,
  },

  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },

  inputStyle: {
    borderWidth: SWidth * 1.25,
    borderColor: '#E5E5E5',
    borderRadius: SWidth * 8,
    height: SWidth * 48,
    paddingHorizontal: SWidth * 12,
    fontSize: SWidth * 16,
    fontFamily: fontFamilies.pretendardMedium,
  },

  passwordIcon: {
    position: 'absolute',
    right: SWidth * 12,
  },
});
