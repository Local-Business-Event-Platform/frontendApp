import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {storeActivityList, userActivityList} from '../../../utils/listData';
import {UserTypeProps} from '../../../utils/types/myPage';
import AlarmItem from './AlarmItem';
import MyNContainer from './MyNContainer';

const ActivityButtons = ({isAllClicked, userType}: UserTypeProps) => {
  const [alarmList, setAlarmList] = useState(
    userType === 'user' ? userActivityList : storeActivityList,
  );

  useEffect(() => {
    setAlarmList(prev => prev.map(item => ({...item, click: isAllClicked})));
  }, [isAllClicked]);

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
