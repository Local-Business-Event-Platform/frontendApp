import React from 'react';
import {DimensionValue, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fontFamilies, fontSizes, SWidth} from '../../../globalStyle';
import SText from './SText';

type STextAreaProps = {
  title?: string;
  required?: boolean;
  titleColor?: string;
  value: string;
  minHeight?: DimensionValue;
  placeholder: string;
  onChangeText?: (text: string) => void;
};

const STextArea = ({
  title,
  required,
  titleColor,
  value,
  minHeight = SWidth * 104,
  placeholder,
  onChangeText,
}: STextAreaProps) => {
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

      <TextInput
        value={value}
        style={[styles.inputStyle, {minHeight: minHeight}]}
        multiline={true}
        placeholder={placeholder}
        placeholderTextColor={colors.disabled}
        numberOfLines={6}
        maxLength={200}
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
    borderColor: colors.interactive.secondary,
    borderRadius: SWidth * 8,
    padding: SWidth * 12,
    textAlignVertical: 'top',
    fontSize: fontSizes(SWidth * 16),
    lineHeight: SWidth * 20,
    fontFamily: fontFamilies.pretendardMedium,
  },

  titleContainer: {
    flexDirection: 'row',
    gap: SWidth * 4,
  },
});
