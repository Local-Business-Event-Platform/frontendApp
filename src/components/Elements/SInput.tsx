import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {fontFamilies, SWidth} from '../../../globalStyle';
import JoinPasswordClose from '../../utils/svgs/auth/JoinPasswordClose';
import JoinPasswordOpen from '../../utils/svgs/auth/JoinPasswordOpen';
import LoginError from '../../utils/svgs/auth/LoginError';
import {SInputProps} from '../../utils/types/type';
import SText from './SText';

const SInput = ({
  title,
  titleColor,
  value,
  maxLength,
  onChangeText,
  editable,
  keyboardType,
  secureTextEntry,
  placeholder,
  iconOn,
  textIcon,
  iconOnPress,
  errorText,
}: SInputProps) => {
  return (
    <View style={styles.container}>
      {title && <SText fStyle="BmdMd" text={title} color={titleColor} />}
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          maxLength={maxLength}
          onChangeText={onChangeText}
          editable={editable}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={styles.inputStyle}
          placeholder={placeholder}
          placeholderTextColor={'#A1A1A1'}
        />
        {textIcon !== '' && (
          <View style={styles.passwordIcon}>
            <SText fStyle="BlgMd" text={textIcon!} color={'#A1A1A1'} />
          </View>
        )}
        {iconOn && (
          <Pressable
            style={styles.passwordIcon}
            onPress={iconOnPress}
            hitSlop={10}>
            {secureTextEntry ? <JoinPasswordOpen /> : <JoinPasswordClose />}
          </Pressable>
        )}
        {errorText && (
          <View style={styles.errorLow}>
            <LoginError />
            <SText fStyle="BlgMd" text={errorText} color={'#E7000B'} />
          </View>
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

  errorLow: {
    marginTop: SWidth * 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
