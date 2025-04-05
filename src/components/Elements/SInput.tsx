import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {colors, fontFamilies, SWidth} from '../../../globalStyle';
import AuthCheck from '../../utils/svgs/auth/AuthCheck';
import JoinPasswordClose from '../../utils/svgs/auth/JoinPasswordClose';
import JoinPasswordOpen from '../../utils/svgs/auth/JoinPasswordOpen';
import LoginError from '../../utils/svgs/auth/LoginError';
import MapSearchIcon from '../../utils/svgs/mapPage/MapSearchIcon';
import {SInputProps} from '../../utils/types/type';
import JoinButton from '../Join/JoinUser/JoinButton';
import SText from './SText';

const SInput = ({
  title,
  required,
  titleColor,
  value,
  buttonTitle,
  borderColor = colors.interactive.secondary,
  buttonOnPress,
  ButtonTextDecorationLine,
  maxLength,
  onChangeText,
  editable,
  keyboardType,
  secureTextEntry,
  placeholder,
  iconOn,
  searchOn,
  searchIconColor,
  textIcon,
  iconOnPress,
  msg,
  msgType,
}: SInputProps) => {
  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.titleContainer}>
          <SText fStyle="BmdMd" text={title} color={titleColor} />
          {required && (
            <SText
              fStyle="BmdMd"
              text={'*'}
              color={colors.interactive.primary}
            />
          )}
        </View>
      )}
      <View style={styles.inputContainer}>
        <View style={styles.inputButton}>
          <View
            style={{flex: 1, position: 'relative', justifyContent: 'center'}}>
            <TextInput
              value={value}
              maxLength={maxLength}
              onChangeText={onChangeText}
              editable={editable}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              style={[
                styles.inputStyle,
                {
                  borderColor: borderColor,
                },
              ]}
              placeholder={placeholder}
              placeholderTextColor={colors.disabled}
            />
            {textIcon !== '' && (
              <View style={styles.passwordIcon}>
                <SText
                  fStyle="BlgMd"
                  text={textIcon!}
                  color={colors.disabled}
                />
              </View>
            )}
            {iconOn && (
              <Pressable
                style={styles.passwordIcon}
                onPress={iconOnPress}
                hitSlop={10}>
                {secureTextEntry ? <JoinPasswordClose /> : <JoinPasswordOpen />}
              </Pressable>
            )}
            {searchOn && (
              <Pressable
                style={styles.passwordIcon}
                onPress={iconOnPress}
                hitSlop={10}>
                <MapSearchIcon color={searchIconColor} />
              </Pressable>
            )}
          </View>
          {buttonTitle && (
            <JoinButton
              title={buttonTitle}
              buttonOnPress={buttonOnPress}
              textDecorationLine={ButtonTextDecorationLine}
            />
          )}
        </View>

        {msg && (
          <View style={styles.errorLow}>
            {msgType === 'error' && <LoginError />}
            {msgType === 'success' && <AuthCheck />}
            <SText
              fStyle="BlgMd"
              text={msg}
              color={
                msgType === 'error'
                  ? '#E7000B'
                  : msgType === 'success'
                  ? '#00A63E'
                  : colors.tertiary
              }
            />
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

  titleContainer: {
    flexDirection: 'row',
    gap: SWidth * 4,
  },

  inputStyle: {
    borderWidth: SWidth * 1.25,
    borderRadius: SWidth * 8,
    backgroundColor: 'white',
    height: SWidth * 48,
    paddingHorizontal: SWidth * 12,
    fontSize: SWidth * 16,
    fontFamily: fontFamilies.pretendardMedium,
  },

  passwordIcon: {
    position: 'absolute',
    right: SWidth * 12,
  },

  inputButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },

  errorLow: {
    marginTop: SWidth * 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
