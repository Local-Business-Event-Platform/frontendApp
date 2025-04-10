import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../../globalStyle';
import {BDataProps} from '../../../utils/types/businessType';
import BButtonTitle from '../BButtonTitle';
import BContainer from '../BContainer';
import BContentAddress from '../BContentAddress';
import BContentList from '../BContentList';

type StoreInfoProps = {
  data: BDataProps;
};

const StoreInfo = ({data}: StoreInfoProps) => {
  const [buttonClick, setButtonClick] = useState(false);
  const [BusinessUpdate, setBusinessUpdate] = useState(false);

  const handleButton = async () => {
    if (buttonClick) {
      console.log('수정하기');
    }
    setButtonClick(!buttonClick);
  };
  return (
    <BContainer>
      <BButtonTitle
        onClick={buttonClick}
        buttonText={data.storeCategory ? '수정하기' : '등록하기'}
        buttonTextColor={buttonClick ? 'white' : colors.tertiary}
        title="가게 정보"
        onPress={handleButton}
      />
      <BContentList
        onClick={buttonClick}
        title="가게 분류"
        content={data.storeCategory ? data.storeCategory : '가게 분류'}
        listButtonTitle="가게 분류 선택"
        contentColor={data.storeCategory ? colors.secondary : colors.disabled}
        color={colors.tertiary}
        onPress={() => {}}
      />
      <BContentList
        onClick={buttonClick}
        title="세부 분류"
        content={
          data.storeDetailCategory ? data.storeDetailCategory : '세부 분류'
        }
        contentColor={
          data.storeDetailCategory ? colors.secondary : colors.disabled
        }
        listButtonTitle="세부 분류 선택"
        color={colors.tertiary}
        onPress={() => {}}
      />
      <BContentAddress
        onClick={buttonClick}
        title="가게 주소"
        content={data.storeAddress ? data.storeAddress : '가게 주소'}
        contentColor={data.storeAddress ? colors.secondary : colors.disabled}
        color={colors.tertiary}
      />
    </BContainer>
  );
};

export default StoreInfo;

const styles = StyleSheet.create({});
