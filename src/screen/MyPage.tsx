import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../globalStyle';
import ContentItem from '../components/MyPage/ContentItem';
import UserInfo from '../components/MyPage/UserInfo';
import TabMyPage from '../utils/svgs/bottonTab/TabMyPage';
import MyPageCheck from '../utils/svgs/myPage/MyPageCheck';
import MyPageHeart from '../utils/svgs/myPage/MyPageHeart';
import MyPageHistory from '../utils/svgs/myPage/MyPageHistory';
import MyPageMap from '../utils/svgs/myPage/MyPageMap';
import MyPageQr from '../utils/svgs/myPage/MyPageQr';
import MyPageOption from '../utils/svgs/MyPageOption';

const MyPage = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: SWidth * 40}}>
      <UserInfo />
      <View style={styles.contentContainer}>
        <ContentItem
          icon={<MyPageHeart />}
          title="관심 가게"
          onPress={() => {}}
        />
        <ContentItem
          icon={<MyPageHistory />}
          title="최근 본 게시물"
          onPress={() => {}}
        />
        <ContentItem
          icon={<MyPageCheck />}
          title="참여 이벤트"
          onPress={() => {}}
        />
        <View style={{marginTop: SWidth * 10}}>
          <ContentItem
            icon={<TabMyPage />}
            title="회원 정보 수정"
            onPress={() => {}}
          />
          <ContentItem
            icon={<MyPageMap />}
            title="내 동네 설정"
            onPress={() => {}}
          />
          <ContentItem
            icon={<MyPageQr />}
            title="QR 코드 스캔"
            onPress={() => {}}
          />
          <ContentItem
            icon={<MyPageOption />}
            title="설정"
            onPress={() => {}}
          />
        </View>
        <View style={{marginTop: SWidth * 10}}>
          <ContentItem icon={<TabMyPage />} title="FAQ" onPress={() => {}} />
          <ContentItem
            icon={<MyPageMap />}
            title="고객센터"
            onPress={() => {}}
          />
          <ContentItem
            icon={<MyPageQr />}
            title="의견 보내기"
            onPress={() => {}}
          />
          <ContentItem
            icon={<MyPageOption />}
            title="약관 및 정책"
            onPress={() => {}}
          />
        </View>
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
    marginTop: SWidth * 32,
    backgroundColor: '#A1A1A1',
  },
});
