import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {fontFamilies, SWidth} from '../../../../globalStyle';
import BusinessCircleCheck from '../../../utils/svgs/businessPage/BusinessCircleCheck';
import BusinessDelete from '../../../utils/svgs/businessPage/BusinessDelete';
import {StoreCategoryInputProps} from '../../../utils/types/businessType';
import SInput from '../../Elements/SInput';

const StoreCategoryInput = ({
  value,
  onChangeText,
  addOnPress,
  deleteOnPress,
}: StoreCategoryInputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputStyle}>
        <SInput
          value={value}
          onChangeText={onChangeText}
          placeholder="카테고리 추가"
        />
      </View>
      <Pressable
        style={[styles.iconContainer, {backgroundColor: '#155DFC'}]}
        onPress={addOnPress}>
        <BusinessCircleCheck />
      </Pressable>
      <Pressable
        style={[styles.iconContainer, {backgroundColor: '#E5E5E5'}]}
        onPress={deleteOnPress}>
        <BusinessDelete />
      </Pressable>
    </View>
  );
};

export default StoreCategoryInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },

  inputStyle: {
    flex: 1,
  },

  iconContainer: {
    width: SWidth * 48,
    height: SWidth * 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SWidth * 8,
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: SWidth * 16,
  },
});
