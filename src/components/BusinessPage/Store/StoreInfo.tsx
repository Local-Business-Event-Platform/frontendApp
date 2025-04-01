import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {BDataProps} from '../../../utils/types/businessType';
import BButtonTitle from '../BButtonTitle';
import BContainer from '../BContainer';
import BContentArea from '../BContentArea';
import BContentText from '../BContentText';
import BContentTime from '../BContentTime';
import StoreImage from './StoreImage';

type BasicInformationProps = {
  data: BDataProps;
};

const StoreInfo = ({data}: BasicInformationProps) => {
  const [storeAdd, setStoreAdd] = useState(false);
  const [storeData, setStoreData] = useState<{
    images: {url: string; name: string; type: string}[];
    title: string;
    time: string;
    content: string;
  }>({
    images: [],
    title: '',
    time: '',
    content: '',
  });
  console.log('storeData', storeData, storeAdd);
  const handleStoreAdd = async () => {
    setStoreAdd(!storeAdd);
    try {
      if (storeData.title !== '' && storeData.content !== '') {
        console.log('가게 정보 등록', storeData);
        setStoreAdd(false);
      } else {
        console.log('필수 정보가 없습니다.');
      }
    } catch (error) {
      console.error(error);
      setStoreAdd(false);
    }
  };
  return (
    <BContainer>
      <BButtonTitle
        title="가게 정보"
        buttonText={data.storeName ? '수정하기' : '등록하기'}
        buttonTextColor={storeAdd ? 'white' : '#525252'}
        onClick={storeAdd}
        onPress={handleStoreAdd}
      />
      <StoreImage
        storeAdd={storeAdd}
        storeImages={storeData.images}
        setStoreImages={images =>
          setStoreData(prevState => ({
            ...prevState,
            images,
          }))
        }
      />
      <BContentText
        onClick={storeAdd}
        title="가게 이름"
        placeholder="가게 이름"
        color={'#525252'}
        content={
          storeData.title
            ? storeData.title
            : data.storeName
            ? data.storeName
            : '가게 이름'
        }
        value={storeData.title ? storeData.title : data.storeName}
        contentColor={storeData.title || data.storeName ? '#404040' : '#A1A1A1'}
        onChangeText={() => {
          setStoreData({
            ...storeData,
            title: storeData.title,
          });
        }}
      />
      <BContentTime
        title="영업시간"
        content="00:00 ~ 00:00"
        contentColor={
          storeData.time || data.storeBusinessTime ? '#404040' : '#A1A1A1'
        }
        color={'#525252'}
        onClick={storeAdd}
      />
      <BContentArea
        value={storeData.content}
        onChangeText={() => {
          setStoreData({
            ...storeData,
            content: storeData.content,
          });
        }}
        title="가게 설명"
        color={'#525252'}
        content="가게 상세 설명 (200자 내외)"
        contentColor={
          storeData.content || data.storeContent ? '#404040' : '#A1A1A1'
        }
        onClick={storeAdd}
      />
    </BContainer>
  );
};

export default StoreInfo;

const styles = StyleSheet.create({});
