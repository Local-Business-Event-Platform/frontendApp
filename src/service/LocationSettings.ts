import {PermissionsAndroid, Platform} from 'react-native';

export const locationSettings = async () => {
  if (Platform.OS === 'android') {
    try {
      // 현재 위치 권한 상태 확인
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (hasPermission) {
        console.log('이미 위치 권한이 허용되어 있습니다.');
        return true;
      }

      // 권한 요청
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: '위치 권한 필요',
          message: '이 앱은 위치 정보를 사용해야 합니다.',
          buttonNeutral: '나중에',
          buttonNegative: '거부',
          buttonPositive: '허용',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true; // iOS의 경우 항상 true 반환
};
