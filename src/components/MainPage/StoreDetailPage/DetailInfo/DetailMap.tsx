import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {SWidth} from '../../../../../globalStyle';
import DetailMapArrow from '../../../../utils/svgs/storeDetailPage/DetailMapArrow';
import {DetailMapProps} from '../../../../utils/types/StoreDetailType';

const DetailMap = ({x, y}: DetailMapProps) => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.mapSize}
        zoomEnabled={false}
        zoomControlEnabled={false}
        initialRegion={{
          latitude: x,
          longitude: y,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
      <Pressable style={styles.mapArrow} onPress={() => {}}>
        <DetailMapArrow />
      </Pressable>
    </View>
  );
};

export default DetailMap;

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    borderRadius: SWidth * 8,
    overflow: 'hidden',
    position: 'relative',
  },

  mapSize: {
    width: '100%',
    height: 160,
  },

  mapArrow: {
    position: 'absolute',
    width: SWidth * 40,
    height: SWidth * 40,
    borderRadius: SWidth * 8,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: SWidth * 16,
    right: SWidth * 16,
    zIndex: 10,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  },
});
