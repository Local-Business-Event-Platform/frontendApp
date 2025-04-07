import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SText from '../../Elements/SText';

const SearchSubTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <SText fStyle="BlgSb" text={'최근 검색'} color={colors.black} />
      <Pressable hitSlop={10} onPress={() => {}}>
        <SText fStyle="BlgSb" text={'전체 삭제'} color={colors.text.disabled} />
      </Pressable>
    </View>
  );
};

export default SearchSubTitle;

const styles = StyleSheet.create({
  titleContainer: {
    height: SWidth * 56,
    flexDirection: 'row',
    paddingHorizontal: SWidth * 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
