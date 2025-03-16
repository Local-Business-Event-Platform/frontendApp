import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';

const BContainer = ({children}: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

export default BContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: SWidth * 16,
    paddingBottom: SWidth * 24,
  },
});
