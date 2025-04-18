import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import SButton56 from '../../SButton56';
import SText from '../../SText';

type LogoutModalProps = {
  type: string | undefined;
  title: string | undefined;
  content: string | undefined;
  content2: string | undefined;
  onPress: () => void;
  closeOnPress: () => void;
};

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
      case '로그아웃':
      case '데이터':
        return colors.bg.interactive.primary;
      case '탈퇴':
        return colors.bg.interactive.subtle;
    }
  };

  const successText = () => {
    switch (type) {
      case '로그아웃':
        return '로그아웃할게요';
      case '탈퇴':
        return '탈퇴할게요';
      case '데이터':
        return '삭제할게요';
      case 'login':
        return '로그인 하러가기';
    }
  };

  const textColor = () => {
    switch (type) {
      case '로그아웃':
      case '데이터':
      case 'login':
        return colors.text.interactive.inverse;
      case '탈퇴':
        return colors.text.danger;
    }
  };

  const closeText = () => {
    switch (type) {
      case '로그아웃':
      case '탈퇴':
        return '계속 이용할게요';
      case '데이터':
        return '아니요';
      case 'login':
        return '닫기';
    }
  };

  return (
    <>
      <View style={styles.textContainer}>
        <SText fStyle="BxlSb" text={title!} />
        <View style={{alignItems: 'center'}}>
          <SText fStyle="BlgRg" text={content!} />
          <SText fStyle="BlgRg" text={content2!} />
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
