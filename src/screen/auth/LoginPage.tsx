import NaverLogin from '@react-native-seoul/naver-login';
import React, {useEffect, useState} from 'react';
import {Keyboard, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SButton56 from '../../components/Elements/SButton56';
import FindUser from '../../components/Login/FindUser';
import LoginInput from '../../components/Login/LoginInput';
import Logo from '../../components/Login/Logo';
import SocialLogin from '../../components/Login/SocialLogin';
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

  useEffect(() => {
    NaverLogin.initialize({
      appName: 'mapTest',
      consumerKey: '9vn6LKEwhPxUG61MEWpQ',
      consumerSecret: '2QVRdGc5dj',
      serviceUrlSchemeIOS: '',
      disableNaverAppAuthIOS: false,
    });
  }, []);

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.topContainer}>
          <Logo />
          <LoginInput
            userData={userData}
            idMsg={errorMsg.id}
            idOnChangeText={text => {
              setUserData({
                ...userData,
                id: text,
              });
              setErrorMsg({
                ...errorMsg,
                id: '',
              });
            }}
            passwordIconOnPress={() => setPasswordOpen(!passwordOpen)}
            passwordMsg={errorMsg.password}
            secureTextEntry={passwordOpen}
            passwordOnChangeText={text => {
              setUserData({
                ...userData,
                password: text,
              });
              setErrorMsg({
                ...errorMsg,
                password: '',
              });
            }}
          />

          <View style={styles.loginButtonContainer}>
            <SButton56
              title="로그인"
              textColor={colors.text.interactive.inverse}
              ButtonColor={colors.bg.interactive.primary}
              onPress={handleLogin}
            />
            <SocialLogin />
          </View>
        </View>
        {/* <SText fStyle="BlgMd" text={test} /> */}
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
    gap: SWidth * 8,
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
