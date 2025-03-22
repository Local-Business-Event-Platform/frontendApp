import Geolocation from '@react-native-community/geolocation';
import {getDistance} from 'geolib';
import React, {useEffect, useState} from 'react';
import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {SWidth} from '../../globalStyle';
import SInput from '../components/Elements/SInput';
import SText from '../components/Elements/SText';
import MapMarker from '../utils/svgs/mapPage/MapMarker';

const MapPage = () => {
  const [myLocation, setMyLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [mapRef, setMapRef] = useState<MapView | null>(null);
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

  useEffect(() => {
    if (mapRef) {
      mapRef.animateToRegion({
        latitude: myLocation.latitude,
        longitude: myLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [myLocation]);
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
      <MapView
        ref={ref => setMapRef(ref)}
        provider={PROVIDER_GOOGLE}
        style={styles.mapSize}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: Number(myLocation.latitude),
          longitude: Number(myLocation.longitude),
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}>
        <Marker
          title={'내위치'}
          coordinate={{
            latitude: Number(myLocation.latitude),
            longitude: Number(myLocation.longitude),
          }}>
          <View
            style={{
              alignItems: 'center',
              gap: SWidth * 4,
            }}>
            <MapMarker />
            <SText fStyle="BsmMd" text={'마커'} />
          </View>
        </Marker>
        {nearbyBuildings.map((building, index) => (
          <Marker
            key={index}
            title={building.name}
            coordinate={{
              latitude: building.latitude,
              longitude: building.longitude,
            }}>
            <View style={{alignItems: 'center', gap: SWidth * 4}}>
              <MapMarker />
              <SText fStyle="BsmMd" text={building.name} />
            </View>
          </Marker>
        ))}
      </MapView>
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
