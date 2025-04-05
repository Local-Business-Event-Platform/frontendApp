import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors, SWidth} from '../../../globalStyle';
import SButton from '../../components/Elements/SButton';
import SText from '../../components/Elements/SText';
import JoinTitle from '../../components/Join/JoinTitle';
import useCustomNavigation from '../../hooks/useCustomNavigation';

const JoinBusinessPage = () => {
  const navigation = useCustomNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <JoinTitle title1="환영합니다" title2="가입이 완료됐어요" />
        <View style={styles.contentTextContainer}>
          <SText
            nLine={1}
            flexShrink={1}
            lineHeight={SWidth * 20}
            fStyle="BlgRg"
            text={'우리 가게를 알릴 기회,'}
          />
          <SText
            nLine={1}
            flexShrink={1}
            lineHeight={SWidth * 20}
            fStyle="BlgRg"
            text={'가게를 등록하고 첫 이벤트를 등록해보세요!'}
          />
        </View>
        <View style={styles.iconImageContainer}>
          <View style={styles.iconImage}>
            <SText
              fStyle="BlgSb"
              text={'(아이콘, 이미지 들어갈 예정)'}
              color={colors.tertiary}
            />
          </View>
        </View>
      </View>
      <SButton
        ButtonColor={Colors.interactive.primary}
        title="둘러보기"
        textColor={colors.white}
        onPress={() => {}}
      />
    </View>
  );
};

export default JoinBusinessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 16,
    justifyContent: 'space-between',
  },

  topContainer: {
    paddingHorizontal: SWidth * 8,
  },

  contentTextContainer: {
    marginTop: SWidth * 37,
  },

  iconImageContainer: {
    marginTop: SWidth * 48,
  },
  iconImage: {
    width: '100%',
    height: SWidth * 248,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SWidth * 12,
    backgroundColor: '#F5F5F5',
  },
});
