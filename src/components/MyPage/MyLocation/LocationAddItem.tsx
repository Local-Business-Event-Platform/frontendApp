import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import MyPageMoreIcon from '../../../utils/svgs/myPage/MyPageMoreIcon';
import {LocationAddItemProps} from '../../../utils/types/myPage';
import SText from '../../Elements/SText';

const LocationAddItem = ({isClicked, title, onPress}: LocationAddItemProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          borderColor: isClicked ? colors.interactive.primary : '#FAFAFA',
          backgroundColor: isClicked ? colors.white : '#FAFAFA',
        },
      ]}
      onPress={onPress}>
      <SText
        fStyle="BlgSb"
        text={title}
        color={isClicked ? colors.interactive.primary : colors.secondary}
      />
      <MyPageMoreIcon
        color={isClicked ? colors.interactive.primary : colors.secondary}
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
