import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import {NoticeDetailWarningProps} from '../../../../utils/types/myPage';
import SText from '../../../Elements/SText';

const NoticeDetailWarning = ({icon, content}: NoticeDetailWarningProps) => {
  return (
    <View style={styles.container}>
      {icon}
      <SText fStyle="BlgRg" text={content} />
    </View>
  );
};

export default NoticeDetailWarning;

const styles = StyleSheet.create({
  container: {
    height: SWidth * 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SWidth * 24,
    gap: SWidth * 4,
  },
});
