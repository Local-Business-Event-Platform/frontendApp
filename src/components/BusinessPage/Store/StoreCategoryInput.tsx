import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import CircleCheck24 from '../../../utils/svgs/businessPage/CircleCheck24';
import Delete24 from '../../../utils/svgs/businessPage/Delete24';
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
        style={[
          styles.iconContainer,
          {backgroundColor: colors.bg.interactive.primary},
        ]}
        onPress={addOnPress}>
        <CircleCheck24 />
      </Pressable>
      <Pressable
        style={[
          styles.iconContainer,
          {backgroundColor: colors.bg.interactive.secondaryHovered},
        ]}
        onPress={deleteOnPress}>
        <Delete24 />
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
  },
});
