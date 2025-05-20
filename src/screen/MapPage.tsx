import {getDistance} from 'geolib';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../globalStyle';
import Map from '../components/Map/Map';
import {useBottomSheetTitle, useMyLocation} from '../store/mapRoute';

const MapPage = () => {
  const {myLocation, radius} = useMyLocation();
  const {category, setCategory} = useBottomSheetTitle();

  const buildings = [
    {name: '나주식당', latitude: 37.5564503, longitude: 126.9371086},
    {name: '소담식당', latitude: 37.5574369, longitude: 126.9380307},
    {name: '맥도날드', latitude: 37.5585312, longitude: 126.9366973},
    {name: '피슈마라홍탕신촌점', latitude: 37.5563246, longitude: 126.9342936},
    {name: '형제식당', latitude: 37.5554663, longitude: 126.9348035},
  ];
  console.log('맵페이지', radius);
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

  const nearbyBuildings = buildings.filter(building => {
    const distance = getDistance(
      {latitude: myLocation.latitude, longitude: myLocation.longitude},
      {latitude: building.latitude, longitude: building.longitude},
    );
    return distance <= myRadius()!; // 1km = 1000m
  });

  console.log('nearbyBuildings', myLocation);
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        {/* <View style={styles.searchBar}>
          <SInput
            value={category}
            onChangeText={text => setCategory(text)}
            borderColor={
              category
                ? colors.border.interactive.secondary
                : colors.border.secondary
            }
            placeholder="검색"
            searchOn={true}
            searchIconColor={colors.icon.disabled}
            iconOnPress={() => {
              console.log('검색 아이콘 클릭됨');
            }}
          />
        </View> */}
      </View>
      <Map
        myLatitude={myLocation.latitude}
        myLongitude={myLocation.longitude}
        myRadius={myRadius()!} // 200m 반경
        cameraZoom={14}
        nearbyBuildings={nearbyBuildings}
      />
    </View>
  );
};

export default MapPage;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },

  searchBarContainer: {
    position: 'absolute',
    width: '100%',
    height: SWidth * 48,
    top: SWidth * 74,
    left: 0,
    zIndex: 2,
  },

  searchBar: {
    marginHorizontal: SWidth * 16,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
  },
});
