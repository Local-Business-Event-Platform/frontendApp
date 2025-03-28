import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import ContentItem from '../../components/MyPage/ContentItem';
import UserInfo from '../../components/MyPage/UserInfo';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {storeMyPageList, userMyPageList} from '../../utils/listData';

const MyPage = () => {
  const userType = 'user';
  const menuList = userType === 'user' ? userMyPageList : storeMyPageList;
  const navigation = useCustomNavigation();
  return (
    <ScrollView
      style={styles.container}
      overScrollMode="never"
      contentContainerStyle={{paddingBottom: SWidth * 40}}>
      <UserInfo />
      <View style={styles.contentContainer}>
        {menuList.map(item => (
          <View
            key={item.id}
            style={item.marginTop ? {marginTop: SWidth * 8} : undefined}>
            <ContentItem
              onPress={() => navigation.navigate(item.navigation)}
              key={item.id}
              icon={<item.icon />}
              title={item.title}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SWidth * 24,
  },
  contentContainer: {
    marginTop: SWidth * 40,
    backgroundColor: '#A1A1A11A',
  },
});
