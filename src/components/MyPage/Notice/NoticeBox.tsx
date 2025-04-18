import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {NoticeBoxProps} from '../../../utils/types/myPage';
import SText from '../../Elements/SText';

const NoticeBox = ({boxColor, boxBorderColor, boxTitle}: NoticeBoxProps) => {
  return (
    <View
      style={[
        styles.boxStyle,
        {backgroundColor: boxColor, borderColor: boxBorderColor},
      ]}>
      <SText
        fStyle="BmdMd"
        text={boxTitle}
        color={colors.text.interactive.inverse}
      />
    </View>
  );
};

export default NoticeBox;

const styles = StyleSheet.create({
  boxStyle: {
    height: SWidth * 28,
    paddingHorizontal: SWidth * 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    borderWidth: 1,
  },
});
