import React from 'react';
import {ColorValue, StyleSheet, Text, View} from 'react-native';
import {fontFamilies, SWidth} from '../../globalStyle';

type STextProps = {
  fStyle:
    | 'H4xl'
    | 'H3xl'
    | 'H2xl'
    | 'Hxl'
    | 'Hlg'
    | 'Hmd'
    | 'Hsm'
    | 'BlgSb'
    | 'BlgMd'
    | 'BlgRg'
    | 'BmdSb'
    | 'BmdMd'
    | 'BmdRg'
    | 'BsmSb'
    | 'BsmMd'
    | 'BsmRg';
  color?: ColorValue;
  text: string | number;
};

const SText = ({fStyle, color, text}: STextProps) => {
  const boxHeightList = {
    H4xl: styles.H4xlHeight,
    H3xl: styles.H3xlHeight,
    H2xl: styles.H2xlHeight,
    Hxl: styles.HxlHeight,
    Hlg: styles.HlgHeight,
    Hmd: styles.HmdHeight,
    Hsm: styles.HsmHeight,
    BlgSb: styles.BlgSbHeight,
    BlgMd: styles.BlgMdHeight,
    BlgRg: styles.BlgRgHeight,
    BmdSb: styles.BmdSbHeight,
    BmdMd: styles.BmdMdHeight,
    BmdRg: styles.BmdRgHeight,
    BsmSb: styles.BsmSbHeight,
    BsmMd: styles.BsmMdHeight,
    BsmRg: styles.BsmRgHeight,
  };

  const fontSizeList = {
    H4xl: styles.H4xlFontSize,
    H3xl: styles.H3xlFontSize,
    H2xl: styles.H2xlFontSize,
    Hxl: styles.HxlFontSize,
    Hlg: styles.HlgFontSize,
    Hmd: styles.HmdFontSize,
    Hsm: styles.HsmFontSize,
    BlgSb: styles.BlgSbFontSize,
    BlgMd: styles.BlgMdFontSize,
    BlgRg: styles.BlgRgFontSize,
    BmdSb: styles.BmdSbFontSize,
    BmdMd: styles.BmdMdFontSize,
    BmdRg: styles.BmdRgFontSize,
    BsmSb: styles.BsmSbFontSize,
    BsmMd: styles.BsmMdFontSize,
    BsmRg: styles.BsmRgFontSize,
  };

  return (
    <View style={boxHeightList[fStyle]}>
      <Text style={[fontSizeList[fStyle], {color}]}>{text}</Text>
    </View>
  );
};

export default SText;

const styles = StyleSheet.create({
  H4xlHeight: {
    height: SWidth * 68,
    justifyContent: 'center',
  },
  H3xlHeight: {
    height: SWidth * 56,

    justifyContent: 'center',
  },
  H2xlHeight: {
    height: SWidth * 48,
    justifyContent: 'center',
  },
  HxlHeight: {
    height: SWidth * 40,
    justifyContent: 'center',
  },
  HlgHeight: {
    height: SWidth * 36,
    justifyContent: 'center',
  },
  HmdHeight: {
    height: SWidth * 32,
    justifyContent: 'center',
  },
  HsmHeight: {
    height: SWidth * 28,
    justifyContent: 'center',
  },
  BlgSbHeight: {
    height: SWidth * 20,
    justifyContent: 'center',
  },
  BlgMdHeight: {
    height: SWidth * 20,
    justifyContent: 'center',
  },
  BlgRgHeight: {
    height: SWidth * 20,
    justifyContent: 'center',
  },
  BmdSbHeight: {
    height: SWidth * 16,
    justifyContent: 'center',
  },
  BmdMdHeight: {
    height: SWidth * 16,
    justifyContent: 'center',
  },
  BmdRgHeight: {
    height: SWidth * 16,
    justifyContent: 'center',
  },
  BsmSbHeight: {
    height: SWidth * 16,
    justifyContent: 'center',
  },
  BsmMdHeight: {
    height: SWidth * 16,
    justifyContent: 'center',
  },
  BsmRgHeight: {
    height: SWidth * 16,
    justifyContent: 'center',
  },
  H4xlFontSize: {
    fontFamily: fontFamilies.pretendardSemiBold,
    fontSize: SWidth * 60,
    lineHeight: SWidth * 60,
    includeFontPadding: false,
  },
  H3xlFontSize: {
    fontFamily: fontFamilies.pretendardSemiBold,
    fontSize: SWidth * 48,
    lineHeight: SWidth * 48,
    includeFontPadding: false,
  },
  H2xlFontSize: {
    fontFamily: fontFamilies.pretendardSemiBold,
    fontSize: SWidth * 40,
    lineHeight: SWidth * 40,
    includeFontPadding: false,
  },
  HxlFontSize: {
    fontFamily: fontFamilies.pretendardSemiBold,
    fontSize: SWidth * 36,
    lineHeight: SWidth * 36,
    includeFontPadding: false,
  },
  HlgFontSize: {
    fontFamily: fontFamilies.pretendardSemiBold,
    fontSize: SWidth * 28,
    includeFontPadding: false,
  },
  HmdFontSize: {
    fontFamily: fontFamilies.pretendardSemiBold,
    fontSize: SWidth * 24,
    includeFontPadding: false,
  },
  HsmFontSize: {
    fontFamily: fontFamilies.pretendardSemiBold,
    fontSize: SWidth * 20,
    includeFontPadding: false,
  },
  BlgSbFontSize: {
    fontFamily: fontFamilies.pretendardSemiBold,
    fontSize: SWidth * 16,
    includeFontPadding: false,
  },
  BlgMdFontSize: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: SWidth * 16,
    includeFontPadding: false,
  },
  BlgRgFontSize: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: SWidth * 16,
    includeFontPadding: false,
  },
  BmdSbFontSize: {
    fontFamily: fontFamilies.pretendardSemiBold,
    fontSize: SWidth * 14,
    lineHeight: SWidth * 14,
    includeFontPadding: false,
  },
  BmdMdFontSize: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: SWidth * 14,
    lineHeight: SWidth * 14,
    includeFontPadding: false,
  },
  BmdRgFontSize: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: SWidth * 14,
    lineHeight: SWidth * 14,
    includeFontPadding: false,
  },
  BsmSbFontSize: {
    fontFamily: fontFamilies.pretendardSemiBold,
    fontSize: SWidth * 12,
    includeFontPadding: false,
  },
  BsmMdFontSize: {
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: SWidth * 12,
    includeFontPadding: false,
  },
  BsmRgFontSize: {
    fontFamily: fontFamilies.pretendardRegular,
    fontSize: SWidth * 12,
    includeFontPadding: false,
  },
});
