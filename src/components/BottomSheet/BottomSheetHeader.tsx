import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';

const BottomSheetHeader = () => {
  return (
    <View style={styles.handleContainer}>
      <View style={styles.handleIndicator} />
    </View>
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
