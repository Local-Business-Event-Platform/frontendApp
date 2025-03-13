import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import JoinPasswordClose from '../../utils/svgs/auth/JoinPasswordClose';
import JoinPasswordOpen from '../../utils/svgs/auth/JoinPasswordOpen';
import {SInputProps} from '../../utils/types/type';
import SText from './SText';

const SInput = ({
  title,
  value,
  onChangeText,
  editable,
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
          secureTextEntry={secureTextEntry}
          style={styles.inputStyle}
          placeholder={placeholder}
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
  },

  passwordIcon: {
    position: 'absolute',
    right: SWidth * 12,
  },
});
