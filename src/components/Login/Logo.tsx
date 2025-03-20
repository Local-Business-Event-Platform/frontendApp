import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SWidth} from '../../../globalStyle';

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoStyle}>
        <Text>로고</Text>
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
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SWidth * 8,
  },
});
