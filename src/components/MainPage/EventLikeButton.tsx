import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import FillHeart24 from '../../utils/svgs/mainPage/FillHeart24';
import Heart24 from '../../utils/svgs/myPage/Heart24';
import {OnPressProps} from '../../utils/types/businessType';

const EventLikeButton = ({click, onPress}: OnPressProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {click ? (
        <FillHeart24 />
      ) : (
        <Heart24 color={colors.icon.interactive.primaryHovered} />
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
