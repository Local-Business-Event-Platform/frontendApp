import {NaverMapView} from '@mj-studio/react-native-naver-map';
import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SText from '../../components/Elements/SText';
import AddLocation from '../../components/MyPage/MyLocation/AddLocation';
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
              extent={{
                latitude: 37.5666102,
                longitude: 126.9783881,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0021,
              }}
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
        <View style={styles.locationContainer}>
          <SText
            fStyle="BlgMd"
            text={'선택 범위 3km'}
            color={colors.interactive.primary}
          />
          <View style={styles.progress}>
            <View
              style={[
                styles.progressCircleContainer,
                {
                  alignItems:
                    location === 1000
                      ? 'flex-start'
                      : location === 2000
                      ? 'center'
                      : 'flex-end',
                },
              ]}>
              <View style={styles.progressCircle} />
            </View>
            <View
              style={[
                styles.barStyle,
                {
                  backgroundColor:
                    location === 2000 || location === 3000
                      ? colors.interactive.primary
                      : '#F5F5F5',
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                  borderLeftWidth: 1,
                  borderColor:
                    location === 2000 || location === 3000
                      ? colors.interactive.primary
                      : colors.interactive.secondary,
                },
              ]}
            />
            <View
              style={[
                styles.barStyle,
                {
                  backgroundColor:
                    location === 3000 ? colors.interactive.primary : '#F5F5F5',
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                  borderRightWidth: 1,
                  borderColor:
                    location === 3000
                      ? colors.interactive.primary
                      : colors.interactive.secondary,
                },
              ]}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.buttonStyle}
              onPress={() => setLocation(1000)}>
              <SText fStyle="BlgMd" text={'1km'} color={colors.secondary} />
              <SText
                fStyle="BmdMd"
                text={'도보 15분'}
                color={colors.tertiary}
              />
            </Pressable>
            <Pressable
              style={styles.buttonStyle}
              onPress={() => setLocation(2000)}>
              <SText fStyle="BlgMd" text={'2km'} color={colors.secondary} />
              <SText
                fStyle="BmdMd"
                text={'도보 15분'}
                color={colors.tertiary}
              />
            </Pressable>
            <Pressable
              style={styles.buttonStyle}
              onPress={() => setLocation(3000)}>
              <SText fStyle="BlgMd" text={'3km'} color={colors.secondary} />
              <SText
                fStyle="BmdMd"
                text={'도보 15분'}
                color={colors.tertiary}
              />
            </Pressable>
          </View>
        </View>
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

  locationContainer: {
    marginTop: SWidth * 24,
    borderTopWidth: 1,
    borderTopColor: colors.interactive.secondary,
    padding: SWidth * 16,
    paddingTop: SWidth * 20,
    alignItems: 'center',
  },

  progress: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SWidth * 22,
  },

  progressCircleContainer: {
    position: 'absolute',
    width: '100%',
  },

  progressCircle: {
    width: SWidth * 24,
    height: SWidth * 24,
    borderWidth: 1,
    borderColor: '#447E6',
    borderRadius: 999,
    backgroundColor: colors.interactive.primary,
    zIndex: 1,
  },

  barStyle: {
    flex: 1,
    height: SWidth * 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

  buttonContainer: {
    width: '100%',
    marginTop: SWidth * 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonStyle: {
    alignItems: 'center',
    gap: SWidth * 2,
  },
});
