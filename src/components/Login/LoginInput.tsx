import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SInput from '../Elements/SInput';

type LoginInputProps = {
  userData: {
    id: string;
    password: string;
  };
  idMsg: string;
  idOnChangeText: (text: string) => void;
  passwordIconOnPress: () => void;
  secureTextEntry: boolean;
  passwordMsg: string;
  passwordOnChangeText: (text: string) => void;
};

const LoginInput = ({
  userData,
  idMsg,
  idOnChangeText,
  passwordIconOnPress,
  secureTextEntry,
  passwordMsg,
  passwordOnChangeText,
}: LoginInputProps) => {
  return (
    <View style={styles.container}>
      <SInput
        title="아이디"
        titleColor={colors.text.tertiary}
        maxLength={20}
        msg={idMsg}
        msgType="error"
        value={userData.id}
        onChangeText={idOnChangeText}
        borderColor={
          userData.id
            ? colors.border.interactive.secondary
            : colors.border.secondary
        }
      />
      <SInput
        title="비밀번호"
        titleColor={colors.text.tertiary}
        maxLength={20}
        iconOn={true}
        iconOnPress={passwordIconOnPress}
        secureTextEntry={secureTextEntry}
        msg={passwordMsg}
        msgType="error"
        value={userData.password}
        onChangeText={passwordOnChangeText}
        borderColor={
          userData.password
            ? colors.border.interactive.secondary
            : colors.border.secondary
        }
      />
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 44,
    gap: SWidth * 24,
  },
});
