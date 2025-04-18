import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import MyPage24 from '../../../../utils/svgs/bottonTab/MyPage24';
import Calendar24 from '../../../../utils/svgs/businessPage/Calendar24';
import SText from '../../../Elements/SText';

const NoticeDetailContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <View style={styles.contentTitleContainer}>
          <View style={styles.rowLine}>
            <MyPage24 color={colors.icon.info01} />
            <SText
              fStyle="BmdSb"
              text={'대상 : 전체 사용자'}
              color={colors.text.info}
            />
          </View>
          <View style={styles.rowLine}>
            <Calendar24 color={colors.icon.info01} />
            <SText
              fStyle="BmdSb"
              text={'일시 : 2025.03.27(수) 02:00 ~ 06:00'}
              color={colors.text.info}
            />
          </View>
        </View>
        <SText
          flexShrink={1}
          nLine={100}
          lineHeight={SWidth * 24}
          fStyle="BlgRg"
          text={
            '더 안정적인 서비스 제공을 위해 점검이 진행됩니다. 해당 시간에는 서비스 일부 기능이 제한될 수 있어요. 점검 종료 후에는 정상적으로 이용하실 수 있어요.'
          }
        />
        <SText
          flexShrink={1}
          nLine={100}
          lineHeight={SWidth * 20}
          fStyle="BmdRg"
          text={
            '* 점검 시간은 상황에 따라 조정될 수 있습니다. 변경 사항이 있을 경우 별도로 공지드리겠습니다.'
          }
          color={colors.text.tertiary}
        />
      </View>
    </View>
  );
};

export default NoticeDetailContent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SWidth * 24,
  },

  contentBox: {
    borderRadius: SWidth * 8,
    backgroundColor: colors.bg.infoSubtle,
    padding: SWidth * 20,
    gap: SWidth * 20,
  },

  contentTitleContainer: {
    gap: SWidth * 4,
  },

  rowLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
