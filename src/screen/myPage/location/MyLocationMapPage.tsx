import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SText from '../../../components/Elements/SText';
import LocationMap from '../../../components/MyPage/MyLocation/LocationMap';
import MyLocationSlider from '../../../components/MyPage/MyLocation/MyLocationSlider';
import {useMyLocation} from '../../../store/mapRoute';
import Location24 from '../../../utils/svgs/businessPage/Location24';

type MapDataType = {
  route?: {
    params: {
      latitude: number;
      longitude: number;
    };
  };
};

const MyLocationMapPage = ({route}: MapDataType) => {
  const {latitude, longitude} = route!.params;
  const {radius, setRadius} = useMyLocation();
  const myRadius = () => {
    switch (radius) {
      case 1000:
        return 100;
      case 2000:
        return 200;
      case 3000:
        return 300;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <Location24 color={colors.icon.primary} />
        <SText
          fStyle="BxlMd"
          text={'서울특별시 강남구 테헤란로 152'}
          color={colors.text.secondary}
        />
      </View>
      <View style={styles.mapContainer}>
        <LocationMap
          latitude={latitude}
          longitude={longitude}
          radius={myRadius()!}
        />
        <View style={styles.rangeContainer}>
          <MyLocationSlider radius={radius} setRadius={setRadius} />
        </View>
      </View>
    </View>
  );
};

export default MyLocationMapPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: colors.border.secondary,
  },

  addressContainer: {
    height: SWidth * 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
    paddingHorizontal: SWidth * 24,
  },

  mapContainer: {
    position: 'relative',
  },

  rangeContainer: {
    position: 'absolute',
    bottom: 60,
    backgroundColor: colors.white,
    paddingHorizontal: SWidth * 8,
    paddingBottom: SWidth * 16,
  },
});
