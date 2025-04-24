import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../globalStyle';
import {handleKakaoLogin} from '../../service/kakaoLogin';
import {handleNaverLogin} from '../../service/naverLogin';
import SButton56 from '../Elements/SButton56';

const SocialLogin = () => {
  const [test, setTest] = useState('');
  const handleKakaoLogin11 = async () => {
    try {
      const token: any = await handleKakaoLogin();
      console.log('Kakao login token:', token);
      setTest(token.accessToken);
    } catch (error) {
      console.log('Kakao login error:', error);
    }
  };

  return (
    <>
      <SButton56
        title="카카오"
        textColor={colors.text.primary}
        ButtonColor={'#FEE500'}
        onPress={handleKakaoLogin11}
      />
      <SButton56
        title="네이버"
        textColor={colors.text.interactive.inverse}
        ButtonColor={'#03C75A'}
        onPress={handleNaverLogin}
      />
    </>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({});
