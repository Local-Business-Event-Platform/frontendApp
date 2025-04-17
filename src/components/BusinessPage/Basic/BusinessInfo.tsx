import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../../globalStyle';
import {BDataProps} from '../../../utils/types/businessType';
import BButtonTitle from '../BButtonTitle';
import BContainer from '../BContainer';
import BContentButtonText from '../BContentButtonText';
import BContentText from '../BContentText';

type BasicInformationProps = {
  data: BDataProps;
};

const BusinessInfo = ({data}: BasicInformationProps) => {
  const [buttonClick, setButtonClick] = useState(false);
  const [BusinessUpdate, setBusinessUpdate] = useState(false);
  const [storeData, setStoreData] = useState({
    StoreInfoNumber: data.storeInfoNumber,
    StoreCEO: data.storeCEO,
  });

  const handleButton = async () => {
    if (buttonClick) {
      console.log('수정하기');
    }
    setButtonClick(!buttonClick);
  };

  return (
    <BContainer>
      <BButtonTitle
        title="사업자 정보"
        buttonText={data.storeCEO ? '수정하기' : '등록하기'}
        buttonTextColor={
          buttonClick
            ? colors.text.interactive.inverse
            : colors.text.interactive.secondary
        }
        onClick={buttonClick}
        onPress={handleButton}
      />
      <BContentButtonText
        onClick={buttonClick}
        title="사업자 등록번호"
        color={colors.text.tertiary}
        content={
          storeData.StoreInfoNumber
            ? storeData.StoreInfoNumber
            : data.storeInfoNumber
            ? data.storeInfoNumber
            : '000-00-00000'
        }
        contentColor={
          data.storeInfoNumber ? colors.text.secondary : colors.text.disabled
        }
        onChangeText={text =>
          setStoreData({...storeData, StoreInfoNumber: text})
        }
        buttonOnPress={() => console.log(storeData.StoreInfoNumber)}
        value={storeData.StoreInfoNumber}
      />
      <BContentText
        onClick={buttonClick}
        title="대표자명"
        placeholder="대표자명 입력"
        color={colors.text.tertiary}
        content={
          storeData.StoreCEO
            ? storeData.StoreCEO
            : data.storeCEO
            ? data.storeCEO
            : '대표자'
        }
        contentColor={
          data.storeCEO ? colors.text.secondary : colors.text.disabled
        }
        value={storeData.StoreCEO}
        onChangeText={text => setStoreData({...storeData, StoreCEO: text})}
      />
    </BContainer>
  );
};

export default BusinessInfo;

const styles = StyleSheet.create({});
