import {Dimensions, PixelRatio} from 'react-native';

export const colors = {
  text: {
    primary: '#171717',
    secondary: '#404040',
    tertiary: '#525252',
    info: '#155DFC',
    warning: '#FFB800',
    disabled: '#A1A1A1',
    danger: '#E7000B',
  },
  bg: {
    primary: '#171717',
    secondary: '#404040',
    tertiary: '#F5F5F5',
  },
  primary: '#171717',
  secondary: '#404040',
  tertiary: '#525252',
  black: '#000000',
  white: '#FFFFFF',
  interactive: {
    primary: '#155DFC',
    secondary: '#E5E5E5',
    selected: '#EFF6FF',
  },
  disabled: '#A1A1A1',
};

export const fontFamilies = {
  pretendardBlack: 'Pretendard-Black',
  pretendardBold: 'Pretendard-Bold',
  pretendardExtraBold: 'Pretendard-ExtraBold',
  pretendardExtraLight: 'Pretendard-ExtraLight',
  pretendardLight: 'Pretendard-Light',
  pretendardMedium: 'Pretendard-Medium',
  pretendardRegular: 'Pretendard-Regular',
  pretendardSemiBold: 'Pretendard-SemiBold',
  pretendardThin: 'Pretendard-Thin',
} as const;

export const basicDimensions = {
  height: 874,
  width: 402,
};

export const fontSizes = (size: number) => {
  return size / PixelRatio.getFontScale();
};

export const SHeight = // 높이 변환 작업
  Number(
    (Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(2),
  );

export const SWidth = // 가로 변환 작업
  Number(
    (Dimensions.get('screen').width * (1 / basicDimensions.width)).toFixed(2),
  );
