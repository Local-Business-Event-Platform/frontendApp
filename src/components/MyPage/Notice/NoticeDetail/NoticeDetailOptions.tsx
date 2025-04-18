import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import Tool24 from '../../../../utils/svgs/myPage/Tool24';
import SText from '../../../Elements/SText';

const NoticeDetailOptions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gapStyle}>
        <View style={styles.titleContainer}>
          <Tool24 />
          <SText fStyle="BlgSb" text={'제한되는 기능'} />
        </View>
        <SText
          fStyle="BlgRg"
          text={'· 회원 정보 수정'}
          color={colors.text.secondary}
        />
        <SText
          fStyle="BlgRg"
          text={'· 로그인/로그아웃'}
          color={colors.text.secondary}
        />
        <SText
          fStyle="BlgRg"
          text={'· 포인트 적립/사용'}
          color={colors.text.secondary}
        />
      </View>
      <View>
        <SText
          fStyle="BlgRg"
          text={'더 나은 서비스를 위해 최선을 다하겠습니다.'}
        />
        <SText fStyle="BlgRg" text={'이용에 불편을 드려 죄송합니다'} />
      </View>
    </View>
  );
};

export default NoticeDetailOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SWidth * 24,
    gap: SWidth * 24,
  },

  gapStyle: {
    gap: SWidth * 8,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
