import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SButton56 from '../../components/Elements/SButton56';
import SInput from '../../components/Elements/SInput';
import SText from '../../components/Elements/SText';
import {useModalOpen} from '../../store/modalRoute';

const NewPasswordPage = () => {
  const {setModalTitle, setModalOpen} = useModalOpen();
  const [userPassword, setUserPassword] = useState({
    password: '',
    passwordCheck: '',
  });
  const [passwordOpen, setPasswordOpen] = useState({
    password: true,
    passwordCheck: true,
  });
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;

  const [passwordCheck, setPasswordCheck] = useState(false);

  const passwordMagCheck = () => {
    if (userPassword.password === '') {
      return 'undefined';
    } else if (passwordRegex.test(userPassword.password)) {
      return 'success';
    } else {
      return 'error';
    }
  };

  const passwordCheckMsg = () => {
    if (userPassword.passwordCheck === '') {
      return 'undefined';
    } else if (userPassword.passwordCheck === userPassword.password) {
      return 'success';
    } else {
      return 'error';
    }
  };

  const handlePassword = () => {
    if (passwordRegex.test(userPassword.password)) {
      return '';
    } else if (
      userPassword.password !== '' &&
      !passwordRegex.test(userPassword.password)
    ) {
      return '영문/숫자/특수문자 조합 8~15자';
    }
  };

  const handlePasswordCheck = () => {
    if (
      userPassword.password !== '' &&
      userPassword.passwordCheck === userPassword.password
    ) {
      return '비밀번호가 일치합니다';
    } else if (
      userPassword.passwordCheck !== '' &&
      userPassword.passwordCheck !== userPassword.password
    ) {
      return '비밀번호가 일치하지 않습니다';
    }
  };

  const handleSubmit = () => {
    console.log('비밀번호 변경');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.idContainer}>
            <SText
              fStyle="BmdMd"
              text={'아이디'}
              color={colors.text.tertiary}
            />
            <SText
              fStyle="BxlSb"
              text={'232rref1'}
              color={colors.text.secondary}
            />
          </View>
          <SInput
            title="새 비밀번호"
            titleColor={colors.tertiary}
            value={userPassword.password}
            onChangeText={text =>
              setUserPassword({...userPassword, password: text})
            }
            iconOn={true}
            iconOnPress={() =>
              setPasswordOpen({
                ...passwordOpen,
                password: !passwordOpen.password,
              })
            }
            secureTextEntry={passwordOpen.password}
            placeholder={'영문/숫자/특수문자 모두 조합 8~15자'}
            msg={handlePassword()}
            msgType={passwordMagCheck()}
            borderColor={
              passwordMagCheck() === 'undefined'
                ? colors.interactive.secondary
                : passwordMagCheck() === 'error'
                ? colors.text.danger
                : colors.tertiary
            }
          />
          <SInput
            title="새 비밀번호 확인"
            titleColor={colors.tertiary}
            value={userPassword.passwordCheck}
            onChangeText={text => {
              setUserPassword({...userPassword, passwordCheck: text});
            }}
            iconOn={true}
            iconOnPress={() =>
              setPasswordOpen({
                ...passwordOpen,
                passwordCheck: !passwordOpen.passwordCheck,
              })
            }
            secureTextEntry={passwordOpen.passwordCheck}
            placeholder={'비밀번호 재입력'}
            msg={handlePasswordCheck()}
            msgType={passwordCheckMsg()}
            borderColor={
              passwordCheckMsg() === 'undefined'
                ? colors.interactive.secondary
                : passwordCheckMsg() === 'error'
                ? colors.text.danger
                : colors.tertiary
            }
          />
        </View>
        <View>
          <SButton56
            title="비밀번호 변경"
            ButtonColor={
              userPassword.password === userPassword.passwordCheck
                ? colors.interactive.primary
                : '#FAFAFA'
            }
            textColor={
              userPassword.password === userPassword.passwordCheck
                ? 'white'
                : colors.secondary
            }
            disabled={
              userPassword.password === userPassword.passwordCheck
                ? false
                : true
            }
            onPress={handleSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default NewPasswordPage;

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

  idContainer: {
    gap: SWidth * 8,
  },
});
