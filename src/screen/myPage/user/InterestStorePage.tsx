import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import SFlatList from '../../../components/Elements/SFlatList';
import MainFilter from '../../../components/MainPage/Filter/MainFilter';
import MainStoreItem from '../../../components/MainPage/MainStoreItem';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {useStoreData} from '../../../store/storeRoute';

const InterestStorePage = () => {
  const navigation = useCustomNavigation();
  const {setTitle} = useStoreData();
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
      <MainFilter search={false} />
      <SFlatList
        data={data}
        gap={SWidth * 16}
        paddingBottom={SWidth * 150}
        skeleton={<View />}
        dataItem={({item}) => (
          <MainStoreItem
            storeImg={item.storeImg}
            title={item.title}
            category={item.category}
            review={item.review}
            reviewCount={item.reviewCount}
            onPress={() => {
              setTitle(item.title);
              navigation.navigate('홈', {
                screen: 'detailPage',
              });
            }}
          />
        )}
      />
    </View>
  );
};

export default InterestStorePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 16,
    gap: SWidth * 24,
  },
});
