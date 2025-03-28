import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import MyPageMoreIcon from '../../../utils/svgs/myPage/MyPageMoreIcon';
import {LocationAddItemProps} from '../../../utils/types/myPage';
import SText from '../../Elements/SText';

const LocationAddItem = ({isClicked, title, onPress}: LocationAddItemProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          borderColor: isClicked ? '#155DFC' : '#FAFAFA',
          backgroundColor: isClicked ? '#FFFFFF' : '#FAFAFA',
        },
      ]}
      onPress={onPress}>
      <SText
        fStyle="BlgSb"
        text={title}
        color={isClicked ? '#155DFC' : '#404040'}
      />
      <MyPageMoreIcon color={isClicked ? '#155DFC' : '#404040'} />
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
