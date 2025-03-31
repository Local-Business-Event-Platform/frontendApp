import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import MainFilter from '../../components/MainPage/Filter/MainFilter';
import MainStoreItem from '../../components/MainPage/MainStoreItem';

const InterestStorePage = () => {
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
      <MainFilter search={false} />
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
        renderItem={({item}) => (
          <MainStoreItem
            storeImg={item.storeImg}
            title={item.title}
            category={item.category}
            review={item.review}
            reviewCount={item.reviewCount}
            onPress={() => {}}
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
