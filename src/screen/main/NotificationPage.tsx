import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {colors} from '../../../globalStyle';
import NotificationItem from '../../components/MainPage/Notification/NotificationItem';
import Home24 from '../../utils/svgs/bottonTab/Home24';
import Comment24 from '../../utils/svgs/mainPage/Comment24';
import Heart24 from '../../utils/svgs/myPage/Heart24';
import Pen24 from '../../utils/svgs/storeDetailPage/Pen24';

const NotificationPage = () => {
  const [notificationData, setNotificationData] = useState([
    {
      id: 1,
      title: '후기',
      date: '1일 전',
      content: '새 댓글이 달렸어요. 지금 확인해보세요.',
      check: false,
    },
    {
      id: 2,
      title: '대글',
      date: '2일 전',
      content: '새 댓글이 달렸어요. 지금 확인해보세요.',
      check: false,
    },
    {
      id: 3,
      title: '좋아요',
      date: '2일 전',
      content: '좋아요를 받았어요. 지금 확인해보세요.',
      check: false,
    },
    {
      id: 4,
      title: '관심가게',
      date: '2일 전',
      content:
        '카페 모카모카모카빈에서 새로운 이벤트를 등록했어요. 지금 확인해보세요.',
      check: false,
    },
  ]);

  const renderIcon = (title: string) => {
    switch (title) {
      case '후기':
        return <Pen24 color={colors.interactive.primary} />;
      case '대글':
        return <Comment24 />;
      case '좋아요':
        return <Heart24 color={colors.interactive.primary} />;
      case '관심가게':
        return <Home24 color={colors.interactive.primary} />;
    }
  };
  console.log('NotificationPage', notificationData);
  return (
    <View style={styles.container}>
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        data={notificationData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <NotificationItem
            icon={renderIcon(item.title)!}
            title={item.title}
            date={item.date}
            content={item.content}
            opacity={item.check ? 0.3 : 1}
            onPress={() => {
              setNotificationData(prev =>
                prev.map(checked =>
                  checked.id === item.id ? {...checked, check: true} : checked,
                ),
              );
            }}
          />
        )}
      />
    </View>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
