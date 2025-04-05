import {
  NaverMapCircleOverlay,
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';
import React from 'react';
import {StyleSheet} from 'react-native';

import {SWidth} from '../../../globalStyle';

type MapProps = {
  cameraZoom: number;
  myLatitude: number;
  myLongitude: number;
  myRadius: number;
  nearbyBuildings: {name: string; latitude: number; longitude: number}[];
};

const Map = ({
  cameraZoom,
  myLatitude,
  myLongitude,
  myRadius,

  nearbyBuildings,
}: MapProps) => {
  return (
    <NaverMapView
      isUseTextureViewAndroid={true}
      style={styles.mapSize}
      isShowScaleBar={false}
      isTiltGesturesEnabled={false}
      isShowCompass={false}
      isShowLocationButton={false}
      isShowZoomControls={false}
      camera={{
        latitude: myLatitude,
        longitude: myLongitude,
        zoom: cameraZoom,
      }}>
      <NaverMapCircleOverlay
        latitude={myLatitude}
        longitude={myLongitude}
        radius={myRadius}
        color={'#F1425C33'}
      />
      <NaverMapMarkerOverlay
        caption={{text: '내 위치', color: '#171717', textSize: SWidth * 12}}
        isHideCollidedMarkers={true}
        width={SWidth * 20}
        height={SWidth * 20}
        image={require('../../assets/images/MapMyIcon.png')}
        latitude={myLatitude}
        longitude={myLongitude}
        anchor={{x: 0.5, y: 0.5}}
        isIconPerspectiveEnabled={true}
      />

      {nearbyBuildings.map((building, index) => (
        <NaverMapMarkerOverlay
          key={index}
          caption={{
            text: building.name,
            color: '#171717',
            textSize: SWidth * 12,
          }}
          isHideCollidedMarkers={true}
          width={SWidth * 24}
          height={SWidth * 24}
          image={require('../../assets/images/marker.png')}
          latitude={building.latitude}
          longitude={building.longitude}
          onTap={() => {
            console.log('건물 클릭됨', building.name);
          }}
        />
      ))}
    </NaverMapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapSize: {
    width: '100%',
    height: '100%',
  },
});
