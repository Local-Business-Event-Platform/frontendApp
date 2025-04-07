import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import Calendar24 from '../../utils/svgs/businessPage/Calendar24';
import CircleTime24 from '../../utils/svgs/businessPage/CircleTime24';
import {BContentTimeProps} from '../../utils/types/businessType';
import SText from '../Elements/SText';
import EventDateButton from './Event/EventDateButton';

const BContentTime = ({
  title,
  content,
  contentColor = colors.disabled,
  color,
  underline,
  onClick,
}: BContentTimeProps) => {
  return (
    <View style={styles.container}>
      <SText
        fStyle="BmdMd"
        text={title}
        color={color}
        textDecorationLine={underline}
        lineColor={color}
      />
      {onClick ? (
        <View style={styles.dateContainer}>
          <EventDateButton
            title={`${title === '기간' ? '시작일' : '오픈 시간'}`}
            icon={title === '기간' ? <Calendar24 /> : <CircleTime24 />}
            onPress={() => {}}
          />
          <EventDateButton
            title={`${title === '기간' ? '종료일' : '마감 시간'}`}
            icon={title === '기간' ? <Calendar24 /> : <CircleTime24 />}
            onPress={() => {}}
          />
        </View>
      ) : (
        <SText
          nLine={10}
          flexShrink={1}
          lineHeight={SWidth * 24}
          fStyle="BxlSb"
          text={content}
          color={contentColor}
        />
      )}
    </View>
  );
};

export default BContentTime;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
    gap: SWidth * 8,
  },

  dateContainer: {
    flexDirection: 'row',
    gap: SWidth * 8,
  },
});
