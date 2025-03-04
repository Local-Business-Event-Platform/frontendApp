import Geolocation from '@react-native-community/geolocation';
import {getDistance} from 'geolib';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const MainPage = () => {
  const [myLocation, setMyLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [mapRef, setMapRef] = useState<MapView | null>(null);
  const buildings = [
    {name: '음식점1', latitude: 37.5675, longitude: 126.9785},
    {name: '음식점2', latitude: 37.568, longitude: 126.979},
  ];

  const nearbyBuildings = buildings.filter(building => {
    const distance = getDistance(
      {latitude: myLocation.latitude, longitude: myLocation.longitude},
      {latitude: building.latitude, longitude: building.longitude},
    );
    return distance <= 10000; // 1km = 1000m
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
    <View style={styles.mapContainer}>
      <MapView
        ref={ref => setMapRef(ref)}
        style={styles.mapSize}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: Number(myLocation.latitude),
          longitude: Number(myLocation.longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          title={'마커'}
          coordinate={{
            latitude: Number(myLocation.latitude),
            longitude: Number(myLocation.longitude),
          }}>
          <View>
            <Image
              source={require('../assets/images/markerIcon.png')}
              style={{width: 50, height: 50}}
            />
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
            <View>
              <Image
                source={require('../assets/images/markerIcon.png')}
                style={{width: 50, height: 50}}
              />
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  mapContainer: {
    marginBottom: 88,
  },

  mapSize: {
    height: 350,
  },
});
