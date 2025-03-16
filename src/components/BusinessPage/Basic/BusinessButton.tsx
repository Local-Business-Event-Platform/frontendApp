import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import BusinessEdit from '../../../utils/svgs/businessPage/BusinessEdit';
import {BusinessButtonProps} from '../../../utils/types/businessType';
import SText from '../../Elements/SText';

const BusinessButton = ({onClick, onPress}: BusinessButtonProps) => {
  return (
    <Pressable
      style={[
        styles.editButton,
        {
          borderColor: onClick ? '#155DFC' : '#525252',
          backgroundColor: onClick ? '#155DFC' : 'white',
        },
      ]}
      onPress={onPress}>
      <SText
        fStyle="BmdSb"
        text={onClick ? '수정 완료' : '수정하기'}
        color={onClick ? 'white' : '#525252'}
      />
      <BusinessEdit onClick={onClick} />
    </Pressable>
  );
};

export default BusinessButton;

const styles = StyleSheet.create({
  editButton: {
    height: SWidth * 40,
    paddingHorizontal: SWidth * 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
    borderWidth: 1.25,
    borderColor: '#525252',
    borderRadius: 8,
  },
});
