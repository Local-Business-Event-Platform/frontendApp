import {NaverMapView} from '@mj-studio/react-native-naver-map';

import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SText from '../../components/Elements/SText';
import AddLocation from '../../components/MyPage/MyLocation/AddLocation';
import MyLocationSlider from '../../components/MyPage/MyLocation/MyLocationSlider';
import MyPageTitle from '../../components/MyPage/MyPageTitle';

const MyLocationPage = () => {
  const [location, setLocation] = useState(1000);

  console.log('로케이셔', location);
  return (
    <ScrollView style={styles.container} overScrollMode="never">
      <AddLocation />
      <View style={styles.nowLocationContainer}>
        <MyPageTitle title="현재 동네" />
        <View style={styles.mapContainer}>
          <View style={styles.maps}>
            <NaverMapView
              style={styles.mapStyle}
              camera={{
                latitude: 37.5666102,
                longitude: 126.9783881,
                zoom: 14,
              }}
              isRotateGesturesEnabled={false}
              isScrollGesturesEnabled={false}
              isShowCompass={false}
              isShowScaleBar={false}
              isShowLocationButton={false}
              isShowZoomControls={false}
              onInitialized={() => console.log('dd')}
            />
          </View>
          <View style={styles.mapTextContainer}>
            <SText
              fStyle="BlgMd"
              text={'서울특별시 강남구 테헤란로 152'}
              color={colors.secondary}
            />
            <SText
              fStyle="BmdRg"
              text={'역삼동, 삼성빌딩 5층'}
              color={colors.tertiary}
            />
          </View>
        </View>
        <MyLocationSlider location={location} setLocation={setLocation} />
      </View>
    </ScrollView>
  );
};

export default MyLocationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SWidth * 24,
  },

  nowLocationContainer: {
    marginTop: SWidth * 64,
    marginBottom: SWidth * 63,
  },

  mapContainer: {
    marginTop: SWidth * 12,
    gap: SWidth * 16,
  },

  maps: {
    borderRadius: SWidth * 8,
    overflow: 'hidden',
    width: '100%',
    height: SWidth * 180,
  },

  mapStyle: {
    width: '100%',
    height: '100%',
  },

  mapTextContainer: {
    gap: SWidth * 4,
  },
});
