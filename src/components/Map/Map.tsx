import {
  NaverMapCircleOverlay,
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';
import React from 'react';
import {Keyboard, Pressable, StyleSheet} from 'react-native';

import {colors, SWidth} from '../../../globalStyle';
import {useBottomSheetTitle} from '../../store/mapRoute';

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
  const {setBottomSheetTitle} = useBottomSheetTitle();
  return (
    <Pressable onPress={Keyboard.dismiss}>
      <NaverMapView
        isUseTextureViewAndroid={true}
        style={styles.mapSize}
        isShowScaleBar={false}
        isTiltGesturesEnabled={false}
        isShowCompass={false}
        // isShowLocationButton={false}
        isShowZoomControls={false}
        onTapMap={() => {
          // setBottomSheetTitle(bottomSheetNames.MENU_SELECT);
          Keyboard.dismiss();
        }}
        camera={{
          latitude: myLatitude !== 0 ? myLatitude - 0.004 : 37.5564503,
          longitude: myLongitude !== 0 ? myLongitude : 126.9371086,
          zoom: cameraZoom,
        }}>
        {myLatitude !== 0 && myLongitude !== 0 && (
          <>
            <NaverMapCircleOverlay
              latitude={myLatitude}
              longitude={myLongitude}
              radius={myRadius}
              color={'#F1425C33'}
            />
            <NaverMapMarkerOverlay
              caption={{
                text: '내 위치',
                color: colors.text.primary,
                textSize: SWidth * 12,
              }}
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
                  color: colors.text.primary,
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
          </>
        )}
      </NaverMapView>
    </Pressable>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapSize: {
    width: '100%',
    height: '100%',
  },
});
