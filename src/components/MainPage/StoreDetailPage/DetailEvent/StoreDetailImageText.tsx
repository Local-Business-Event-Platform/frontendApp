import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import SText from '../../../Elements/SText';

const StoreDetailImageText = () => {
  return (
    <View style={styles.container}>
      <SText fStyle="BsmSb" text="NEW MENU LAUNCH EVENT" color={colors.white} />
      <View style={styles.content}>
        <SText fStyle="BlgSb" text="20% DISCOUNT" color={colors.white} />
        <SText fStyle="Hxl" text="MENU" color={colors.white} />
      </View>
    </View>
  );
};

export default StoreDetailImageText;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SWidth * 16,
  },

  content: {
    alignItems: 'center',
  },
});
