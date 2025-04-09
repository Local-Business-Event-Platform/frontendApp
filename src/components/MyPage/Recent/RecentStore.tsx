import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {useStoreData} from '../../../store/storeRoute';
import SFlatList from '../../Elements/SFlatList';
import SText from '../../Elements/SText';
import RecentStoreItem from './RecentStoreItem';

type StoreType = {
  id: number;
  image: string;
  title: string;
  category: string;
  review: number;
  reviewCount: number;
};

const RecentStore = () => {
  const navigation = useCustomNavigation();
  const {setTitle} = useStoreData();
  const data = [
    {
      id: 1,
      date: '25.10.23',
      store: [
        {
          id: 1,
          image: Image.resolveAssetSource(
            require('../../../assets/images/background.png'),
          ).uri,
          title: '스토어1',
          category: 'Category 1',
          review: 4.5,
          reviewCount: 100,
        },
        {
          id: 2,
          image: Image.resolveAssetSource(
            require('../../../assets/images/background.png'),
          ).uri,
          title: '스토어2',
          category: 'Category 1',
          review: 4.5,
          reviewCount: 100,
        },
      ],
    },
    {
      id: 2,
      date: '25.10.24',
      store: [
        {
          id: 1,
          image: Image.resolveAssetSource(
            require('../../../assets/images/background.png'),
          ).uri,
          title: '스토어3',
          category: 'Category 1',
          review: 4.5,
          reviewCount: 100,
        },
        {
          id: 2,
          image: Image.resolveAssetSource(
            require('../../../assets/images/background.png'),
          ).uri,
          title: '스토어4',
          category: 'Category 1',
          review: 4.5,
          reviewCount: 100,
        },
      ],
    },
  ];

  return (
    <SFlatList
      data={data}
      gap={SWidth * 40}
      paddingBottom={SWidth * 100}
      skeleton={<View />}
      dataItem={({item}) => (
        <View style={styles.container}>
          <SText fStyle="BxlMd" text={item.date} color={'#000000'} />
          {item.store.map((store: StoreType) => (
            <RecentStoreItem
              key={store.id}
              title={store.title}
              image={store.image}
              category={store.category}
              review={store.review}
              reviewCount={store.reviewCount}
              onPress={() => {
                setTitle(store.title);
                navigation.navigate('홈', {screen: 'detailPage'});
              }}
            />
          ))}
        </View>
      )}
    />
  );
};

export default RecentStore;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 16,
  },
});
