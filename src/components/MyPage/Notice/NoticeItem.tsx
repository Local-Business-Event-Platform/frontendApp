import React from 'react';
import {ColorValue, Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {screenNames} from '../../../utils/listData';
import SText from '../../Elements/SText';
import NoticeBox from './NoticeBox';

type NoticeItemProps = {
  noticeId: number;
  box?: boolean;
  backgroundColor: ColorValue;
  boxColor: ColorValue;
  boxBorderColor: ColorValue;
  boxTitle: string;
  title: string;
  date: string;
  content: string;
};

const NoticeItem = ({
  noticeId,
  box,
  backgroundColor,
  boxColor,
  boxBorderColor,
  boxTitle,
  title,
  date,
  content,
}: NoticeItemProps) => {
  const navigation = useCustomNavigation();
  return (
    <Pressable
      style={[styles.container, {backgroundColor: backgroundColor}]}
      onPress={() =>
        navigation.navigate(screenNames.NOTICE_DETAIL, {
          noticeId: noticeId,
        })
      }>
      <View style={styles.rowContainer}>
        <View style={[styles.rowTitle]}>
          {box && (
            <NoticeBox
              boxTitle={boxTitle}
              boxColor={boxColor}
              boxBorderColor={boxBorderColor}
            />
          )}
          <SText
            flexShrink={1}
            nLine={1}
            lineHeight={20}
            fStyle="BlgMd"
            text={title}
          />
        </View>
        <SText fStyle="BmdRg" text={date} color={colors.text.tertiary} />
      </View>
      <SText
        flexShrink={1}
        nLine={3}
        fStyle="BmdRg"
        text={content}
        color={colors.text.tertiary}
      />
    </Pressable>
  );
};

export default NoticeItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: SWidth * 8,
    padding: SWidth * 20,
    gap: SWidth * 8,
  },

  rowContainer: {
    flexDirection: 'row',
    gap: SWidth * 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rowTitle: {
    flex: 1,
    height: SWidth * 28,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },

  boxStyle: {
    height: SWidth * 28,
    paddingHorizontal: SWidth * 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    borderWidth: 1,
  },
});
