import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import {settingTypes} from '../../../../utils/listData';
import {LogoutModalProps} from '../../../../utils/types/modalType';
import SButton56 from '../../SButton56';
import SText from '../../SText';

const SettingContent = ({
  type,
  title,
  content,
  content2,
  onPress,
  closeOnPress,
}: LogoutModalProps) => {
  const buttonColor = () => {
    switch (type) {
      case settingTypes.LOGOUT:
      case settingTypes.DATA:
      case settingTypes.VERSION:
        return colors.bg.interactive.primary;
      case settingTypes.WARNING:
      case settingTypes.ERROR:
      case settingTypes.BLOCK:
        return colors.bg.interactive.subtle;
    }
  };

  const successText = () => {
    switch (type) {
      case settingTypes.LOGOUT:
        return '로그아웃할게요';
      case settingTypes.WARNING:
        return '탈퇴할게요';
      case settingTypes.DATA:
        return '삭제할게요';
      case settingTypes.LOGIN:
        return '로그인 하러가기';
      case settingTypes.WARNING:
        return '확인';
      case settingTypes.BLOCK:
        return '문의하기';
      case settingTypes.VERSION:
        return '지금 업데이트 하기';
    }
  };

  const textColor = () => {
    switch (type) {
      case settingTypes.LOGOUT:
      case settingTypes.DATA:
      case settingTypes.LOGIN:
      case settingTypes.VERSION:
        return colors.text.interactive.inverse;
      case settingTypes.WARNING:
      case settingTypes.ERROR:
      case settingTypes.BLOCK:
        return colors.text.danger;
    }
  };

  const closeText = () => {
    switch (type) {
      case settingTypes.LOGOUT:
      case settingTypes.WARNING:
        return '계속 이용할게요';
      case settingTypes.DATA:
        return '아니요';
      case settingTypes.LOGIN:
      case settingTypes.BLOCK:
      case settingTypes.VERSION:
        return '닫기';
      case settingTypes.ERROR:
        return '취소';
    }
  };

  return (
    <>
      <View style={styles.textContainer}>
        <SText fStyle="BxlSb" text={title!} />
        <View style={{alignItems: 'center'}}>
          <SText
            flexShrink={1}
            nLine={10}
            lineHeight={SWidth * 24}
            fStyle="BlgRg"
            textAlign="center"
            text={content!}
          />
          {content2 && <SText fStyle="BlgRg" text={content2} />}
        </View>
      </View>
      <View style={{width: '100%', gap: SWidth * 8}}>
        <SButton56
          flex={false}
          title={successText()!}
          textColor={textColor()!}
          ButtonColor={buttonColor()!}
          onPress={onPress}
        />
        <SButton56
          flex={false}
          title={closeText()!}
          textColor={colors.icon.secondary}
          ButtonColor={'#FAFAFA'}
          onPress={closeOnPress}
        />
      </View>
    </>
  );
};

export default SettingContent;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
