import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {useStoreData} from '../../store/storeRoute';
import SImageCardLoading from '../Elements/SImageCardLoading';
import EventItem from './EventItem';

type EventItemType = {
  id: number;
  img: string;
  title: string;
  store: string;
  category: string;
  km: string;
  date: string;
};

const MainEventContent = () => {
  const navigation = useCustomNavigation();
  const [clicked, setClicked] = useState(false);
  const {setTitle} = useStoreData();
  const [data, setData] = useState<EventItemType[]>([]);

  const list = [
    {
      id: 1,
      img: Image.resolveAssetSource(
        require('../../assets/images/background.png'),
      ).uri,
      title: '신메뉴 출시 기념 전 메뉴 20% 할인',
      store: '카페드파리',
      category: '양식',
      km: '350m/도보 5분',
      date: '2월 1일(목) ~ 2월 28일(수)',
    },
    {
      id: 2,
      img: Image.resolveAssetSource(require('../../assets/images/no_image.jpg'))
        .uri,
      title: '신메뉴 출시 기념 전 메뉴 20% 할인',
      store: '카페드파리',
      category: '양식',
      km: '350m/도보 5분',
      date: '2월 1일(목) ~ 2월 28일(수)',
    },
    {
      id: 3,
      img: Image.resolveAssetSource(require('../../assets/images/no_image.jpg'))
        .uri,
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
          gap: SWidth * 24,
        }}
        ListEmptyComponent={() => <SImageCardLoading count={3} />}
        renderItem={item => (
          <EventItem
            clicked={clicked}
            item={item.item}
            onPress={() => {
              setTitle(item.item.store);
              navigation.navigate('detailPage', {item: item.item});
            }}
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
