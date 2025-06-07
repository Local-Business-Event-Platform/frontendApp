import NaverLogin from '@react-native-seoul/naver-login';
import React, {useEffect, useState} from 'react';
import {Keyboard, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import Config from 'react-native-config';
import {colors, SWidth} from '../../../globalStyle';
import SButton56 from '../../components/Elements/SButton56';
import STabBar from '../../components/Elements/STabBar';
import FindUser from '../../components/Login/FindUser';
import LoginInput from '../../components/Login/LoginInput';
import Logo from '../../components/Login/Logo';
import SocialLogin from '../../components/Login/SocialLogin';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {useModalOpen} from '../../store/modalRoute';
import {useUserData} from '../../store/userRoute';
import {
  loginTabItems,
  modalNames,
  screenNames,
  singleModalTypes,
} from '../../utils/listData';

const LoginPage = () => {
  const navigation = useCustomNavigation();
  const [passwordOpen, setPasswordOpen] = useState(true);
  const [loginTab, setLoginTab] = useState(1);
  const {setModalTitle, setModalOpen, setContent, setUserID, setIdType} =
    useModalOpen();
  const {userData, setUserData} = useUserData();
  const [errorMsg, setErrorMsg] = useState({
    id: '',
    password: '',
  });
  const [user, setData] = useState({
    id: '',
    password: '',
  });

  const maskEmail = (email: string) => {
    const [local, domain] = email.split('@');
    if (local.length <= 2) {
      return '*'.repeat(local.length) + '@' + domain;
    }
    const firstChar = local[0];
    const lastChar = local[local.length - 1];
    const maskedMiddle = '*'.repeat(local.length - 2);

    return `${firstChar}${maskedMiddle}${lastChar}@${domain}`;
  };

  const handleLogin = () => {
    setModalTitle(modalNames.SINGLE);
    setContent(singleModalTypes.PASSWORD);
    setModalOpen(true);
    // if (!userData.id || !userData.password) {
    //   setErrorMsg({
    //     id: userData.id ? '' : '아이디가 일치하지 않습니다.',
    //     password: userData.password ? '' : '영문/숫자/특수문자 조합 8~15자리',
    //   });
    //   return;
    // }
  };

  useEffect(() => {
    NaverLogin.initialize({
      appName: 'mapTest',
      consumerKey: Config.NAVER_CLIENT_ID!,
      consumerSecret: Config.NAVER_SECRET_KEY!,
      serviceUrlSchemeIOS: '',
      disableNaverAppAuthIOS: false,
    });
  }, []);

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <STabBar
        menuList={loginTabItems}
        tabIndex={loginTab}
        setTabIndex={setLoginTab}
      />
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.topContainer}>
          <Logo />
          <LoginInput
            userData={user}
            idMsg={errorMsg.id}
            idOnChangeText={text => {
              setData({
                ...user,
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
              setData({
                ...user,
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
          </View>
          <SocialLogin />
        </View>
        {/* <SText fStyle="BlgMd" text={test} /> */}
        <View style={styles.bottomContainer}>
          <FindUser onPress={() => navigation.navigate(screenNames.FIND)} />
          <View style={styles.buttonContainer}>
            <SButton56
              title="회원가입"
              textColor={colors.icon.secondary}
              ButtonColor={colors.bg.interactive.secondary}
              onPress={() => {
                setUserData({
                  ...userData,
                  type: loginTab,
                });
                navigation.navigate(screenNames.JOIN);
              }}
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
