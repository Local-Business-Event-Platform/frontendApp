import FastImage from '@d11/react-native-fast-image';
import {
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';
import Geolocation from '@react-native-community/geolocation';
import {getDistance} from 'geolib';
import React, {useEffect, useState} from 'react';
import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../globalStyle';
import SInput from '../components/Elements/SInput';

const MapPage = () => {
  const [myLocation, setMyLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

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
    return distance <= 20000; // 1km = 1000m
  });

  useEffect(() => {
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
          {
            enableHighAccuracy: true,
            distanceFilter: 10,
            interval: 5000,
          },
        );
      } catch (error) {
        console.error('위치 정보 가져오기 중 오류 발생:', error);
      }
    };
    getLocation();
  }, []);

  console.log('nearbyBuildings', myLocation);
  return (
    <Pressable style={styles.mapContainer} onPress={Keyboard.dismiss}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <SInput
            value=""
            onChangeText={() => {}}
            borderColor={'#525252'}
            searchOn={true}
          />
        </View>
      </View>
      <NaverMapView
        isUseTextureViewAndroid={true}
        style={styles.mapSize}
        isShowScaleBar={false}
        isTiltGesturesEnabled={false}
        isShowCompass={false}
        isShowLocationButton={false}
        isShowZoomControls={false}
        camera={{
          latitude: myLocation.latitude,
          longitude: myLocation.longitude,
          zoom: 14,
        }}>
        <NaverMapMarkerOverlay
          caption={{text: '내 위치'}}
          isHideCollidedMarkers={true}
          width={SWidth * 24}
          height={SWidth * 24}
          latitude={myLocation.latitude}
          longitude={myLocation.longitude}>
          <FastImage
            source={require('../assets/images/marker.png')}
            style={{width: SWidth * 24, height: SWidth * 24}}
          />
        </NaverMapMarkerOverlay>
        {nearbyBuildings.map((building, index) => (
          <NaverMapMarkerOverlay
            key={index}
            caption={{text: building.name}}
            isHideCollidedMarkers={true}
            width={SWidth * 24}
            height={SWidth * 24}
            latitude={building.latitude}
            longitude={building.longitude}>
            <FastImage
              source={require('../assets/images/marker.png')}
              style={{width: SWidth * 24, height: SWidth * 24}}
            />
          </NaverMapMarkerOverlay>
        ))}
      </NaverMapView>
    </Pressable>
  );
};

export default MapPage;

const styles = StyleSheet.create({
  mapContainer: {
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
    borderRadius: SWidth * 8,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  },

  mapSize: {
    width: '100%',
    height: '100%',
  },
});
