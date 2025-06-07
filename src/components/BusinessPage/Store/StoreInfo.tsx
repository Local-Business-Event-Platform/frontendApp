import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../../globalStyle';
import CircleTime24 from '../../../utils/svgs/businessPage/CircleTime24';
import {
  BDataProps,
  BStoreInfoData,
  BStoreTimeOpen,
} from '../../../utils/types/businessType';
import BButtonTitle from '../BButtonTitle';
import BContainer from '../BContainer';
import BContentArea from '../BContentArea';
import BContentText from '../BContentText';
import BContentTime from '../BContentTime';
import StoreImage from './StoreImage';
import StoreTimeList from './StoreTimeList';

type BasicInformationProps = {
  data: BDataProps;
};

const StoreInfo = ({data}: BasicInformationProps) => {
  const [storeAdd, setStoreAdd] = useState(false);
  const [openTime, setOpenTime] = useState<BStoreTimeOpen>({
    start: false,
    end: false,
  });
  const [storeData, setStoreData] = useState<BStoreInfoData>({
    images: [],
    title: '',
    startTime: '오픈 시간',
    endTime: '마감 시간',
    content: '',
  });
  const [listWidth, setListWidth] = useState(0);
  const filteredImages = storeData.images
    .filter(item => item.url)
    .map(item => item.url);

  const handleStoreAdd = async () => {
    setStoreAdd(!storeAdd);
    try {
      if (storeData.title !== '' && storeData.content !== '') {
        console.log('가게 정보 등록', storeData);
        setStoreData({
          title: '',
          startTime: '',
          endTime: '',
          content: '',
          images: [],
        });
        setStoreAdd(false);
      } else {
        console.log('필수 정보가 없습니다.');
      }
    } catch (error) {
      console.error(error);
      setStoreAdd(false);
    }
  };

  const handleUpdate = async () => {
    setStoreAdd(!storeAdd);
    try {
      if (storeData.title !== '' || storeData.content !== '') {
        console.log('가게 정보 수정', storeData);
        setStoreData({
          title: '',
          startTime: '',
          endTime: '',
          content: '',
          images: [],
        });
        setStoreAdd(false);
      } else {
        console.log('필수 정보가 없습니다.');
      }
    } catch (error) {
      console.error(error);
      setStoreAdd(false);
    }
  };

  console.log('storeData', openTime.start, openTime.end);

  return (
    <BContainer>
      <BButtonTitle
        title="가게 정보"
        buttonText={
          data.storeName ? '수정하기' : storeAdd ? '등록완료' : '등록하기'
        }
        buttonTextColor={
          storeAdd
            ? colors.text.interactive.inverse
            : colors.text.interactive.secondary
        }
        onClick={storeAdd}
        onPress={data.storeName ? handleUpdate : handleStoreAdd}
      />
      <StoreImage
        storeAdd={storeAdd}
        storeImages={
          filteredImages.length > 0 ? filteredImages : data.storeImage
        }
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
        color={colors.text.tertiary}
        placeholder="가게 이름"
        content={storeData.title || data.storeName || '가게 이름'}
        value={storeData.title}
        contentColor={
          storeData.title || data.storeName
            ? colors.text.secondary
            : colors.text.disabled
        }
        onChangeText={text => {
          setStoreData({
            ...storeData,
            title: text,
          });
        }}
      />
      <View style={{position: 'relative'}}>
        {openTime.start && (
          <StoreTimeList
            listWidth={listWidth}
            storeData={storeData}
            setStoreData={setStoreData}
            openTime={openTime}
            setOpenTime={setOpenTime}
          />
        )}
        {openTime.end && (
          <StoreTimeList
            listWidth={listWidth}
            storeData={storeData}
            setStoreData={setStoreData}
            openTime={openTime}
            setOpenTime={setOpenTime}
          />
        )}
        <BContentTime
          title="영업시간"
          startTitle={storeData.startTime}
          endTitle={storeData.endTime}
          DateIcon={<CircleTime24 />}
          color={colors.text.tertiary}
          content="00:00 ~ 00:00"
          startTitleColor={
            storeData.startTime !== '오픈 시간'
              ? colors.text.primary
              : colors.text.disabled
          }
          endTitleColor={
            storeData.endTime !== '마감 시간'
              ? colors.text.primary
              : colors.text.disabled
          }
          contentColor={
            (storeData.startTime !== '오픈 시간' &&
              storeData.endTime !== '마감 시간') ||
            data.storeBusinessTime
              ? colors.text.secondary
              : colors.text.disabled
          }
          onClick={storeAdd}
          startBorderColor={
            openTime.start
              ? colors.border.interactive.primaryPressed
              : storeData.startTime === '오픈 시간'
              ? colors.border.secondary
              : colors.border.interactive.secondary
          }
          endBorderColor={
            openTime.end
              ? colors.border.interactive.primaryPressed
              : storeData.endTime === '마감 시간'
              ? colors.border.secondary
              : colors.border.interactive.secondary
          }
          startPress={() =>
            setOpenTime({
              start: !openTime.start,
              end: false,
            })
          }
          endPress={() =>
            setOpenTime({
              start: false,
              end: !openTime.end,
            })
          }
          onLayout={event => {
            setListWidth(event.nativeEvent.layout.width);
          }}
        />
      </View>
      <BContentArea
        value={storeData.content}
        onChangeText={text => {
          setStoreData({
            ...storeData,
            content: text,
          });
        }}
        title="가게 설명"
        color={colors.text.tertiary}
        content={
          storeData.content ||
          data.storeContent ||
          '가게 상세 설명 (200자 내외)'
        }
        contentColor={
          storeData.content || data.storeContent
            ? colors.text.secondary
            : colors.text.disabled
        }
        textLength={storeAdd}
      />
    </BContainer>
  );
};

export default StoreInfo;

const styles = StyleSheet.create({});
