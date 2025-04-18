import React from 'react';
import {DimensionValue, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  colors,
  fontFamilies,
  normalizeFont,
  SWidth,
} from '../../../globalStyle';
import SText from './SText';

type STextAreaProps = {
  title?: string;
  required?: boolean;
  titleColor?: string;
  value: string;
  minHeight?: DimensionValue;
  maxLength?: number;
  textCount?: boolean;
  placeholder: string;
  onChangeText?: (text: string) => void;
};

const STextArea = ({
  title,
  required,
  titleColor,
  value,
  minHeight = SWidth * 104,
  maxLength = 200,
  textCount = false,
  placeholder,
  onChangeText,
}: STextAreaProps) => {
  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.titleContainer}>
          <View style={styles.requiredContainer}>
            <SText fStyle="BmdMd" text={title} color={titleColor} />
            {required && (
              <SText
                fStyle="BmdMd"
                text={'*'}
                color={colors.text.interactive.primary}
              />
            )}
          </View>
          {textCount && (
            <View style={styles.countContainer}>
              <SText
                fStyle="BmdMd"
                text={`${value.length}`}
                color={colors.text.tertiary}
              />
              <SText fStyle="BmdMd" text={'/'} color={colors.text.tertiary} />
              <SText fStyle="BmdMd" text={`${maxLength}`} />
            </View>
          )}
        </View>
      )}
      <TextInput
        value={value}
        style={[styles.inputStyle, {minHeight: minHeight}]}
        multiline={true}
        placeholder={placeholder}
        placeholderTextColor={colors.text.disabled}
        numberOfLines={6}
        maxLength={maxLength}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default STextArea;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 8,
  },

  inputStyle: {
    width: '100%',
    justifyContent: 'flex-start',
    borderWidth: SWidth * 1.25,
    borderColor: colors.border.secondary,
    borderRadius: SWidth * 8,
    padding: SWidth * 12,
    textAlignVertical: 'top',
    fontSize: normalizeFont(16),
    lineHeight: SWidth * 20,
    fontFamily: fontFamilies.pretendardMedium,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  requiredContainer: {
    flexDirection: 'row',
    gap: SWidth * 4,
  },

  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
