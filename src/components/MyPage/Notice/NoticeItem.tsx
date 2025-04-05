import React from 'react';
import {ColorValue, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SText from '../../Elements/SText';

type NoticeItemProps = {
  box?: boolean;
  backgroundColor: ColorValue;
  boxColor: ColorValue;
  boxTitle: string;
  title: string;
  date: string;
  content: string;
};

const NoticeItem = ({
  box,
  backgroundColor,
  boxColor,
  boxTitle,
  title,
  date,
  content,
}: NoticeItemProps) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.rowContainer}>
        <View style={[styles.rowTitle]}>
          {box && (
            <View style={[styles.boxStyle, {backgroundColor: boxColor}]}>
              <SText fStyle="BmdMd" text={boxTitle} color={colors.white} />
            </View>
          )}
          <SText
            flexShrink={1}
            nLine={1}
            lineHeight={20}
            fStyle="BlgMd"
            text={title}
          />
        </View>
        <SText fStyle="BmdRg" text={date} color={colors.tertiary} />
      </View>
      <SText
        flexShrink={1}
        nLine={3}
        fStyle="BmdRg"
        text={content}
        color={colors.tertiary}
      />
    </View>
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
  },
});
