import React, {useState} from 'react';
import {Keyboard, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SButton56 from '../../components/Elements/SButton56';
import SInput from '../../components/Elements/SInput';
import JoinTitle from '../../components/Join/JoinTitle';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {useUserData} from '../../store/userRoute';
import {screenNames} from '../../utils/listData';

const JoinIdPage = () => {
  const navigation = useCustomNavigation();
  const {userData, setUserData} = useUserData();
  const [passwordChecked, setPasswordChecked] = useState('');
  const [iconClicked, setIconClicked] = useState([true, true]);
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;
  const handleSubmit = async () => {
    navigation.navigate(screenNames.SUCCESS);
  };

  const passwordMagCheck = () => {
    if (userData.password === '') {
      return 'undefined';
    } else if (passwordRegex.test(userData.password)) {
      return 'success';
    } else {
      return 'error';
    }
  };

  const passwordCheckMsg = () => {
    if (passwordChecked === '') {
      return 'undefined';
    } else if (userData.password === passwordChecked) {
      return 'success';
    } else {
      return 'error';
    }
  };

  const handlePassword = () => {
    if (passwordRegex.test(userData.password)) {
      return '';
    } else if (
      userData.password !== '' &&
      !passwordRegex.test(userData.password)
    ) {
      return '영문/숫자/특수문자 조합 8~15자';
    }
  };

  const handlePasswordCheck = () => {
    if (passwordChecked !== '' && passwordChecked === userData.password) {
      return '비밀번호가 일치합니다';
    } else if (
      passwordChecked !== '' &&
      passwordChecked !== userData.password
    ) {
      return '비밀번호가 일치하지 않습니다';
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Pressable onPress={Keyboard.dismiss} style={styles.container}>
        <View style={styles.topContainer}>
          <JoinTitle title1="아이디와 비밀번호를" title2="입력해 주세요." />
          <View style={styles.inputContainer}>
            <SInput
              value={userData.nickname}
              title="닉네임"
              titleColor={colors.text.primary}
              onChangeText={value =>
                setUserData({...userData, nickname: value})
              }
              placeholder="닉네임 4~12자"
              buttonTitle="중복 확인"
              borderColor={
                !userData.nickname
                  ? colors.border.secondary
                  : colors.border.interactive.secondary
              }
              buttonOnPress={() => {}}
            />
            <SInput
              value={userData.id}
              title="아이디"
              titleColor={colors.text.primary}
              onChangeText={value => setUserData({...userData, id: value})}
              placeholder="영문/숫자 조합 4~12자"
              buttonTitle="중복 확인"
              borderColor={
                !userData.id
                  ? colors.border.secondary
                  : colors.border.interactive.secondary
              }
              buttonOnPress={() => {}}
            />
            <SInput
              iconOn
              secureTextEntry={iconClicked[0]}
              iconOnPress={() => setIconClicked(prev => [!prev[0], prev[1]])}
              value={userData.password}
              title="비밀번호"
              titleColor={colors.text.primary}
              onChangeText={value =>
                setUserData({...userData, password: value})
              }
              placeholder="영문/숫자/특수문자 모두 조합 8~15자"
              msg={handlePassword()}
              msgType={passwordMagCheck()}
              borderColor={
                passwordMagCheck() === 'undefined'
                  ? colors.border.secondary
                  : passwordMagCheck() === 'error'
                  ? colors.border.interactive.danger
                  : colors.border.interactive.secondary
              }
            />
            <SInput
              iconOn
              secureTextEntry={iconClicked[1]}
              iconOnPress={() => setIconClicked(prev => [prev[0], !prev[1]])}
              value={passwordChecked}
              title="비밀번호 확인"
              titleColor={colors.text.primary}
              onChangeText={value => setPasswordChecked(value)}
              placeholder="비밀번호 재입력"
              msg={handlePasswordCheck()}
              msgType={passwordCheckMsg()}
              borderColor={
                passwordCheckMsg() === 'undefined'
                  ? colors.border.secondary
                  : passwordCheckMsg() === 'error'
                  ? colors.border.interactive.danger
                  : colors.border.interactive.secondary
              }
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <SButton56
            ButtonColor={colors.bg.brand}
            title="완료"
            textColor={colors.white}
            onPress={handleSubmit}
          />
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default JoinIdPage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 16,
    justifyContent: 'space-between',
  },

  topContainer: {
    paddingHorizontal: SWidth * 8,
    gap: SWidth * 56,
  },

  inputContainer: {
    gap: SWidth * 32,
  },

  buttonContainer: {
    height: SWidth * 56,
  },
});
