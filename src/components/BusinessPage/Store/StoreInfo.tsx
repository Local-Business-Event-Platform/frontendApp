import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import BButtonTitle from '../BButtonTitle';
import BContainer from '../BContainer';
import BContentArea from '../BContentArea';
import BContentText from '../BContentText';
import BContentTime from '../BContentTime';
import StoreImage from './StoreImage';

const StoreInfo = () => {
  const [storeAdd, setStoreAdd] = useState(false);
  return (
    <BContainer>
      <BButtonTitle
        title="가게 정보"
        onClick={false}
        onPress={() => setStoreAdd(!storeAdd)}
      />
      <StoreImage />
      <BContentText
        onClick={storeAdd}
        title="가게 이름"
        placeholder="가게 이름"
        color={'#525252'}
        content="가게 이름"
        value=""
        onChangeText={() => {}}
      />
      <BContentTime
        title="영업시간"
        content="00:00 ~ 00:00"
        color={'#525252'}
        onClick={storeAdd}
      />
      <BContentArea
        value=""
        onChangeText={() => {}}
        title="가게 설명"
        color={'#525252'}
        content="가게 상세 설명 (200자 내외)"
        onClick={storeAdd}
      />
    </BContainer>
  );
};

export default StoreInfo;

const styles = StyleSheet.create({});
