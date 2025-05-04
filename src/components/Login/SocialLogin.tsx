import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {handleKakaoLogin} from '../../service/kakaoLogin';
import {handleNaverLogin} from '../../service/naverLogin';
import KakaoIcon from '../../utils/svgs/auth/KakaoIcon';
import NaverIcon from '../../utils/svgs/auth/NaverIcon';

const SocialLogin = () => {
  const handleKakaoLogin11 = async () => {
    try {
      const token: any = await handleKakaoLogin();
      console.log('Kakao login token:', token);
    } catch (error) {
      console.log('Kakao login error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleKakaoLogin11}>
        <KakaoIcon />
      </Pressable>
      <Pressable onPress={handleNaverLogin}>
        <NaverIcon />
      </Pressable>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SWidth * 20,
  },
});
