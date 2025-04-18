import React from 'react';
import {StyleSheet, View} from 'react-native';
import NoticeDetailContent from '../../../components/MyPage/Notice/NoticeDetail/NoticeDetailContent';
import NoticeDetailOptions from '../../../components/MyPage/Notice/NoticeDetail/NoticeDetailOptions';
import NoticeDetailTitle from '../../../components/MyPage/Notice/NoticeDetail/NoticeDetailTitle';
import NoticeDetailWarning from '../../../components/MyPage/Notice/NoticeDetail/NoticeDetailWarning';
import Warning24 from '../../../utils/svgs/myPage/Warning24';

type NoticeDetailPageProps = {
  route?: {
    params: {
      noticeId: number;
    };
  };
};

const NoticeDetailPage = ({route}: NoticeDetailPageProps) => {
  const {noticeId} = route!.params;
  return (
    <View style={styles.container}>
      <NoticeDetailTitle
        boxTitle={'중요'}
        title={'3.27(수) 서비스 점검 예정'}
        date={'2025.03.10'}
      />
      <NoticeDetailWarning
        icon={<Warning24 />}
        content={'이 시간 동안 일부 기능 사용이 제한돼요.'}
      />
      <NoticeDetailContent />
      <NoticeDetailOptions />
    </View>
  );
};

export default NoticeDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
