import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SText from '../../components/Elements/SText';
import AddLocation from '../../components/MyPage/MyLocation/AddLocation';
import LocationMap from '../../components/MyPage/MyLocation/LocationMap';
import MyLocationSlider from '../../components/MyPage/MyLocation/MyLocationSlider';
import MyPageTitle from '../../components/MyPage/MyPageTitle';

const MyLocationPage = () => {
  const [location, setLocation] = useState(1000);

  const myRadius = () => {
    switch (location) {
      case 1000:
        return 100;
      case 2000:
        return 200;
      case 3000:
        return 300;
    }
  };

  console.log('로케이셔', location);
  return (
    <ScrollView style={styles.container} overScrollMode="never">
      <AddLocation />
      <View style={styles.nowLocationContainer}>
        <MyPageTitle title="현재 동네" />
        <View style={styles.mapContainer}>
          <LocationMap radius={myRadius()!} />
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

  mapTextContainer: {
    gap: SWidth * 4,
  },
});
