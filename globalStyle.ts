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
    interactive: {
      secondary: '#FAFAFA',
    },
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

const BASE_WIDTH = 402;
const BASE_HEIGHT = 874;

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
// ✅ 가로, 세로 스케일
export const SWidth = SCREEN_WIDTH / BASE_WIDTH;
export const SHeight = SCREEN_HEIGHT / BASE_HEIGHT;

// ✅ 폰트 스케일 (접근성 무시)
export const normalizeFont = (size: number) => {
  return (SWidth * size) / PixelRatio.getFontScale();
};
