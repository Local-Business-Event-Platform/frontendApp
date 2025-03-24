import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import {BOnlyTitleProps} from '../../../../utils/types/businessType';
import SText from '../../../Elements/SText';

const StoreDetailDDay = ({title}: BOnlyTitleProps) => {
  return (
    <View style={styles.container}>
      <SText fStyle="BlgSb" text={title} color={'white'} />
    </View>
  );
};

export default StoreDetailDDay;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: SWidth * 8,
    right: SWidth * 8,
    borderRadius: 999,
    height: SWidth * 28,
    backgroundColor: '#155DFC',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SWidth * 16,
    zIndex: 1,
  },
});
