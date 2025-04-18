import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import MapArrow24 from '../../utils/svgs/storeDetailPage/MapArrow24';
import {OnPressProps} from '../../utils/types/businessType';

const SMapButton = ({onPress}: OnPressProps) => {
  return (
    <Pressable style={styles.mapArrow} onPress={onPress}>
      <MapArrow24 />
    </Pressable>
  );
};

export default SMapButton;

const styles = StyleSheet.create({
  mapArrow: {
    position: 'absolute',
    width: SWidth * 40,
    height: SWidth * 40,
    borderRadius: SWidth * 8,
    backgroundColor: colors.bg.interactive.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: SWidth * 8,
    right: SWidth * 8,
    zIndex: 10,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  },
});
