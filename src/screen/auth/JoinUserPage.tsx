import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors, SWidth} from '../../../globalStyle';
import SButton56 from '../../components/Elements/SButton56';
import SInput from '../../components/Elements/SInput';
import SText from '../../components/Elements/SText';
import JoinTitle from '../../components/Join/JoinTitle';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {useUserData} from '../../store/userRoute';

const JoinUserPage = () => {
  const navigation = useCustomNavigation();
  const {userData, setUserData} = useUserData();
  const authNumber = '123123';
  const [authCheck, setAuthCheck] = useState<number>(0);
  const [authNumberCheck, setAuthNumberCheck] = useState('');
  const handleSendAuth = () => {
    if (authCheck === 1) {
      return '인증번호가 일치합니다';
    } else if (authCheck === 2) {
      return '인증번호가 불일치합니다';
    }
  };

  const handleSendAuthNumber = () => {
    if (authNumber === authNumberCheck) {
      setAuthCheck(1);
    } else if (authNumber !== authNumberCheck) {
      setAuthCheck(2);
    }
  };

  const handleNextPage = () => {
    if (
      userData.name === '' ||
      userData.phone === '' ||
      userData.zonecode === null ||
      userData.address === '' ||
      userData.detailAddress === '' ||
      authCheck !== 1
    ) {
      console.log('모든 정보를 입력해주세요.');
      return;
    } else {
      navigation.navigate('joinId');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      contentContainerStyle={{flex: 1}}
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
          <View style={styles.topContainer}>
            <JoinTitle
              title1="본인 확인을 위해"
              title2="인증을 진행해 주세요."
            />
            <View style={styles.inputContainer}>
              <SInput
                value={userData.name}
                title="이름"
                titleColor={colors.text.tertiary}
                onChangeText={value => setUserData({...userData, name: value})}
                placeholder="실명 입력"
                borderColor={
                  userData.name === ''
                    ? colors.border.secondary
                    : colors.border.interactive.secondary
                }
              />
              <View style={styles.gapContainer}>
                <SInput
                  value={userData.phone}
                  title="휴대폰번호"
                  titleColor={colors.text.tertiary}
                  keyboardType="numeric"
                  onChangeText={value =>
                    setUserData({...userData, phone: value})
                  }
                  placeholder="´-´없이 번호만 입력"
                  borderColor={
                    userData.phone === ''
                      ? colors.border.secondary
                      : colors.border.interactive.secondary
                  }
                  buttonTitle="인증번호 전송"
                  buttonOnPress={() => {}}
                />
                <SInput
                  value={authNumberCheck}
                  onChangeText={value => {
                    setAuthCheck(0);
                    setAuthNumberCheck(value);
                  }}
                  keyboardType="numeric"
                  buttonTitle="확인"
                  placeholder="인증번호 6자리 입력"
                  msg={handleSendAuth()}
                  msgType={
                    authCheck === 0
                      ? 'undefined'
                      : authCheck === 1
                      ? 'success'
                      : 'error'
                  }
                  borderColor={
                    authCheck === 0
                      ? colors.border.secondary
                      : authCheck === 1
                      ? colors.border.interactive.secondary
                      : colors.border.interactive.danger
                  }
                  buttonOnPress={handleSendAuthNumber}
                />
              </View>
              <View style={styles.gapContainer}>
                <SText fStyle="BmdMd" text={'주소'} />
                <SInput
                  value={userData.zonecode?.toString()!}
                  onChangeText={() => {}}
                  editable={false}
                  buttonTitle="우편번호 검색"
                  titleColor={colors.text.tertiary}
                  borderColor={
                    userData.zonecode
                      ? colors.border.interactive.secondary
                      : colors.border.secondary
                  }
                  buttonOnPress={() => navigation.navigate('address')}
                />
                <SInput
                  value={`${userData.address} ${userData.buildingName}`}
                  onChangeText={() => {}}
                  borderColor={
                    userData.address
                      ? colors.border.interactive.secondary
                      : colors.border.secondary
                  }
                  editable={false}
                />
                <SInput
                  value={userData.detailAddress}
                  borderColor={
                    userData.detailAddress
                      ? colors.border.interactive.secondary
                      : colors.border.secondary
                  }
                  onChangeText={value =>
                    setUserData({
                      ...userData,
                      detailAddress: value,
                    })
                  }
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <SButton56
              ButtonColor={colors.bg.brand}
              title="아이디, 비밀번호 입력하기"
              textColor={colors.white}
              onPress={handleNextPage}
            />
          </View>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default JoinUserPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 16,
    justifyContent: 'space-between',
  },

  topContainer: {
    paddingHorizontal: SWidth * 8,
    gap: SWidth * 48,
  },

  inputContainer: {
    gap: SWidth * 32,
  },

  gapContainer: {
    gap: SWidth * 8,
  },

  buttonContainer: {
    height: SWidth * 56,
  },
});
