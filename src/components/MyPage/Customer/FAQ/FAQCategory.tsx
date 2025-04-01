import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
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
      <FlatList
        data={itemList}
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={styles.itemContainer}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
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
    marginTop: SWidth * 28,
    gap: SWidth * 12,
    paddingHorizontal: SWidth * 24,
  },

  itemContainer: {
    gap: SWidth * 8,
  },

  itemBox: {
    height: SWidth * 36,
    paddingHorizontal: SWidth * 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
});
