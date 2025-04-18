import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import SText from '../../../Elements/SText';
import NoticeBox from '../NoticeBox';

type NoticeDetailTitleProps = {
  boxTitle: string;
  title: string;
  date: string;
};

const NoticeDetailTitle = ({boxTitle, title, date}: NoticeDetailTitleProps) => {
  return (
    <View style={styles.container}>
      <NoticeBox
        boxTitle={boxTitle}
        boxColor={colors.border.focusRing}
        boxBorderColor={colors.bg.interactive.primary}
      />
      <SText fStyle="Hsm" text={title} />
      <SText fStyle="BlgSb" text={date} color={colors.text.disabled} />
    </View>
  );
};

export default NoticeDetailTitle;

const styles = StyleSheet.create({
  container: {
    height: SWidth * 144,
    borderBottomWidth: 1,
    borderColor: colors.border.secondary,
    paddingHorizontal: SWidth * 24,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: SWidth * 8,
  },
});
