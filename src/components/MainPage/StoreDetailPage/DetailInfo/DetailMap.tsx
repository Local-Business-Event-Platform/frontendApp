import {
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';
import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import MapArrow24 from '../../../../utils/svgs/storeDetailPage/MapArrow24';
import {DetailMapProps} from '../../../../utils/types/StoreDetailType';

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
      <Pressable style={styles.mapArrow} onPress={() => {}}>
        <MapArrow24 />
      </Pressable>
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

  mapArrow: {
    position: 'absolute',
    width: SWidth * 40,
    height: SWidth * 40,
    borderRadius: SWidth * 8,
    backgroundColor: colors.bg.interactive.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: SWidth * 16,
    right: SWidth * 16,
    zIndex: 10,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  },
});
