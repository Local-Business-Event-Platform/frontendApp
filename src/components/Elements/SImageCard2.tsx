import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import {SImageCard2Props} from '../../utils/types/type';

const SImageCard2 = ({children, image, onPress}: SImageCard2Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FastImage
        source={{uri: image}}
        style={styles.imgStyle}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.textContainer}>{children}</View>
    </Pressable>
  );
};

export default SImageCard2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: SWidth * 8,
    overflow: 'hidden',
    boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.05)',
    backgroundColor: colors.white,
  },

  imgStyle: {
    width: SWidth * 110,
    height: SWidth * 110,
  },

  textContainer: {
    flex: 1,
    paddingTop: SWidth * 8,
    paddingHorizontal: SWidth * 12,
    gap: SWidth * 12,
  },
});
