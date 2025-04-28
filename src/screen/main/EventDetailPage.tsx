import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SText from '../../components/Elements/SText';
import StoreItemIconTitle from '../../components/MyPage/Recent/StoreItemIconTitle';
import Calendar24 from '../../utils/svgs/businessPage/Calendar24';

const EventDetailPage = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View style={styles.container}>
      <View>
        {/* <SCarousel
        images={data.img.filter((img): img is string => !!img)}
        height={SWidth * 224}
      /> */}
        <View style={styles.topTextContainer}>
          <View style={styles.titleContainer}>
            <View style={{gap: SWidth * 8}}>
              <SText
                fStyle="BlgSb"
                text={'카페드파리'}
                color={colors.text.disabled}
              />
              <SText fStyle="Hsm" text={'신메뉴 출시 기념 전 메뉴 20% 할인'} />
            </View>
            <View style={styles.dateContainer}>
              <StoreItemIconTitle
                icon={<Calendar24 />}
                title="2월 1일 (목) ~ 2월 28일 (수)"
              />
              <View style={styles.dDayBox}>
                <SText
                  fStyle="BmdSb"
                  text={'D-13'}
                  color={colors.text.interactive.inverse}
                />
              </View>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <SText fStyle="BlgSb" text={'이벤트 내용'} />
            <View style={{gap: SWidth * 8}}>
              <SText fStyle="BlgRg" text={'· 신메뉴 주분시 전 메뉴 20% 할인'} />
              <SText
                fStyle="BlgRg"
                text={'· 리뷰 작성시 3,000원 할인권 증정'}
              />
            </View>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default EventDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SWidth * 16,
    justifyContent: 'space-between',
  },

  topTextContainer: {
    paddingHorizontal: SWidth * 8,
  },

  titleContainer: {
    paddingVertical: SWidth * 24,
    gap: SWidth * 20,
  },

  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },

  dDayBox: {
    height: SWidth * 24,
    borderWidth: 1.5,
    borderColor: colors.border.interactive.primaryHovered,
    borderRadius: 999,
    backgroundColor: colors.interactive.primary,
    paddingHorizontal: SWidth * 10,
    justifyContent: 'center',
  },

  contentContainer: {
    paddingVertical: SWidth * 20,
    gap: SWidth * 12,
  },
});
