import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  colors,
  fontFamilies,
  normalizeFont,
  SWidth,
} from '../../../../globalStyle';
import Cancel24 from '../../../utils/svgs/mainPage/Cancel24';
import Search24 from '../../../utils/svgs/mainPage/Search24';
import {SearchInputProps} from '../../../utils/types/mainType';

const SearchInput = ({
  value,
  onChangeText,
  onPress,
  onSubmitEditing,
}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        placeholder="검색어를 입력하세요"
        placeholderTextColor={colors.text.disabled}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="done"
      />
      {
        <Pressable style={styles.iconContainer} onPress={onPress}>
          {value === '' ? (
            <Search24 color={colors.text.primary} />
          ) : (
            <Cancel24 />
          )}
        </Pressable>
      }
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
  },

  inputStyle: {
    height: SWidth * 40,
    backgroundColor: colors.bg.tertiary,
    fontSize: normalizeFont(16),
    paddingTop: 0,
    paddingBottom: 0,
    textAlignVertical: 'center',
    paddingLeft: SWidth * 16,
    paddingRight: SWidth * 45,
    fontFamily: fontFamilies.pretendardRegular,
    lineHeight: normalizeFont(16),
    borderRadius: 999,
    color: colors.text.secondary,
  },

  iconContainer: {
    position: 'absolute',
    right: SWidth * 16,
    backgroundColor: colors.bg.tertiary,
  },
});
