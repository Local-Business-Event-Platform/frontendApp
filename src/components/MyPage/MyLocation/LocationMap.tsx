import {
  NaverMapCircleOverlay,
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {useMyLocation} from '../../../store/mapRoute';
import SMapButton from '../../Elements/SMapButton';

type LocationMapProps = {
  radius: number;
};

const LocationMap = ({radius}: LocationMapProps) => {
  const {myLocation} = useMyLocation();
  return (
    <View style={styles.container}>
      <NaverMapView
        style={styles.mapStyle}
        camera={{
          latitude: myLocation.latitude,
          longitude: myLocation.longitude,
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
          latitude={myLocation.latitude}
          longitude={myLocation.longitude}
          radius={radius}
          color={'#F1425C33'}
        />
        <NaverMapMarkerOverlay
          isHideCollidedMarkers={true}
          width={SWidth * 20}
          height={SWidth * 20}
          image={require('../../../assets/images/MapMyIcon.png')}
          latitude={myLocation.latitude}
          longitude={myLocation.longitude}
          anchor={{x: 0.5, y: 0.5}}
          isIconPerspectiveEnabled={true}
        />
      </NaverMapView>
      <SMapButton onPress={() => {}} />
    </View>
  );
};

export default LocationMap;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: SWidth * 8,
    overflow: 'hidden',
    width: '100%',
    height: SWidth * 180,
  },

  mapStyle: {
    width: '100%',
    height: '100%',
  },
});
