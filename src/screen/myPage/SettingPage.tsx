import React from 'react';
import {StyleSheet, View} from 'react-native';
import Config from 'react-native-config';
import {SWidth} from '../../../globalStyle';
import SettingItem from '../../components/MyPage/Settings/SettingItem';
import {useModalOpen} from '../../store/modalRoute';
const SettingPage = () => {
  const {setModalTitle, setContent, setModalOpen} = useModalOpen();
  const settingList = [
    {id: 1, title: '온보딩', icon: true, onPress: () => {}},
    {id: 2, title: '약관 및 정책', icon: true, onPress: () => {}},
    {
      id: 3,
      title: `버전 정보 v.${Config.APP_VERSION}`,
      icon: false,
      onPress: () => {},
    },
    {
      id: 4,
      title: '탈퇴하기',
      icon: false,
      onPress: () => {
        setModalTitle('setting');
        setContent('탈퇴');
        setModalOpen(true);
      },
    },
    {
      id: 5,
      title: '로그아웃',
      icon: false,
      onPress: () => {
        setModalTitle('setting');
        setContent('로그아웃');
        setModalOpen(true);
      },
    },
    {
      id: 6,
      title: '캐시 데티터 삭제',
      icon: false,
      onPress: () => {
        setModalTitle('setting');
        setContent('데이터');
        setModalOpen(true);
      },
    },
  ];

  return (
    <View style={styles.container}>
      {settingList.map((item, index) => (
        <SettingItem
          key={item.id}
          title={item.title}
          icon={item.icon}
          onPress={() => item.onPress()}
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
