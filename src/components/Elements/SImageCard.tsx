import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {SImageCardProps} from '../../utils/types/type';

const SImageCard = ({
  children,
  childrenButton,
  onPress,
  image,
}: SImageCardProps) => {
  return (
    <Pressable style={[styles.container]} onPress={onPress}>
      <View style={styles.imgContainer}>
        <FastImage
          source={{uri: image}}
          style={styles.imgStyle}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.buttonContainer}>{childrenButton}</View>
      </View>
      <View style={styles.contentContainer}>{children}</View>
    </Pressable>
  );
};

export default SImageCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    zIndex: 10,
  },

  imgContainer: {
    position: 'relative',
    zIndex: 10,
  },

  imgStyle: {
    width: '100%',
    height: SWidth * 172,
  },

  contentContainer: {
    padding: SWidth * 16,
  },

  buttonContainer: {
    position: 'absolute',
    top: SWidth * 8,
    right: SWidth * 8,
  },
});
