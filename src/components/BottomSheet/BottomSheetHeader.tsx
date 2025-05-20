import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';

const BottomSheetHeader = () => {
  return (
    <Pressable style={styles.handleContainer} hitSlop={20}>
      <View style={styles.handleIndicator} />
    </Pressable>
  );
};

export default BottomSheetHeader;

const styles = StyleSheet.create({
  handleContainer: {
    width: '100%',
    paddingTop: SWidth * 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: SWidth * 16,
    borderTopEndRadius: SWidth * 16,
  },

  handleIndicator: {
    width: SWidth * 56,
    height: SWidth * 5,
    backgroundColor: `${colors.icon.disabled}80`,
    borderRadius: 3,
  },
});
