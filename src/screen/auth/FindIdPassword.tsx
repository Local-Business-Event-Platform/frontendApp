import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SButton from '../../components/Elements/SButton';
import SInput from '../../components/Elements/SInput';
import useCustomNavigation from '../../hooks/useCustomNavigation';

const FindIdPassword = () => {
  const navigation = useCustomNavigation();
  const [userData, setUserData] = useState({
    phone: '',
    authNumber: '',
  });
  const number = '123123';
  const [phoneAuth, setPhoneAuth] = useState(false);
  const [authCheck, setAuthCheck] = useState<number>(0);

  const handlePhone = () => {
    if (userData.phone === '') {
      setPhoneAuth(false);
      setAuthCheck(0);
    } else {
      setPhoneAuth(true);
      setAuthCheck(1);
    }
  };

  const handleSendAuth = () => {
    if (authCheck === 1) {
      return '남은 시간 00:00';
    } else if (authCheck === 2) {
      return '인증번호가 일치합니다';
    } else if (authCheck === 3) {
      return '인증번호가 불일치합니다';
    }
  };

  const handleSendAuthNumber = () => {
    if (userData.authNumber === number) {
      setAuthCheck(2);
    } else if (userData.authNumber !== number) {
      setAuthCheck(3);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <SInput
            title="휴대폰 번호"
            titleColor={'#525252'}
            value={userData.phone}
            msg={phoneAuth ? '인증번호가 전송되었습니다.' : ''}
            onChangeText={text => setUserData({...userData, phone: text})}
            placeholder={'´-´없이 번호만 입력'}
            buttonTitle="인증번호 전송"
            buttonOnPress={handlePhone}
          />
          <SInput
            title="인증번호"
            titleColor={'#525252'}
            value={userData.authNumber}
            onChangeText={text => {
              setAuthCheck(0);
              setUserData({...userData, authNumber: text});
            }}
            borderColor={
              authCheck === 0 || authCheck === 1
                ? '#E5E5E5'
                : authCheck === 2
                ? '#525252'
                : '#E7000B'
            }
            placeholder={'인증번호 6자리 입력'}
            buttonTitle="확인"
            msg={handleSendAuth()}
            msgType={
              authCheck === 0 || authCheck === 1
                ? 'undefined'
                : authCheck === 2
                ? 'success'
                : 'error'
            }
            buttonOnPress={handleSendAuthNumber}
          />
        </View>
        <View>
          <SButton
            title="다음"
            ButtonColor={'#155DFC'}
            textColor={'white'}
            onPress={() => navigation.navigate('password')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FindIdPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 48,
    paddingHorizontal: SWidth * 24,
    paddingBottom: SWidth * 16,
    justifyContent: 'space-between',
  },

  topContainer: {
    gap: SWidth * 32,
  },
});
