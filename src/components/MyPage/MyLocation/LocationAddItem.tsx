import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import More24 from '../../../utils/svgs/myPage/More24';
import {LocationAddItemProps} from '../../../utils/types/myPage';
import SText from '../../Elements/SText';

const LocationAddItem = ({isClicked, title, onPress}: LocationAddItemProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          borderColor: isClicked
            ? colors.border.interactive.primary
            : colors.bg.interactive.secondary,
          backgroundColor: isClicked
            ? colors.white
            : colors.bg.interactive.secondary,
        },
      ]}
      onPress={onPress}>
      <SText
        fStyle="BlgSb"
        text={title}
        color={
          isClicked ? colors.text.interactive.primary : colors.icon.secondary
        }
      />
      <More24
        color={
          isClicked ? colors.icon.interactive.primary : colors.icon.secondary
        }
      />
    </Pressable>
  );
};

export default LocationAddItem;

const styles = StyleSheet.create({
  container: {
    height: SWidth * 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.25,
    borderRadius: SWidth * 8,
    paddingHorizontal: SWidth * 24,
  },
});
