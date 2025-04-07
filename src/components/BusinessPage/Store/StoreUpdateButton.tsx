import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import EditBlue24 from '../../../utils/svgs/businessPage/EditBlue24';
import {OnPressProps} from '../../../utils/types/businessType';

const StoreUpdateButton = ({onPress}: OnPressProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <EditBlue24 />
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
    borderColor: colors.interactive.primary,
  },
});
