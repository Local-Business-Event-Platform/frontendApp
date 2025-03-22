import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SButton from '../../components/Elements/SButton';
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

  const [msgType, setMsgType] = useState({
    password: 0,
    passwordCheck: 0,
  });
  const [passwordCheck, setPasswordCheck] = useState(false);
  const handleMsg = (type: string) => {
    if (type === 'password') {
      switch (msgType.password) {
        case 0:
          return '';
        case 1:
          return '영문/숫자/특수문자 조합 8~15자';
      }
    } else if (type === 'passwordCheck') {
      switch (msgType.passwordCheck) {
        case 0:
          return '';
        case 1:
          return '비밀번호를 일치하지 않습니다';
        case 2:
          return '비밀번호가 일치합니다';
      }
    }
  };

  const handleSubmit = () => {
    if (userPassword.password === '') {
      setMsgType(prev => ({...prev, password: 1}));
    } else {
      setMsgType(prev => ({...prev, password: 0}));

      setModalTitle('password');
      setModalOpen(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.idContainer}>
            <SText fStyle="BmdMd" text={'아이디'} color={'#525252'} />
            <SText fStyle="BxlSb" text={'232rref1'} color={'#404040'} />
          </View>
          <SInput
            title="새 비밀번호"
            titleColor={'#525252'}
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
            msg={handleMsg('password')}
            msgType={
              msgType.password === 0
                ? 'undefined'
                : msgType.password === 1
                ? 'error'
                : 'success'
            }
            borderColor={
              msgType.password === 0
                ? '#E5E5E5'
                : msgType.password === 1
                ? '#E7000B'
                : '#525252'
            }
          />
          <SInput
            title="새 비밀번호 확인"
            titleColor={'#525252'}
            value={userPassword.passwordCheck}
            onChangeText={text => {
              setUserPassword({...userPassword, passwordCheck: text});
              // if (text === '') {
              //   setMsgType(prev => ({...prev, passwordCheck: 0}));
              //   setPasswordCheck(false);
              // } else if (text === userPassword.password) {
              //   setMsgType(prev => ({...prev, passwordCheck: 2}));
              //   setPasswordCheck(true);
              // } else {
              //   setMsgType(prev => ({...prev, passwordCheck: 1}));
              //   setPasswordCheck(false);
              // }
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
            msg={handleMsg('passwordCheck')}
            msgType={
              msgType.passwordCheck === 0
                ? 'undefined'
                : msgType.passwordCheck === 1
                ? 'error'
                : 'success'
            }
            borderColor={
              msgType.passwordCheck === 0
                ? '#E5E5E5'
                : msgType.passwordCheck === 1
                ? '#E7000B'
                : '#525252'
            }
          />
        </View>
        <View>
          <SButton
            title="비밀번호 변경"
            ButtonColor={passwordCheck ? '#155DFC' : '#FAFAFA'}
            textColor={passwordCheck ? 'white' : '#404040'}
            disabled={passwordCheck}
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
