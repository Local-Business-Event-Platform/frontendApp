import React, {useEffect, useState} from 'react';
import {Keyboard, ScrollView, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SButton56 from '../../components/Elements/SButton56';
import SInput from '../../components/Elements/SInput';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {screenNames} from '../../utils/listData';

const FindIdPassword = () => {
  const navigation = useCustomNavigation();
  const [userData, setUserData] = useState({
    phone: '',
    authNumber: '',
  });
  const number = '123123';
  const [phoneAuth, setPhoneAuth] = useState(false);
  const [authCheck, setAuthCheck] = useState<number>(0);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [buttonOn, setButtonOn] = useState(true);
  const handlePhone = () => {
    if (userData.phone === '') {
      setPhoneAuth(false);
      setAuthCheck(0);
    } else {
      setPhoneAuth(true);
      setButtonOn(false);
      setAuthCheck(1);
      countDown();
    }
  };

  const countDown = () => {
    setTime(10); // 6분은 360초
    const id = setInterval(() => {
      setTime(prev => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(id);
          setPhoneAuth(false);
          setButtonOn(true);
          setAuthCheck(0);
          Keyboard.dismiss();
          return 0;
        }
      });
    }, 1000);
    setIntervalId(id);
  };

  const formatTime = (seconds: number) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleSendAuth = () => {
    if (authCheck === 1) {
      return `남은시간 ${formatTime(time)}`;
    } else if (authCheck === 2) {
      return '인증번호가 일치합니다';
    } else if (authCheck === 3) {
      return '인증번호가 불일치합니다';
    }
  };

  const handleSendAuthNumber = () => {
    if (userData.authNumber === number) {
      setAuthCheck(2);
      if (intervalId) {
        clearInterval(intervalId); // 타이머 멈추기
      }
    } else if (userData.authNumber !== number) {
      setAuthCheck(3);
      setTimeout(() => {
        setAuthCheck(1);
      }, 1500);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <SInput
            title="휴대폰 번호"
            titleColor={colors.text.tertiary}
            value={userData.phone}
            keyboardType="numeric"
            msg={phoneAuth ? '인증번호가 전송되었습니다.' : ''}
            onChangeText={text => setUserData({...userData, phone: text})}
            placeholder={'´-´없이 번호만 입력'}
            borderColor={
              userData.phone
                ? colors.border.interactive.secondary
                : colors.border.secondary
            }
            buttonTitle={phoneAuth ? '재전송 (3:00)' : '인증번호 전송'}
            buttonBackgroundColor={
              phoneAuth
                ? colors.bg.interactive.secondaryHovered
                : colors.bg.interactive.secondary
            }
            buttonOnPress={handlePhone}
          />
          <SInput
            title="인증번호"
            titleColor={colors.text.tertiary}
            value={userData.authNumber}
            onChangeText={text => {
              setAuthCheck(0);
              setUserData({...userData, authNumber: text});
            }}
            borderColor={
              authCheck === 0 || authCheck === 1
                ? colors.border.secondary
                : authCheck === 2
                ? colors.border.interactive.secondary
                : colors.border.interactive.danger
            }
            placeholder={'인증번호 6자리 입력'}
            buttonTitle="확인"
            buttonDisabled={buttonOn}
            msg={handleSendAuth()}
            msgType={
              authCheck === 0 || authCheck === 1
                ? 'undefined'
                : authCheck === 2
                ? 'success'
                : 'error'
            }
            buttonBackgroundColor={
              authCheck !== 0
                ? colors.bg.interactive.secondaryHovered
                : colors.bg.interactive.secondary
            }
            buttonOnPress={handleSendAuthNumber}
          />
        </View>
        <View>
          <SButton56
            title="다음"
            ButtonColor={colors.interactive.primary}
            disabled={authCheck === 2 ? false : true}
            textColor={'white'}
            onPress={() => navigation.navigate(screenNames.PASSWORD)}
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
