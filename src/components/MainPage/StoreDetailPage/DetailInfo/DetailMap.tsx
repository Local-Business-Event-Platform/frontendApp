import {
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import {DetailMapProps} from '../../../../utils/types/StoreDetailType';
import SMapButton from '../../../Elements/SMapButton';

const DetailMap = ({x, y}: DetailMapProps) => {
  const [zoom, setZoom] = useState(16);
  return (
    <View style={styles.container}>
      <NaverMapView
        style={styles.mapSize}
        isZoomGesturesEnabled={false}
        isRotateGesturesEnabled={false}
        isScrollGesturesEnabled={false}
        isTiltGesturesEnabled={false}
        isShowScaleBar={false}
        isShowLocationButton={false}
        isShowZoomControls={false}
        onCameraChanged={e => {
          setZoom(e.zoom!);
        }}
        initialCamera={{
          latitude: x,
          longitude: y,
          zoom: 16,
        }}>
        <NaverMapMarkerOverlay
          caption={{
            text: '내 위치',
            color: colors.primary,
            textSize: SWidth * 12,
          }}
          isHideCollidedMarkers={true}
          width={SWidth * 24}
          height={SWidth * 24}
          image={require('../../../../assets/images/marker.png')}
          latitude={x}
          longitude={y}
          anchor={{x: 0.5, y: 0.5}}
          isIconPerspectiveEnabled={true}
        />
      </NaverMapView>
      <SMapButton onPress={() => {}} />
    </View>
  );
};

export default DetailMap;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SWidth * 160,
    borderRadius: SWidth * 8,
    overflow: 'hidden',
    position: 'relative',
  },

  mapSize: {
    width: '100%',
    height: '100%',
  },
});
