import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import EventItem from './EventItem';

const MainEventContent = () => {
  const navigation = useCustomNavigation();
  const [clicked, setClicked] = useState(false);
  const data = [
    {
      id: 1,
      img: require('../../assets/images/no_image.jpg'),
      title: '신메뉴 출시 기념 전 메뉴 20% 할인',
      store: '카페드파리',
      category: '양식',
      km: '350m/도보 5분',
      date: '2월 1일(목) ~ 2월 28일(수)',
    },
    {
      id: 2,
      img: require('../../assets/images/no_image.jpg'),
      title: '신메뉴 출시 기념 전 메뉴 20% 할인',
      store: '카페드파리',
      category: '양식',
      km: '350m/도보 5분',
      date: '2월 1일(목) ~ 2월 28일(수)',
    },
    {
      id: 3,
      img: require('../../assets/images/no_image.jpg'),
      title: '신메뉴 출시 기념 전 메뉴 20% 할인',
      store: '카페드파리',
      category: '양식',
      km: '350m/도보 5분',
      date: '2월 1일(목) ~ 2월 28일(수)',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: SWidth * 16,
          paddingBottom: SWidth * 100,
        }}
        renderItem={item => (
          <EventItem
            clicked={clicked}
            item={item.item}
            onPress={() => navigation.navigate('detailPage')}
            likeOnPress={() => setClicked(!clicked)}
          />
        )}
      />
    </View>
  );
};

export default MainEventContent;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
  },
});
