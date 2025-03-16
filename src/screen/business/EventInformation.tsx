import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import BusinessContentText from '../../components/BusinessPage/Basic/BusinessContentText';
import BusinessTitleContainer from '../../components/BusinessPage/Basic/BusinessTitleContainer';
import BContainer from '../../components/BusinessPage/BContainer';
import EventAddButton from '../../components/BusinessPage/Event/EventAddButton';

const EventInformation = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <View style={styles.container}>
      <EventAddButton onPress={() => {}} />
      <BContainer>
        <BusinessTitleContainer
          title="이벤트 정보"
          deleteButton={true}
          onClick={isClicked}
          deleteOnPress={() => {}}
          onPress={() => setIsClicked(!isClicked)}
        />
        <BusinessContentText
          title="혜택"
          content="첫 방문 고객에게 무료 음료 증정"
          placeholder="예) 전 메뉴 10% 할인"
          color={'#525252'}
          onClick={isClicked}
        />
        <BusinessContentText
          title="기간"
          content="2025년 3월 15일 ~ 2025년 3월 31일"
          color={'#525252'}
          onClick={isClicked}
        />
        <BusinessContentText
          title="이벤트 설명"
          content="이벤트는 3월 15일부터 31일까지 진행되며, 매일 선착순 50명에게 특별 음료도 제공하니 놓치지 마세요!"
          color={'#525252'}
          onClick={isClicked}
        />
      </BContainer>
    </View>
  );
};

export default EventInformation;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
  },
});
