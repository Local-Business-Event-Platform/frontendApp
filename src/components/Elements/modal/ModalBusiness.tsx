import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import CirclePlus24 from '../../../utils/svgs/businessPage/CirclePlus24';
import {OnPressProps} from '../../../utils/types/businessType';
import SButton56 from '../SButton56';
import SInput from '../SInput';
import SListButton from '../SListButton';
import SText from '../SText';

const ModalBusiness = ({onPress}: OnPressProps) => {
  return (
    <>
      <View style={styles.imageContainer}>
        <CirclePlus24 />
        <SText
          fStyle="BlgSb"
          text={'이미지 등록하기'}
          color={colors.tertiary}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.contentStyle}>
          <SText fStyle="BmdMd" text={'카테고리'} color={colors.secondary} />
          <SListButton title="카테고리 선택" onPress={() => {}} />
        </View>
        <SInput
          value=""
          title="메뉴명"
          placeholder="메뉴명"
          onChangeText={() => {}}
        />
        <SInput
          iconOn
          value=""
          title="가격"
          textIcon="원"
          keyboardType="numeric"
          onChangeText={() => {}}
        />
      </View>
      <View style={styles.rowLine}>
        <SButton56
          title="닫기"
          textColor={colors.secondary}
          ButtonColor={'#FAFAFA'}
          onPress={onPress!}
        />
        <SButton56
          title="메뉴 수정하기"
          textColor={'white'}
          ButtonColor={colors.interactive.primary}
          onPress={() => {}}
        />
      </View>
    </>
  );
};

export default ModalBusiness;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SWidth * 8,
    height: SWidth * 160,
    borderRadius: SWidth * 8,
    backgroundColor: '#F5F5F5',
  },

  inputContainer: {
    gap: SWidth * 12,
  },

  contentStyle: {
    gap: SWidth * 8,
  },

  rowLine: {
    flexDirection: 'row',
    gap: SWidth * 16,
    alignItems: 'center',
  },
});
