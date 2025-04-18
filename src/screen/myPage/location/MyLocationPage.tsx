import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SText from '../../../components/Elements/SText';
import AddLocation from '../../../components/MyPage/MyLocation/AddLocation';
import LocationSetting from '../../../components/MyPage/MyLocation/LocationSetting';
import MyLocationSlider from '../../../components/MyPage/MyLocation/MyLocationSlider';
import MyPageTitle from '../../../components/MyPage/MyPageTitle';
import {useMyLocation} from '../../../store/mapRoute';

const MyLocationPage = () => {
  const {myLocation, setMyLocation, radius, setRadius} = useMyLocation();

  const list = [
    {
      id: 1,
      title: '역삼동',
      latitude: 37.500163,
      longitude: 127.0348455,
    },
    {
      id: 2,
      title: '삼성동',
      latitude: 37.508861,
      longitude: 127.063149,
    },
    {
      id: 3,
      title: '신사동',
      latitude: 37.5162873,
      longitude: 127.0200228,
    },
  ];

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

  console.log('로케이셔', radius);
  return (
    <ScrollView style={styles.container} overScrollMode="never">
      <AddLocation list={list} setMyLocation={setMyLocation} />
      <View style={styles.nowLocationContainer}>
        <MyPageTitle title="현재 동네" />
        <View style={styles.mapContainer}>
          <LocationSetting radius={myRadius()!} />
          <View style={styles.mapTextContainer}>
            <SText
              fStyle="BlgMd"
              text={'서울특별시 강남구 테헤란로 152'}
              color={colors.text.secondary}
            />
            <SText
              fStyle="BmdRg"
              text={'역삼동, 삼성빌딩 5층'}
              color={colors.text.tertiary}
            />
          </View>
        </View>
        <MyLocationSlider radius={radius} setRadius={setRadius} />
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
    marginBottom: SWidth * 24,
    gap: SWidth * 16,
  },

  mapTextContainer: {
    gap: SWidth * 4,
  },
});
