import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {screenNames} from '../../utils/listData';
import SFlatList from '../Elements/SFlatList';
// import SImageCard2Loading from '../Elements/Skeleton/SImageCard2Loading';
import MainStoreItem from './MainStoreItem';

type ListType = {
  id: number;
  storeImg: string;
  title: string;
  category: string;
  review: number;
  reviewCount: number;
};

const MainStoreContent = () => {
  const navigation = useCustomNavigation();
  const [list, setList] = useState<ListType[]>([]);
  const data = [
    {
      id: 1,
      storeImg: Image.resolveAssetSource(
        require('../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 2,
      storeImg: Image.resolveAssetSource(
        require('../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 3,
      storeImg: Image.resolveAssetSource(
        require('../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 4,
      storeImg: Image.resolveAssetSource(
        require('../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 5,
      storeImg: Image.resolveAssetSource(
        require('../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 6,
      storeImg: Image.resolveAssetSource(
        require('../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 7,
      storeImg: Image.resolveAssetSource(
        require('../../assets/images/background.png'),
      ).uri,
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
  ];

  return (
    <SFlatList
      data={data}
      gap={SWidth * 16}
      paddingBottom={SWidth * 100}
      skeleton={<View />}
      dataItem={({item}) => (
        <MainStoreItem
          storeImg={item.storeImg}
          title={item.title}
          category={item.category}
          review={item.review}
          reviewCount={item.reviewCount}
          onPress={() => navigation.navigate(screenNames.DETAIL_PAGE)}
        />
      )}
    />
  );
};

export default MainStoreContent;

const styles = StyleSheet.create({});
