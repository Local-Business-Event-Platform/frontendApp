import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {UserUpdateInputProps} from '../../../utils/types/myPage';
import SInput from '../../Elements/SInput';
import SInputSuccess from '../../Elements/SInputSuccess';

const UserUpdateInput = ({
  userId,
  value,
  onChangeText,
}: UserUpdateInputProps) => {
  const [iconClicked, setIconClicked] = useState(false);
  return (
    <View style={styles.container}>
      <SInputSuccess
        title="아이디"
        content={userId}
        contentColor={colors.secondary}
      />
      <SInput
        title="비밀번호 확인"
        titleColor={colors.tertiary}
        value={value}
        onChangeText={onChangeText}
        placeholder="비밀번호 재입력"
        iconOn
        secureTextEntry={iconClicked}
        iconOnPress={() => setIconClicked(!iconClicked)}
      />
    </View>
  );
};

export default UserUpdateInput;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 32,
  },

  idContainer: {
    gap: SWidth * 8,
  },
});
