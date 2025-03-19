import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import BusinessEditBlue from '../../../utils/svgs/businessPage/BusinessEditBlue';
import {OnPressProps} from '../../../utils/types/businessType';

const StoreUpdateButton = ({onPress}: OnPressProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <BusinessEditBlue />
    </Pressable>
  );
};

export default StoreUpdateButton;

const styles = StyleSheet.create({
  container: {
    width: SWidth * 48,
    height: SWidth * 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SWidth * 8,
    borderWidth: 1.25,
    borderColor: '#155DFC',
  },
});
