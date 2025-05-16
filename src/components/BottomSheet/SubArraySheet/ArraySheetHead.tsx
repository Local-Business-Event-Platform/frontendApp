import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import CancelX24 from '../../../utils/svgs/mainPage/CancelX24';
import {OnPressProps} from '../../../utils/types/businessType';
import SText from '../../Elements/SText';

const ArraySheetHead = ({onPress}: OnPressProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{opacity: 0}}>
        <CancelX24 />
      </View>
      <SText fStyle="BlgMd" text={'정렬'} />
      <Pressable hitSlop={10} onPress={onPress}>
        <CancelX24 />
      </Pressable>
    </View>
  );
};

export default ArraySheetHead;

const styles = StyleSheet.create({
  headerContainer: {
    height: SWidth * 56,
    paddingHorizontal: SWidth * 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
