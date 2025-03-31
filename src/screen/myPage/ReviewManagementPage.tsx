import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SText from '../../components/Elements/SText';
import MainFilter from '../../components/MainPage/Filter/MainFilter';
import BusinessDelete from '../../utils/svgs/businessPage/BusinessDelete';
import MyPageFillStar from '../../utils/svgs/myPage/MyPageFillStar';
import MyPageStar from '../../utils/svgs/myPage/MyPageStar';
import DetailPen from '../../utils/svgs/storeDetailPage/DetailPen';

type ItemType = {
  item: {
    id: number;
    date: string;
    store: string;
    review: number;
    content: string;
    images: number[];
  };
};

const ReviewManagementPage = () => {
  const data = [
    {
      id: 1,
      date: '25.02.15',
      store: '온정 한식당',
      review: 4,
      content:
        '음식이 정말 맛있고, 분위기도 좋았어요. 특히 직원분들이 친절하셔서 더욱 좋았습니다. 다음에 또 방문하고 싶네요!',
      images: [
        require('../../assets/images/background.png'),
        require('../../assets/images/no_image.jpg'),
      ],
    },
    {
      id: 2,
      date: '25.02.15',
      store: '온정 한식당',
      review: 4,
      content:
        '음식이 정말 맛있고, 분위기도 좋았어요. 특히 직원분들이 친절하셔서 더욱 좋았습니다. 다음에 또 방문하고 싶네요!',
      images: [
        require('../../assets/images/background.png'),
        require('../../assets/images/no_image.jpg'),
      ],
    },
    {
      id: 3,
      date: '25.02.15',
      store: '온정 한식당',
      review: 4,
      content:
        '음식이 정말 맛있고, 분위기도 좋았어요. 특히 직원분들이 친절하셔서 더욱 좋았습니다. 다음에 또 방문하고 싶네요!',
      images: [
        require('../../assets/images/background.png'),
        require('../../assets/images/no_image.jpg'),
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <MainFilter search={false} />
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        data={data}
        contentContainerStyle={{
          paddingHorizontal: SWidth * 24,
          paddingBottom: SWidth * 100,
        }}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.itemContainer,
              index === data.length - 1 ? {} : {borderBottomWidth: 1},
            ]}>
            <View style={styles.rowContainer}>
              <SText fStyle="BxlMd" text={item.date} />
              <View style={styles.rowTitle}>
                <Pressable style={styles.iconBox} onPress={() => {}}>
                  <DetailPen />
                </Pressable>
                <Pressable style={styles.iconBox} onPress={() => {}}>
                  <BusinessDelete />
                </Pressable>
              </View>
            </View>
            <View style={styles.rowTitle}>
              <SText fStyle="BlgSb" text={item.store} color={'#404040'} />
              <View style={styles.reviewContainer}>
                {Array.from({length: 5}).map((_, index) =>
                  index < item.review ? (
                    <MyPageFillStar key={index} />
                  ) : (
                    <MyPageStar key={index} />
                  ),
                )}
              </View>
            </View>
            <SText
              flexShrink={1}
              nLine={100}
              fStyle="BmdRg"
              text={item.content}
            />
            <View style={styles.rowTitle}>
              {item.images.map((image, index) => (
                <FastImage
                  key={index}
                  style={styles.imgStyle}
                  source={image}
                  resizeMode={FastImage.resizeMode.cover}
                />
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ReviewManagementPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 16,
  },

  itemContainer: {
    paddingTop: SWidth * 20,
    paddingBottom: SWidth * 28,
    gap: SWidth * 12,
    borderColor: '#E5E5E5',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SWidth * 8,
  },

  rowTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },

  iconBox: {
    width: SWidth * 40,
    height: SWidth * 40,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },

  reviewContainer: {
    height: SWidth * 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SWidth * 4,
    paddingVertical: SWidth * 2,
    backgroundColor: '#FEFCE8',
  },

  imgStyle: {
    width: SWidth * 100,
    height: SWidth * 100,
    borderRadius: SWidth * 4,
  },
});
