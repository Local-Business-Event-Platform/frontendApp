import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SText from '../../Elements/SText';

const UserUpdateTitle = () => {
  return (
    <View style={styles.container}>
      <SText fStyle="Hmd" text="비밀번호 재확인" />
      <SText
        flexShrink={1}
        nLine={2}
        lineHeight={SWidth * 24}
        fStyle="BlgRg"
        text="안전한 회원 정보 수정을 위해 비밀번호를 확인해주세요"
        color={colors.text.secondary}
      />
    </View>
  );
};

export default UserUpdateTitle;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 12,
  },
});
