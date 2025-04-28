import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {handleKakaoLogin} from '../../service/kakaoLogin';
import {handleNaverLogin} from '../../service/naverLogin';

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
        <FastImage
          source={require('../../assets/icons/kakao.png')}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.iconStyle}
        />
      </Pressable>
      <Pressable onPress={handleNaverLogin}>
        <FastImage
          source={require('../../assets/icons/naver.png')}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.iconStyle}
        />
      </Pressable>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SWidth * 12,
  },

  iconStyle: {
    width: 60,
    height: 60,
  },
});
