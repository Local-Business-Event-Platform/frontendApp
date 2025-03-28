import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import NoticeItem from '../../components/MyPage/Notice/NoticeItem';

const NoticePage = () => {
  const noticeList = [
    {
      id: 1,
      box: true,
      boxTitle: '중요',
      title: '서비스 점검 안내(3/27)',
      date: '2024.02.15',
      content:
        '정기 점검으로 인해 3월 27일 오전 2시부터 6시까지 서비스 이용이 제한됩니다.',
    },
    {
      id: 2,
      box: true,
      boxTitle: 'NEW',
      title: '봄맞이 이벤트 안내',
      date: '2024.02.15',
      content:
        '3월 한정 봄맞이 특별 이벤트를 진행합니다. 다양한 혜택을 놓치지 말고 확인해보세요.',
    },
    {
      id: 3,
      title: '앱 업데이트 출시 안내 v.1.0.0',
      date: '2024.02.15',
      content:
        '안정성 개선 및 버그 수정이 포함된 새로운 버전이 출시되었습니다. 확인해보세요',
    },
    {
      id: 4,
      title: '앱 업데이트 출시 안내 v.1.0.0',
      date: '2024.02.15',
      content:
        '안정성 개선 및 버그 수정이 포함된 새로운 버전이 출시되었습니다. 확인해보세요',
    },
  ];

  return (
    <View style={styles.container}>
      {noticeList.map(notice => (
        <NoticeItem
          key={notice.id}
          box={notice.box}
          backgroundColor={notice.boxTitle === '중요' ? '#EFF6FF' : '#FAFAFA'}
          boxTitle={notice.boxTitle!}
          boxColor={notice.boxTitle === '중요' ? '#155DFC' : '#404040'}
          title={notice.title}
          date={notice.date}
          content={notice.content}
        />
      ))}
    </View>
  );
};

export default NoticePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 16,
    paddingHorizontal: SWidth * 24,
    gap: SWidth * 16,
  },
});
