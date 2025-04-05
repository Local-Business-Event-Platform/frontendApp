import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import MainFillHeart from '../../utils/svgs/mainPage/MainFillHeart';
import MyPageHeart from '../../utils/svgs/myPage/MyPageHeart';
import {OnPressProps} from '../../utils/types/businessType';

const EventLikeButton = ({click, onPress}: OnPressProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {click ? (
        <MainFillHeart />
      ) : (
        <MyPageHeart color={colors.interactive.primary} />
      )}
    </Pressable>
  );
};

export default EventLikeButton;

const styles = StyleSheet.create({
  container: {
    width: SWidth * 40,
    height: SWidth * 40,
    borderRadius: SWidth * 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
