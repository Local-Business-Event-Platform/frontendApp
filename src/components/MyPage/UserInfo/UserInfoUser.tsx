import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {UserInfoProps} from '../../../utils/types/myPage';
import SInputSuccess from '../../Elements/SInputSuccess';
import SText from '../../Elements/SText';
import UserInfoContainer from './UserInfoContainer';

const UserInfoUser = ({userName, userPhone, onPress}: UserInfoProps) => {
  return (
    <UserInfoContainer title="회원 정보">
      <SInputSuccess
        title="이름"
        titleColor={colors.text.tertiary}
        content={userName}
        contentColor={colors.text.secondary}
      />
      <SInputSuccess
        title="휴대폰 번호"
        titleColor={colors.text.tertiary}
        content={userPhone}
        contentColor={colors.text.secondary}
      />
      <Pressable style={styles.buttonStyle} onPress={onPress}>
        <SText
          fStyle="BmdSb"
          text={'본인 인증으로 정보 수정하기'}
          color={colors.text.interactive.primary}
        />
      </Pressable>
    </UserInfoContainer>
  );
};

export default UserInfoUser;

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: SWidth * 40,
    borderWidth: 1.25,
    borderRadius: SWidth * 8,
    borderColor: colors.border.interactive.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
