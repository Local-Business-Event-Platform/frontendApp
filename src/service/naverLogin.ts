import NaverLogin from '@react-native-seoul/naver-login';

export const handleNaverLogin = async () => {
  try {
    const {failureResponse, successResponse, isSuccess} =
      await NaverLogin.login();
    if (isSuccess) {
      console.log('Naver login token:', successResponse?.accessToken);
    }
  } catch (error) {
    console.log('Naver login error:', error);
  }
};
