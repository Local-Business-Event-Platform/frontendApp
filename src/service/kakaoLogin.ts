import * as Kakao from '@react-native-seoul/kakao-login';

export const handleKakaoLogin = async () => {
  try {
    const token = await Kakao.login();
    console.log('Kakao login token:', token);
    return token;
  } catch (error) {
    console.log('Kakao login error:', error);
  }
};

export const handleLogout = async () => {
  try {
    const logout = await Kakao.logout();
    console.log(logout);
  } catch (error) {
    console.error(error);
  }
};
