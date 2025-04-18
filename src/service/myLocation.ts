import Geolocation from '@react-native-community/geolocation';

type Location = {
  setMyLocation: (latitude: number, longitude: number) => void;
};

export const getLocation = async ({setMyLocation}: Location) => {
  try {
    Geolocation.getCurrentPosition(
      position => {
        console.log('위치 추적 중:', position);
        setMyLocation(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.log('에러:', error);
      },
      // {
      //   enableHighAccuracy: false, // true이면 GPS 안 잡힐 수 있음
      //   distanceFilter: 0, // 움직이지 않아도 추적되게
      //   interval: 3000, // 밀리초 단위
      //   fastestInterval: 2000, // 안드로이드 전용
      //   useSignificantChanges: false, // iOS용
      // },
    );
  } catch (error) {
    console.error('위치 정보 가져오기 중 오류 발생:', error);
  }
};
