import {BottomSheetFlatList, BottomSheetView} from '@gorhom/bottom-sheet';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {useMyLocation} from '../../../store/mapRoute';
import {useStoreData} from '../../../store/storeRoute';
import {screenNames} from '../../../utils/listData';
import MainFilter from '../../MainPage/Filter/MainFilter';
import MainStoreItem from '../../MainPage/MainStoreItem';
import NoMyLocation from './NoMyLocation';

const BottomSheetItemList = () => {
  const navigation = useCustomNavigation();
  const {setTitle} = useStoreData();
  const {myLocation} = useMyLocation();
  const data = [
    {
      id: 1,
      storeImg: Image.resolveAssetSource(
        require('../../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 2,
      storeImg: Image.resolveAssetSource(
        require('../../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 3,
      storeImg: Image.resolveAssetSource(
        require('../../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 4,
      storeImg: Image.resolveAssetSource(
        require('../../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 5,
      storeImg: Image.resolveAssetSource(
        require('../../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 6,
      storeImg: Image.resolveAssetSource(
        require('../../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 7,
      storeImg: Image.resolveAssetSource(
        require('../../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
  ];

  return (
    <BottomSheetView style={styles.container}>
      {myLocation.latitude && myLocation.longitude ? (
        <>
          <MainFilter search={false} />
          <BottomSheetFlatList
            data={data}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: SWidth * 16,
              paddingHorizontal: SWidth * 16,
              paddingBottom: SWidth * 10,
            }}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <MainStoreItem
                storeImg={item.storeImg}
                title={item.title}
                category={item.category}
                review={item.review}
                reviewCount={item.reviewCount}
                onPress={() => {
                  setTitle(item.title);
                  navigation.navigate('홈', {screen: screenNames.DETAIL_PAGE});
                }}
              />
            )}
          />
        </>
      ) : (
        <NoMyLocation />
      )}
    </BottomSheetView>
  );
};

export default BottomSheetItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 27,
    gap: SWidth * 16,
  },
});
