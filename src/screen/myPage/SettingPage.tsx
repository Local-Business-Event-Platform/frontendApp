import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SettingItem from '../../components/MyPage/Settings/SettingItem';

const SettingPage = () => {
  const settingList = [
    {id: 1, title: '온보딩', icon: true, onPress: () => {}},
    {id: 2, title: '약관 및 정책', icon: true, onPress: () => {}},
    {id: 3, title: '버전 정보 v.1.0.0', icon: false, onPress: () => {}},
    {id: 4, title: '탈퇴하기', icon: false, onPress: () => {}},
    {id: 5, title: '로그아웃', icon: false, onPress: () => {}},
    {id: 6, title: '캐시 데티터 삭제', icon: false, onPress: () => {}},
  ];

  return (
    <View style={styles.container}>
      {settingList.map((item, index) => (
        <SettingItem
          key={item.id}
          title={item.title}
          icon={item.icon}
          onPress={item.onPress}
          borderBottomWidth={index === settingList.length - 1 ? 0 : 1}
        />
      ))}
    </View>
  );
};

export default SettingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 16,
    paddingHorizontal: SWidth * 24,
  },
});
