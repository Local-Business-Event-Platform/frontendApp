import Geolocation from '@react-native-community/geolocation';
import {getDistance} from 'geolib';
import React, {useEffect, useState} from 'react';
import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../globalStyle';
import SInput from '../components/Elements/SInput';
import Map from '../components/Map/Map';

const MapPage = () => {
  const [myLocation, setMyLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [search, setSearch] = useState('');
  const buildings = [
    {name: '나주식당', latitude: 37.5564503, longitude: 126.9371086},
    {name: '소담식당', latitude: 37.5574369, longitude: 126.9380307},
    {name: '맥도날드', latitude: 37.5585312, longitude: 126.9366973},
    {name: '피슈마라홍탕신촌점', latitude: 37.5563246, longitude: 126.9342936},
    {name: '형제식당', latitude: 37.5554663, longitude: 126.9348035},
  ];

  const nearbyBuildings = buildings.filter(building => {
    const distance = getDistance(
      {latitude: myLocation.latitude, longitude: myLocation.longitude},
      {latitude: building.latitude, longitude: building.longitude},
    );
    return distance <= 300; // 1km = 1000m
  });

  const getLocation = async () => {
    try {
      Geolocation.getCurrentPosition(
        position => {
          console.log('위치 추적 중:', position);
          setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
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

  useEffect(() => {
    getLocation();
  }, []);

  console.log('nearbyBuildings', myLocation);
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <SInput
            value={search}
            onChangeText={text => setSearch(text)}
            borderColor={colors.tertiary}
            searchOn={true}
            iconOnPress={() => {
              console.log('검색 아이콘 클릭됨');
            }}
          />
        </View>
      </View>
      <Map
        myLatitude={myLocation.latitude}
        myLongitude={myLocation.longitude}
        myRadius={200} // 200m 반경
        cameraZoom={14}
        nearbyBuildings={nearbyBuildings}
      />
    </Pressable>
  );
};

export default MapPage;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },

  searchBarContainer: {
    position: 'absolute',
    width: '100%',
    height: SWidth * 48,
    top: SWidth * 74,
    left: 0,
    zIndex: 2,
  },

  searchBar: {
    marginHorizontal: SWidth * 16,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
  },
});
