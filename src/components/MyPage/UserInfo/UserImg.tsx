import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {SWidth} from '../../../../globalStyle';
import {imageSelected} from '../../../service/imagePicker';
import MyPagePen from '../../../utils/svgs/myPage/MyPagePen';
import {UserImgProps} from '../../../utils/types/myPage';

const UserImg = ({source, setUserImg}: UserImgProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.imgBox}
        onPress={() =>
          imageSelected({
            width: 100,
            height: 100,
            cropperCircleOverlay: true,
            setImage: setUserImg,
          })
        }>
        <FastImage
          style={styles.imgStyle}
          source={source}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.imgUpdateIcon}>
          <MyPagePen />
        </View>
      </Pressable>
    </View>
  );
};

export default UserImg;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  imgBox: {
    position: 'relative',
  },

  imgStyle: {
    width: SWidth * 100,
    height: SWidth * 100,
    borderRadius: 999,
  },

  imgUpdateIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: SWidth * 28,
    height: SWidth * 28,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});
