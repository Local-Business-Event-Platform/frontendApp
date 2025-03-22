import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {BOnlyTitleProps} from '../../../utils/types/businessType';
import SText from '../../Elements/SText';

const OnlyTitleAppBar = ({title}: BOnlyTitleProps) => {
  return (
    <View style={styles.container}>
      <SText fStyle="BlgMd" text={title} />
    </View>
  );
};

export default OnlyTitleAppBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SWidth * 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
