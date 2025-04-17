import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {
  colors,
  fontFamilies,
  normalizeFont,
  SWidth,
} from '../../../globalStyle';
import Check24 from '../../utils/svgs/auth/Check24';
import Close24 from '../../utils/svgs/auth/Close24';
import Error24 from '../../utils/svgs/auth/Error24';
import Open24 from '../../utils/svgs/auth/Open24';
import Search24 from '../../utils/svgs/mainPage/Search24';
import {SInputProps} from '../../utils/types/type';
import JoinButton from '../Join/JoinUser/JoinButton';
import SText from './SText';

const SInput = ({
  title,
  required,
  titleColor,
  value,
  buttonTitle,
  borderColor = colors.border.secondary,
  buttonOnPress,
  buttonDisabled,
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
              placeholderTextColor={colors.text.disabled}
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
                {secureTextEntry ? <Close24 /> : <Open24 />}
              </Pressable>
            )}
            {searchOn && (
              <Pressable
                style={styles.passwordIcon}
                onPress={iconOnPress}
                hitSlop={10}>
                <Search24 color={searchIconColor} />
              </Pressable>
            )}
          </View>
          {buttonTitle && (
            <JoinButton
              title={buttonTitle}
              buttonOnPress={buttonOnPress}
              disabled={buttonDisabled}
              textDecorationLine={ButtonTextDecorationLine}
            />
          )}
        </View>

        {msg && (
          <View style={styles.errorLow}>
            {msgType === 'error' && <Error24 />}
            {msgType === 'success' && <Check24 />}
            <SText
              fStyle="BlgMd"
              text={msg}
              color={
                msgType === 'error'
                  ? colors.text.danger
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
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: 'white',
    height: SWidth * 48,
    paddingHorizontal: SWidth * 12,
    fontSize: normalizeFont(16),
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
