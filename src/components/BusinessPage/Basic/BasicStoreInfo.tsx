import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import BButtonTitle from '../BButtonTitle';
import BContainer from '../BContainer';
import BContentAddress from '../BContentAddress';
import BContentList from '../BContentList';

const StoreInfo = () => {
  const [storeUpdate, setStoreUpdate] = useState(false);
  return (
    <BContainer>
      <BButtonTitle
        onClick={storeUpdate}
        title="가게 정보"
        onPress={() => setStoreUpdate(!storeUpdate)}
      />
      <BContentList
        onClick={storeUpdate}
        title="가게 분류"
        content="식당"
        listButtonTitle="가게 분류 선택"
        color={'#525252'}
        onPress={() => {}}
      />
      <BContentList
        onClick={storeUpdate}
        title="세부 분류"
        content="한식"
        listButtonTitle="세부 분류 선택"
        color={'#525252'}
        onPress={() => {}}
      />
      <BContentAddress
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
