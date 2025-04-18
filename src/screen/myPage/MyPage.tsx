import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import ContentItem from '../../components/MyPage/ContentItem';
import UserInfo from '../../components/MyPage/UserInfo';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {storeMyPageList, userMyPageList} from '../../utils/listData';

const MyPage = () => {
  const data = {
    userNickname: '닉네임',
    userName: '이름',
    userImage: Image.resolveAssetSource(
      require('../../assets/images/myPageImage.png'),
    ).uri,
    userType: 'user',
  };

  const myPageList = (userType: string) => {
    switch (userType) {
      case 'user':
        return userMyPageList;
      case 'store':
        return storeMyPageList;
    }
  };

  const navigation = useCustomNavigation();
  return (
    <ScrollView
      style={styles.container}
      overScrollMode="never"
      contentContainerStyle={{
        paddingBottom: SWidth * 40,
        gap: data.userType === 'user' ? SWidth * 36 : SWidth * 24,
      }}>
      <UserInfo userInfo={data} />
      <View style={styles.contentContainer}>
        {myPageList(data.userType)?.map(item => (
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
    backgroundColor: '#A1A1A11A',
  },
});
