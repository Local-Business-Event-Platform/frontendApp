import React, {useState} from 'react';
import {Keyboard, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SButton56 from '../../components/Elements/SButton56';
import SInput from '../../components/Elements/SInput';
import FindUser from '../../components/Login/FindUser';
import Logo from '../../components/Login/Logo';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {screenNames} from '../../utils/listData';
const LoginPage = () => {
  const navigation = useCustomNavigation();
  const [passwordOpen, setPasswordOpen] = useState(true);
  const [errorMsg, setErrorMsg] = useState({
    id: '',
    password: '',
  });
  const [userData, setUserData] = useState({
    id: '',
    password: '',
  });

  const handleLogin = () => {
    if (!userData.id || !userData.password) {
      setErrorMsg({
        id: userData.id ? '' : '아이디가 일치하지 않습니다.',
        password: userData.password ? '' : '영문/숫자/특수문자 조합 8~15자리',
      });
      return;
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.topContainer}>
          <Logo />
          <View style={styles.inputContainer}>
            <SInput
              title="아이디"
              titleColor={colors.text.tertiary}
              maxLength={20}
              msg={errorMsg.id}
              msgType="error"
              value={userData.id}
              onChangeText={text => {
                setUserData({
                  ...userData,
                  id: text,
                });
                setErrorMsg({
                  ...errorMsg,
                  id: '',
                });
              }}
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
              iconOnPress={() => setPasswordOpen(!passwordOpen)}
              secureTextEntry={passwordOpen}
              msg={errorMsg.password}
              msgType="error"
              value={userData.password}
              onChangeText={text => {
                setUserData({
                  ...userData,
                  password: text,
                });
                setErrorMsg({
                  ...errorMsg,
                  password: '',
                });
              }}
              borderColor={
                userData.password
                  ? colors.border.interactive.secondary
                  : colors.border.secondary
              }
            />
          </View>
          <View style={styles.loginButtonContainer}>
            <SButton56
              title="로그인"
              textColor={colors.text.interactive.inverse}
              ButtonColor={colors.bg.interactive.primary}
              onPress={handleLogin}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <FindUser onPress={() => navigation.navigate(screenNames.FIND)} />
          <View style={styles.buttonContainer}>
            <SButton56
              title="회원가입"
              textColor={colors.icon.secondary}
              ButtonColor={colors.bg.interactive.secondary}
              onPress={() => navigation.navigate(screenNames.JOIN)}
            />
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: SWidth * 32,
    paddingHorizontal: SWidth * 24,
    paddingBottom: SWidth * 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topContainer: {
    width: '100%',
  },

  inputContainer: {
    marginTop: SWidth * 44,
    gap: SWidth * 24,
  },

  loginButtonContainer: {
    marginTop: SWidth * 32,
    width: '100%',
  },

  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: SWidth * 8,
    gap: SWidth * 12,
  },

  buttonContainer: {
    width: '100%',
    gap: SWidth * 8,
  },
});
