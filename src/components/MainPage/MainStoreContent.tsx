import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import MainStoreItem from './MainStoreItem';

const MainStoreContent = () => {
  const navigation = useCustomNavigation();
  const data = [
    {
      id: 1,
      storeImg: require('../../assets/images/background.png'),
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 2,
      storeImg: require('../../assets/images/background.png'),
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 3,
      storeImg: require('../../assets/images/background.png'),
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 4,
      storeImg: require('../../assets/images/background.png'),
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 5,
      storeImg: require('../../assets/images/background.png'),
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 6,
      storeImg: require('../../assets/images/background.png'),
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
    {
      id: 7,
      storeImg: require('../../assets/images/background.png'),
      title: '카페드파리',
      category: '양식',
      review: 4.5,
      reviewCount: 100,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SWidth * 16,
          gap: SWidth * 16,
          paddingBottom: SWidth * 150,
        }}
        renderItem={item => (
          <MainStoreItem
            storeImg={item.item.storeImg}
            title={item.item.title}
            category={item.item.category}
            review={item.item.review}
            reviewCount={item.item.reviewCount}
            onPress={() => navigation.navigate('detailPage')}
          />
        )}
      />
    </View>
  );
};

export default MainStoreContent;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
  },
});
