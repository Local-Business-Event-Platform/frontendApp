import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors, SWidth} from '../../../../globalStyle';
import Update20 from '../../../utils/svgs/businessPage/Update20';
import {BDataProps} from '../../../utils/types/businessType';
import SButton40 from '../../Elements/SButton40';
import SText from '../../Elements/SText';
import BContainer from '../BContainer';

import BTitleButton from '../BTitleButton2';
import BTitleText from '../BTitleText';

type EventListProps = {
  data: BDataProps;
  setEventUpdate: (value: boolean) => void;
};

const EventList = ({data, setEventUpdate}: EventListProps) => {
  return (
    <View style={{paddingBottom: SWidth * 24}}>
      <BContainer>
        <BTitleButton
          title="이벤트 정보"
          titleSize="Hsm"
          onPress={() => setEventUpdate(true)}
          buttonText={'수정하기'}
          buttonTextColor={colors.white}
        />
        <BTitleText
          title="이벤트명"
          color={colors.text.tertiary}
          content={data ? '첫 방문 고객에게 무료 음료 증정' : '혜택 입력'}
          contentColor={colors.text.secondary}
        />
        <BTitleText
          title="기간"
          color={colors.text.tertiary}
          content={'2025년 3월 15일 ~ 2025년 3월 31일'}
          contentColor={colors.text.secondary}
        />
        <BTitleText
          title="이벤트 내용"
          color={colors.text.tertiary}
          content={
            '이벤트는 3월 15일부터 3월 31일까지 진행되며, 매일 선착순 50명에게 특별 음료도 제공하니 놓치지마세요!'
          }
          contentColor={colors.text.secondary}
        />
        <BTitleText
          title="유의사항"
          color={colors.text.tertiary}
          content={
            '· 타 쿠폰 및 혜택과 중복 적용 불가합니다. \n· 매장 방문 시에만 적용됩니다.'
          }
          contentColor={colors.text.secondary}
        />
        <BTitleText
          title="참여조건"
          color={colors.text.tertiary}
          content={'1개 아이디당 1일 1회 참여가능'}
          contentColor={colors.text.secondary}
        />
        <View style={styles.codeContainer}>
          <View style={styles.codeTitle}>
            <BTitleText
              title="이벤트 코드"
              color={colors.text.tertiary}
              content={'2235'}
              contentColor={colors.text.secondary}
            />
            <SButton40
              title="코드 새로 생성"
              textColor={colors.icon.secondary}
              ButtonColor={colors.bg.interactive.secondaryHovered}
              icon={<Update20 />}
              onPress={() => {}}
            />
          </View>
          <View>
            <SText
              fStyle="BmdMd"
              text={'· 해당 코드 입력 시 고객의 이벤트 참여가 완료됩니다.'}
              color={colors.text.secondary}
            />
            <SText
              fStyle="BmdMd"
              text={'· 코드 유출되는 경우 플랫폼은 책임을 지지않습니다.'}
              color={colors.text.secondary}
            />
            <SText
              fStyle="BmdMd"
              text={'· 보안으로 인해 이벤트 코드를 직접 초기화 할 수 있습니다.'}
              color={colors.text.secondary}
            />
          </View>
        </View>
      </BContainer>
    </View>
  );
};

export default EventList;

const styles = StyleSheet.create({
  codeContainer: {
    gap: SWidth * 16,
  },

  codeTitle: {
    alignSelf: 'flex-start',
    gap: SWidth * 4,
  },
});
