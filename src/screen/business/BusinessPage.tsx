import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {SWidth} from '../../../globalStyle';
import BAddButton from '../../components/BusinessPage/BAddButton';
import BStoreCard from '../../components/BusinessPage/BStoreCard';
import useCustomNavigation from '../../hooks/useCustomNavigation';
const BusinessPage = () => {
  const navigation = useCustomNavigation();
  const [data, setData] = useState([
    {
      id: 1,
      name: '온정 한식당',
      review: 4.5,
      reviewCount: 32,
      category: '한식',
      image: require('../../assets/images/no_image.jpg'),
    },
    {
      id: 2,
      name: '무디 키친',
      review: 4.8,
      reviewCount: 32,
      category: '한식',
      image: require('../../assets/images/no_image.jpg'),
    },
    {
      id: 3,
      name: '온정 한식당',
      review: 4.5,
      reviewCount: 32,
      category: '한식',
      image: require('../../assets/images/no_image.jpg'),
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: SWidth * 16}}>
        <BAddButton
          marginTop={SWidth * 16}
          title="가게 추가하기"
          onPress={() => {
            navigation.navigate('storeInfo');
          }}
        />
      </View>
      {data && (
        <View style={styles.listContainer}>
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: SWidth * 16,
              paddingBottom: SWidth * 100,
            }}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <BStoreCard
                item={item}
                onPress={() => {
                  navigation.navigate('storeInfo', {data: item});
                }}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default BusinessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  listContainer: {
    marginTop: SWidth * 24,
  },
});
