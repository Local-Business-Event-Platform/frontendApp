import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import StoreReviewItem from './StoreReviewItem';

const StoreDetailReview = () => {
  const data = [
    {
      id: 1,
      userImg: require('../../../../assets/images/no_image.jpg'),
      userName: '이서연',
      reviewStar: 4,
      reviewDate: '2025.02.15 방문',
      reviewContent:
        '음식이 정말 맛있고, 분위기도 좋았어요. 특히 직원분들이 친절하셔서 더욱 좋았습니다. 다음에 또 방문하고 싶네요!',
    },
    {
      id: 2,
      userImg: require('../../../../assets/images/no_image.jpg'),
      userName: '이서연',
      reviewStar: 4,
      reviewDate: '2025.02.15 방문',
      reviewContent:
        '음식이 정말 맛있고, 분위기도 좋았어요. 특히 직원분들이 친절하셔서 더욱 좋았습니다. 다음에 또 방문하고 싶네요!',
    },
  ];
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <StoreReviewItem
          key={item.id}
          item={item}
          lastItem={index === data.length - 1}
        />
      ))}
      {/* <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingHorizontal: SWidth * 24}}
        renderItem={item => <StoreReviewItem item={item.item} />}
      /> */}
    </View>
  );
};

export default StoreDetailReview;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SWidth * 24,
  },
});
