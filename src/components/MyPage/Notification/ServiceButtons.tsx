import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import AlarmItem from './AlarmItem';
import MyNContainer from './MyNContainer';

const ServiceButtons = () => {
  const [alarmList, setAlarmList] = useState([
    {
      id: 1,
      title: '관심 가게 소식',
      subTitle: '새로운 소식 업데이트',
      click: false,
    },
    {
      id: 2,
      title: '추천 이벤트',
      subTitle: '새로운 소식 업데이트',
      click: false,
      border: true,
    },
    {
      id: 3,
      title: '공지사항',
      subTitle: '서비스 업데이트 및 공지',
      click: false,
    },
  ]);

  const handlePress = (id: number) => {
    setAlarmList(prev =>
      prev.map(item => (item.id === id ? {...item, click: !item.click} : item)),
    );
  };

  return (
    <MyNContainer marginTop={SWidth * 48} title="서비스 알림">
      {alarmList.map(item => (
        <AlarmItem
          borderWidth={item.border ? 1 : 0}
          key={item.id}
          title={item.title}
          subTitle={item.subTitle}
          click={item.click}
          onPress={() => handlePress(item.id)}
        />
      ))}
    </MyNContainer>
  );
};

export default ServiceButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 48,
  },

  titleContainer: {
    height: SWidth * 32,
    justifyContent: 'center',
    borderBottomWidth: 1.5,
    borderColor: '#000000',
  },
});
