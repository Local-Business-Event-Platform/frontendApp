import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import Delete24 from '../../utils/svgs/businessPage/Delete24';
import {BTitleContainerProps} from '../../utils/types/businessType';
import SText from '../Elements/SText';
import BusinessButton from './Basic/BusinessButton';

const BButtonTitle = ({
  title,
  titleSize = 'Hmd',
  buttonText,
  buttonTextColor,
  onClick,
  onPress,
  deleteButton,
  deleteOnPress,
}: BTitleContainerProps) => {
  return (
    <View style={styles.container}>
      <SText fStyle={titleSize} text={title} />
      <View style={styles.buttonContainer}>
        <BusinessButton
          buttonText={buttonText}
          buttonTextColor={buttonTextColor}
          onClick={onClick}
          onPress={onPress}
        />
        {deleteButton && onClick && (
          <Pressable style={styles.deleteButton} onPress={deleteOnPress}>
            <Delete24 />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default BButtonTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },

  deleteButton: {
    width: SWidth * 40,
    height: SWidth * 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.25,
    borderRadius: SWidth * 8,
    borderColor: colors.border.interactive.secondaryHovered,
  },
});
