import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../../globalStyle';
import Calendar24 from '../../../utils/svgs/businessPage/Calendar24';
import SInput from '../../Elements/SInput';
import BButtonTitle from '../BButtonTitle';
import BContainer from '../BContainer';
import BContentArea from '../BContentArea';
import BContentTime from '../BContentTime';
import EventConditions from './EventConditions';

type EventAddProps = {
  setEventUpdate: (value: boolean) => void;
};

const EventAdd = ({setEventUpdate}: EventAddProps) => {
  return (
    <BContainer>
      <BButtonTitle
        title="이벤트 정보"
        titleSize="Hsm"
        buttonText={'수정완료'}
        buttonTextColor={colors.text.interactive.inverse}
        onClick={true}
        deleteButton={true}
        deleteOnPress={() => {}}
        onPress={() => setEventUpdate(false)}
      />
      <SInput
        value=""
        onChangeText={() => {}}
        title="혜택"
        titleColor={colors.text.tertiary}
        placeholder="예) 전 메뉴 10% 할인"
      />
      <BContentTime
        title="기간"
        startTitle="시작일"
        endTitle="종료일"
        DateIcon={<Calendar24 />}
        color={colors.text.tertiary}
        content=""
        contentColor={colors.text.primary}
        onClick={true}
        startPress={() => {}}
        endPress={() => {}}
      />
      <BContentArea
        value=""
        onChangeText={() => {}}
        title="이벤트 내용"
        color={colors.text.tertiary}
        content=""
        contentColor={colors.text.primary}
        textLength={true}
        placeholder="상세 설명 (200자 내외)"
      />
      <BContentArea
        value=""
        onChangeText={() => {}}
        title="유의사항"
        color={colors.text.tertiary}
        content=""
        contentColor={colors.text.primary}
        textLength={true}
        placeholder="상세 설명 (200자 내외)"
      />
      <EventConditions />
      <SInput
        editable={false}
        value=""
        onChangeText={() => {}}
        title="이벤트 코드"
        titleColor={colors.text.tertiary}
      />
    </BContainer>
  );
};

export default EventAdd;

const styles = StyleSheet.create({});
