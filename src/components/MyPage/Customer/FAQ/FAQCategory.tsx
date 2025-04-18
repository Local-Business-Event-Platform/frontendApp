import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import SFlatList from '../../../Elements/SFlatList';
import MyPageTitle from '../../MyPageTitle';
import FAQCategoryItem from './FAQCategoryItem';

const FAQCategory = () => {
  const itemList = [
    {
      id: 1,
      title: '계정 관리',
      onPress: () => {},
    },
    {
      id: 2,
      title: '참여 이벤트',
      onPress: () => {},
    },
    {
      id: 3,
      title: '이용 방법',
      onPress: () => {},
    },
    {
      id: 4,
      title: '알림 설정',
      onPress: () => {},
    },
  ];

  return (
    <View style={styles.container}>
      <MyPageTitle title="카테고리" />
      <SFlatList
        data={itemList}
        gap={SWidth * 8}
        paddingHorizontal={0}
        horizontal={true}
        skeleton={<View />}
        dataItem={({item}) => (
          <FAQCategoryItem
            key={item.id}
            title={item.title}
            onPress={item.onPress}
          />
        )}
      />
    </View>
  );
};

export default FAQCategory;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 12,
    paddingHorizontal: SWidth * 24,
  },
});
