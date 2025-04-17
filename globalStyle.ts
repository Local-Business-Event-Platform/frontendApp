import {Dimensions, PixelRatio} from 'react-native';

export const colors = {
  text: {
    primary: '#171717',
    secondary: '#404040',
    tertiary: '#525252',
    info: '#155DFC',
    warning: '#FFB800',
    disabled: '#A1A1A1',
    success: '#00A63E',
    danger: '#E7000B',
    interactive: {
      primaryHovered: '#1447E6',
      secondary: '#525252',
      selected: '#155DFC',
      inverse: '#FFFFFF',
    },
  },
  bg: {
    primary: '#FFFFFF',
    secondary: '#404040',
    tertiary: '#F5F5F5',
    brand: '#155DFC',
    warningSubtle: '#FEFCE8',
    infoSubtle: '#EFF6FF',
    interactive: {
      primary: '#155DFC',
      selected: '#EFF6FF',
      secondary: '#FAFAFA',
      secondaryHovered: '#E5E5E5',
    },
  },
  border: {
    primary: '#A1A1A1',
    interactive: {
      primary: '#155DFC',
      secondary: '#525252',
      danger: '#E7000B',
      secondaryHovered: '#404040',
    },
    secondary: '#E5E5E5',
  },
  icon: {
    primary: '#171717',
    secondary: '#404040',
    info02: '#FDC700',
    disabled: '#A1A1A1',
    interactive: {
      primary: '#155DFC',
      primaryHovered: '#1447E6',
      secondary: '#525252',
    },
  },
  primary: '#171717',
  secondary: '#404040',
  tertiary: '#525252',
  black: '#000000',
  white: '#FFFFFF',
  interactive: {
    primary: '#155DFC',
    secondary: '#525252',
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
