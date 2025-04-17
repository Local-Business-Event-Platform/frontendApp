import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import ModalDetailItem from './ModalDetailItem';

type ModalDetailPageProps = {
  id: number;
  setModalOpen: (newModalOpen: boolean) => void;
};

const ModalDetailPage = ({id, setModalOpen}: ModalDetailPageProps) => {
  const menuList = [
    {
      id: 1,
      title: '사용자 차단하기',
      titleColor: colors.text.info,
      onPress: () => {
        console.log('차단하기 클릭됨', id);
        setModalOpen(false);
      },
    },
    {
      id: 2,
      title: '댓글 신고하기',
      titleColor: colors.text.danger,
      onPress: () => {
        console.log('신고하기 클릭됨', id);
        setModalOpen(false);
      },
    },
    {
      id: 3,
      title: '취소',
      titleColor: colors.text.primary,
      onPress: () => setModalOpen(false),
    },
  ];

  return (
    <View style={styles.container}>
      {menuList.map((item, index) => (
        <ModalDetailItem
          key={item.id}
          title={item.title}
          titleColor={item.titleColor}
          border={index === menuList.length - 1 ? 0 : 1}
          onPress={item.onPress}
        />
      ))}
    </View>
  );
};

export default ModalDetailPage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: SWidth * 8,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
});
