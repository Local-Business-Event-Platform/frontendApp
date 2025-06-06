import {
  NaverMapCircleOverlay,
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';

type LocationMapProps = {
  latitude: number;
  longitude: number;
  radius: number;
};

const LocationMap = ({latitude, longitude, radius}: LocationMapProps) => {
  return (
    <View style={styles.container}>
      <NaverMapView
        style={styles.mapStyle}
        camera={{
          latitude: latitude - 0.002,
          longitude: longitude,
          zoom: 15,
        }}
        isRotateGesturesEnabled={false}
        isScrollGesturesEnabled={false}
        isShowCompass={false}
        isShowScaleBar={false}
        isShowLocationButton={false}
        isShowZoomControls={false}
        onInitialized={() => console.log('dd')}>
        <NaverMapCircleOverlay
          latitude={latitude}
          longitude={longitude}
          radius={radius}
          color={'#F1425C33'}
        />
        <NaverMapMarkerOverlay
          isHideCollidedMarkers={true}
          width={SWidth * 20}
          height={SWidth * 20}
          image={require('../../../assets/images/MapMyIcon.png')}
          latitude={latitude}
          longitude={longitude}
          anchor={{x: 0.5, y: 0.5}}
          isIconPerspectiveEnabled={true}
        />
      </NaverMapView>
    </View>
  );
};

export default LocationMap;

const styles = StyleSheet.create({
  container: {
    borderRadius: SWidth * 8,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },

  mapStyle: {
    width: '100%',
    height: '100%',
  },
});
