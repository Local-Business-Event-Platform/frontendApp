import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import SCarousel from '../components/Elements/SCarousel';
import StoreDetailEvent from '../components/MainPage/StoreDetailPage/DetailEvent/StoreDetailEvent';
import StoreDetailInfo from '../components/MainPage/StoreDetailPage/DetailInfo/StoreDetailInfo';
import StoreDetailReview from '../components/MainPage/StoreDetailPage/DetailReview/StoreDetailReview';
import StoreDetailContent from '../components/MainPage/StoreDetailPage/StoreDetailContent';
import StoreDetailTab from '../components/MainPage/StoreDetailPage/StoreDetailTab';

const StoreDetailPage = () => {
  const [tabClicked, setTabClicked] = useState(1);
  const data = {
    title: '카페드파리',
    content:
      '신선한 식재료로 만든 다채로운 양식 메뉴를 맛보세요. 전문 셰프의 손길로 완성된 스테이크, 파스타, 샐러드는 물론, 엄선된 와인과 함께 특별한 시간을 선사합니다.',
    review: 4.8,
    reviewCount: 32,
    img: [
      require('../assets/images/background.png'),
      require('../assets/images/no_image.jpg'),
      require('../assets/images/background.png'),
    ],
    storeInfo: {
      time: '매일 11:00 ~ 21:00',
      holiday: '매주 월요일 휴무',
      call: '02-1234-5678',
      address: '강남구 테헤란로 12길 34',
      distance: '350m',
      x: 37.5675,
      y: 126.9785,
    },
    events: [
      {
        id: 1,
        title: '신메뉴 출시 기념 전 메뉴 20% 할인',
        content: [
          '• 신메뉴 주문시 전 메뉴 20% 할인',
          '• 리뷰 작성시 3,000원 할인권 증정',
        ],
        img: require('../assets/images/background.png'),
      },
      {
        id: 2,
        title: '신메뉴 출시 기념 전 메뉴 20% 할인',
        content: [
          '• 신메뉴 주문시 전 메뉴 20% 할인',
          '• 리뷰 작성시 3,000원 할인권 증정',
        ],
        img: require('../assets/images/background.png'),
      },
    ],
  };
  return (
    <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SCarousel images={data.img} />
        <StoreDetailContent data={data} />
        <StoreDetailTab tabClicked={tabClicked} setTabClicked={setTabClicked} />
        {tabClicked === 1 && <StoreDetailInfo data={data.storeInfo} />}
        {tabClicked === 2 && <StoreDetailEvent data={data.events} />}
        {tabClicked === 3 && <StoreDetailReview />}
      </View>
    </ScrollView>
  );
};

export default StoreDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
