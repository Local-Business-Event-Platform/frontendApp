import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import Location24 from '../../utils/svgs/businessPage/Location24';
import {SMeterBoxProps} from '../../utils/types/type';
import SText from './SText';

const SMeterBox = ({content}: SMeterBoxProps) => {
  return (
    <View style={styles.container}>
      <Location24 />
      <SText fStyle="BmdMd" text={content} color={colors.secondary} />
    </View>
  );
};

export default SMeterBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
