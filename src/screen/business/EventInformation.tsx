import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../globalStyle';
import BAddButton from '../../components/BusinessPage/BAddButton';
import BButtonTitle from '../../components/BusinessPage/BButtonTitle';
import BContainer from '../../components/BusinessPage/BContainer';
import BContentArea from '../../components/BusinessPage/BContentArea';
import BContentText from '../../components/BusinessPage/BContentText';
import BContentTime from '../../components/BusinessPage/BContentTime';
import {BDataProps} from '../../utils/types/businessType';

type BasicInformationProps = {
  data: BDataProps;
};

const EventInformation = ({data}: BasicInformationProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <View style={styles.container}>
      <BAddButton title="이벤트 추가" onPress={() => {}} />
      <BContainer>
        <BButtonTitle
          title="이벤트 정보"
          buttonText={data ? '수정하기' : '등록하기'}
          buttonTextColor={isClicked ? 'white' : colors.tertiary}
          deleteButton={true}
          onClick={isClicked}
          deleteOnPress={() => {}}
          onPress={() => setIsClicked(!isClicked)}
        />
        <BContentText
          title="혜택"
          content={data ? '첫 방문 고객에게 무료 음료 증정' : '혜택 입력'}
          contentColor={data ? colors.secondary : colors.disabled}
          placeholder="예) 전 메뉴 10% 할인"
          color={colors.tertiary}
          onClick={isClicked}
          onChangeText={() => {}}
          value=""
        />
        <BContentTime
          contentColor={''}
          title="기간"
          content="2025년 3월 15일 ~ 2025년 3월 31일"
          color={colors.tertiary}
          onClick={isClicked}
        />

        <BContentArea
          contentColor={''}
          value=""
          onChangeText={() => {}}
          title="이벤트 설명"
          content="이벤트는 3월 15일부터 31일까지 진행되며, 매일 선착순 50명에게 특별 음료도 제공하니 놓치지 마세요!"
          color={colors.tertiary}
          onClick={isClicked}
        />
      </BContainer>
    </View>
  );
};

export default EventInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
