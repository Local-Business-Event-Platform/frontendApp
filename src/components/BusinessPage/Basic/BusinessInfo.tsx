import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import BContainer from '../BContainer';
import BusinessContentText from './BusinessContentText';
import BusinessTitleContainer from './BusinessTitleContainer';

const BusinessInfo = () => {
  const [BusinessUpdate, setBusinessUpdate] = useState(false);
  return (
    <BContainer>
      <BusinessTitleContainer
        title="사업자 정보"
        onClick={BusinessUpdate}
        onPress={() => setBusinessUpdate(!BusinessUpdate)}
      />
      <BusinessContentText
        onClick={BusinessUpdate}
        title="사업자 등록번호"
        color={'#525252'}
        underline="underline"
        content="123-45-67890"
      />
      <BusinessContentText
        onClick={BusinessUpdate}
        title="대표자명"
        placeholder="대표자명 입력"
        color={'#525252'}
        underline="underline"
        content="이한식"
      />
    </BContainer>
  );
};

export default BusinessInfo;

const styles = StyleSheet.create({});
