import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../../globalStyle';
import {BDataProps} from '../../../utils/types/businessType';
import BButtonTitle from '../BButtonTitle';
import BContainer from '../BContainer';
import BContentArea from '../BContentArea';
import BContentText from '../BContentText';
import BContentTime from '../BContentTime';

type EventListProps = {
  data: BDataProps;
};

const EventList = ({data}: EventListProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <BContainer>
      <BButtonTitle
        title="이벤트 정보"
        buttonText={data ? '수정하기' : '등록하기'}
        buttonTextColor={
          isClicked
            ? colors.text.interactive.inverse
            : colors.text.interactive.secondary
        }
        deleteButton={true}
        onClick={isClicked}
        deleteOnPress={() => {}}
        onPress={() => setIsClicked(!isClicked)}
      />
      <BContentText
        value=""
        title="혜택"
        color={colors.text.tertiary}
        onChangeText={() => {}}
        content={data ? '첫 방문 고객에게 무료 음료 증정' : '혜택 입력'}
        contentColor={colors.text.secondary}
        placeholder="예) 전 메뉴 10% 할인"
        onClick={isClicked}
      />
      <BContentTime
        title="기간"
        color={colors.text.tertiary}
        content="2025년 3월 15일 ~ 2025년 3월 31일"
        contentColor={colors.text.secondary}
        onClick={isClicked}
      />

      <BContentArea
        value=""
        title="이벤트 설명"
        color={colors.text.tertiary}
        onChangeText={() => {}}
        content="이벤트는 3월 15일부터 31일까지 진행되며, 매일 선착순 50명에게 특별 음료도 제공하니 놓치지 마세요!"
        contentColor={colors.text.secondary}
        textLength={isClicked}
      />
    </BContainer>
  );
};

export default EventList;

const styles = StyleSheet.create({});
