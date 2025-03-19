import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {BasicInformationProps} from '../../../utils/types/businessType';
import BButtonTitle from '../BButtonTitle';
import BContainer from '../BContainer';
import BContentButtonText from '../BContentButtonText';
import BContentText from '../BContentText';

const BusinessInfo = ({data}: BasicInformationProps) => {
  const [BusinessUpdate, setBusinessUpdate] = useState(false);
  return (
    <BContainer>
      <BButtonTitle
        title="사업자 정보"
        onClick={BusinessUpdate}
        onPress={() => setBusinessUpdate(!BusinessUpdate)}
      />
      <BContentButtonText
        onClick={BusinessUpdate}
        title="사업자 등록번호"
        color={'#525252'}
        underline="underline"
        content="123-45-67890"
        onChangeText={() => {}}
        value=""
      />
      <BContentText
        onClick={BusinessUpdate}
        title="대표자명"
        placeholder="대표자명 입력"
        color={'#525252'}
        underline="underline"
        content="이한식"
        value=""
        onChangeText={() => {}}
      />
    </BContainer>
  );
};

export default BusinessInfo;

const styles = StyleSheet.create({});
