import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import BAddButton from '../../components/BusinessPage/BAddButton';
import BButtonTitle from '../../components/BusinessPage/BButtonTitle';
import BContainer from '../../components/BusinessPage/BContainer';
import BContentArea from '../../components/BusinessPage/BContentArea';
import BContentTime from '../../components/BusinessPage/BContentTime';
import EventConditions from '../../components/BusinessPage/Event/EventConditions';
import SInput from '../../components/Elements/SInput';
import Calendar24 from '../../utils/svgs/businessPage/Calendar24';
import {BDataProps} from '../../utils/types/businessType';

type BasicInformationProps = {
  data: BDataProps;
};

const EventInformation = ({data}: BasicInformationProps) => {
  const [eventAdd, setEventAdd] = useState(false);

  return (
    <View style={styles.container}>
      <BAddButton title="이벤트 추가" onPress={() => setEventAdd(!eventAdd)} />
      {/* <EventList data={data} /> */}
      <BContainer>
        <BButtonTitle
          title="이벤트 정보"
          titleSize="Hsm"
          buttonText={'수정완료'}
          buttonTextColor={colors.text.interactive.inverse}
          onClick={true}
          deleteButton={true}
          deleteOnPress={() => {}}
          onPress={() => {}}
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
    </View>
  );
};

export default EventInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 24,
  },
});
