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
  const [userData, setUserData] = useState({
    id: '',
    password: '',
  });
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.topContainer}>
          <Logo />
          <View style={styles.inputContainer}>
            <SInput
              title="아이디"
              value={userData.id}
              onChangeText={() =>
                setUserData({
                  ...userData,
                  id: userData.id,
                })
              }
            />
            <SInput
              title="비밀번호"
              value={userData.password}
              onChangeText={() =>
                setUserData({
                  ...userData,
                  password: userData.password,
                })
              }
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <FindUser onPress={() => {}} />
          <View style={styles.buttonContainer}>
            <SButton
              title="로그인"
              textColor={'#FFFFFF'}
              ButtonColor={'#155DFC'}
              onPress={() => {}}
            />
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
    paddingBottom: SWidth * 32,
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
