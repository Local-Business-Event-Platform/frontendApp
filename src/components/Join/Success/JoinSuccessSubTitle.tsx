import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {JoinSuccessSubTitleProps} from '../../../utils/types/joinType';
import SText from '../../Elements/SText';

const JoinSuccessSubTitle = ({userType}: JoinSuccessSubTitleProps) => {
  return (
    <View style={{gap: userType === 1 ? SWidth * 77 : SWidth * 53}}>
      <SText
        nLine={2}
        flexShrink={1}
        lineHeight={SWidth * 20}
        fStyle="BlgRg"
        text={
          userType === 1
            ? '놓치기 아까운 우리 동네 이벤트, 지금 확인하세요!'
            : '우리 가게를 알릴 기회,'
        }
      />
      {userType === 2 && (
        <>
          <SText
            nLine={2}
            flexShrink={1}
            lineHeight={SWidth * 20}
            fStyle="BlgRg"
            text={'가게를 등록하고 첫 이벤트를 등록해보세요!'}
          />
        </>
      )}
      <View style={styles.iconImage}>
        <SText
          fStyle="BlgSb"
          text={'(아이콘, 이미지 들어갈 예정)'}
          color={colors.tertiary}
        />
      </View>
    </View>
  );
};

export default JoinSuccessSubTitle;

const styles = StyleSheet.create({
  iconImage: {
    width: '100%',
    height: SWidth * 248,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SWidth * 12,
    backgroundColor: '#F5F5F5',
  },
});
