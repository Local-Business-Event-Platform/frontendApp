import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {useStoreData} from '../../../store/storeRoute';
import SFlatList from '../../Elements/SFlatList';
import SImageCard2Loading from '../../Elements/Skeleton/SImageCard2Loading';
import MainStoreItem from '../MainStoreItem';

const SearchList = () => {
  const navigation = useCustomNavigation();
  const {setTitle} = useStoreData();

  const list = [];

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
    <View style={styles.container}>
      <SFlatList
        data={data}
        gap={SWidth * 16}
        paddingBottom={SWidth * 50}
        skeleton={<SImageCard2Loading count={4} />}
        dataItem={({item}) => (
          <MainStoreItem
            storeImg={item.storeImg}
            title={item.title}
            category={item.category}
            review={item.review}
            reviewCount={item.reviewCount}
            onPress={() => {
              setTitle(item.title);
              navigation.navigate('bottomTab', {
                screen: '홈',
                params: {
                  screen: 'detailPage',
                },
              });
            }}
          />
        )}
      />
    </View>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 24,
  },
});
