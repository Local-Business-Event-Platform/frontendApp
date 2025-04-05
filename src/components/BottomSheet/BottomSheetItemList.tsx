import {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import MainFilter from '../MainPage/Filter/MainFilter';
import MainStoreItem from '../MainPage/MainStoreItem';

const BottomSheetItemList = () => {
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
  ];

  return (
    <View style={styles.container}>
      <MainFilter />
      <BottomSheetScrollView
        contentContainerStyle={{
          gap: SWidth * 16,
          height: SWidth * 376,
          paddingHorizontal: SWidth * 16,
          paddingBottom: SWidth * 10,
        }}
        showsVerticalScrollIndicator={false}>
        {data.map(item => (
          <MainStoreItem
            key={item.id}
            storeImg={item.storeImg}
            title={item.title}
            category={item.category}
            review={item.review}
            reviewCount={item.reviewCount}
            onPress={() => {}}
          />
        ))}
      </BottomSheetScrollView>
      {/* <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: SWidth * 16,
          paddingHorizontal: SWidth * 16,
          paddingBottom: SWidth * 56,
        }}
        keyExtractor={item => item.id.toString()}
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
      /> */}
    </View>
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
