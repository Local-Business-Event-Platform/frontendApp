import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import BContainer from '../BContainer';
import BusinessContentText from './BusinessContentText';
import BusinessTitleContainer from './BusinessTitleContainer';

const StoreInfo = () => {
  const [storeUpdate, setStoreUpdate] = useState(false);
  return (
    <BContainer>
      <BusinessTitleContainer
        onClick={storeUpdate}
        title="가게 정보"
        onPress={() => setStoreUpdate(!storeUpdate)}
      />
      <BusinessContentText
        onClick={storeUpdate}
        title="가게 분류"
        content="식당"
        listButtonTitle="가게 분류 선택"
        color={'#525252'}
      />
      <BusinessContentText
        onClick={storeUpdate}
        title="세부 분류"
        listButtonTitle="세부 분류 선택"
        content="한식"
        color={'#525252'}
      />
      <BusinessContentText
        onClick={storeUpdate}
        title="가게 주소"
        content="서울특별시 강남구 테헤란로 12길 34 (06164)"
        color={'#525252'}
      />
    </BContainer>
  );
};

export default StoreInfo;

const styles = StyleSheet.create({});
