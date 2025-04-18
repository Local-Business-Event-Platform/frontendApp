import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SText from '../Elements/SText';

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoStyle}>
        <SText fStyle="BlgSb" text={'로고'} color={colors.text.disabled} />
      </View>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },

  logoStyle: {
    width: SWidth * 140,
    height: SWidth * 140,
    backgroundColor: colors.bg.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SWidth * 8,
  },
});
