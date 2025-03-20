import React, {useState} from 'react';
import {Keyboard, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SButton from '../../components/Elements/SButton';
import SInput from '../../components/Elements/SInput';
import FindUser from '../../components/Login/FindUser';
import Logo from '../../components/Login/Logo';
import useCustomNavigation from '../../hooks/useCustomNavigation';
const LoginPage = () => {
  const navigation = useCustomNavigation();
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    id: '',
    password: '',
  });
  const [userData, setUserData] = useState({
    id: '',
    password: '',
  });

  const handleLogin = () => {
    if (userData.id === '') {
      setErrorMsg({
        ...errorMsg,
        id: '아이디가 일치하지 않습니다',
      });
      return;
    } else if (userData.password === '') {
      setErrorMsg({
        ...errorMsg,
        password: '영문/숫자/특수문자 조합 8~15자',
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
              maxLength={20}
              errorText={errorMsg.id}
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
            />
            <SInput
              title="비밀번호"
              maxLength={20}
              iconOn={true}
              iconOnPress={() => setPasswordOpen(!passwordOpen)}
              secureTextEntry={passwordOpen}
              errorText={errorMsg.password}
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
            />
          </View>
          <View style={styles.loginButtonContainer}>
            <SButton
              title="로그인"
              textColor={'#FFFFFF'}
              ButtonColor={'#155DFC'}
              onPress={handleLogin}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <FindUser onPress={() => navigation.navigate('find')} />
          <View style={styles.buttonContainer}>
            <SButton
              title="회원가입"
              textColor={'#404040'}
              ButtonColor={'#FAFAFA'}
              onPress={() => navigation.navigate('join')}
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
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topContainer: {
    marginTop: SWidth * 54,
    paddingHorizontal: SWidth * 8,
    width: '100%',
  },

  inputContainer: {
    marginTop: SWidth * 42,
    gap: SWidth * 32,
  },

  loginButtonContainer: {
    marginTop: SWidth * 32,
    width: '100%',
  },

  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    gap: SWidth * 24,
  },

  buttonContainer: {
    width: '100%',
    gap: SWidth * 8,
  },
});
