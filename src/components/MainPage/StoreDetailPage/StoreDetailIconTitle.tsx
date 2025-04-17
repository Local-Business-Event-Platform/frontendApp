import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {StoreDetailIconTitleProps} from '../../../utils/types/StoreDetailType';

const StoreDetailIconTitle = ({
  icon,
  gap = SWidth * 8,
  children,
}: StoreDetailIconTitleProps) => {
  return (
    <View style={[styles.container, {gap: gap}]}>
      {icon}
      {children}
    </View>
  );
};

export default StoreDetailIconTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
