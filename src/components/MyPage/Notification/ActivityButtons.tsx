import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import AlarmItem from './AlarmItem';
import MyNContainer from './MyNContainer';

const ActivityButtons = () => {
  const [alarmList, setAlarmList] = useState([
    {
      id: 1,
      title: '댓글',
      subTitle: '내 게시물의 새 댓글',
      click: false,
    },
    {
      id: 2,
      title: '좋아요',
      subTitle: '내 게시물의 좋아요',
      click: false,
      border: true,
    },
  ]);

  const handlePress = (id: number) => {
    setAlarmList(prev =>
      prev.map(item => (item.id === id ? {...item, click: !item.click} : item)),
    );
  };
  return (
    <MyNContainer marginTop={SWidth * 32} title="활동 알림">
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

export default ActivityButtons;

const styles = StyleSheet.create({});
