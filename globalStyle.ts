import {Dimensions, PixelRatio} from 'react-native';

export const colors = {
  text: {
    primary: '#171717',
    secondary: '#404040',
    tertiary: '#525252',
    info: '#46A44B',
    warning: '#FFB800',
    disabled: '#A1A1A1',
    success: '#00A63E',
    danger: '#E7000B',
    interactive: {
      primary: '#155DFC',
      primaryHovered: '#1447E6',
      secondary: '#525252',
      selected: '#46A44B',
      inverse: '#FFFFFF',
    },
  },
  bg: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F5F5F5',
    brand: '#5EBA63',
    warningSubtle: '#FEFCE8',
    infoSubtle: '#EDF7EE',
    dangerSubtle: '#FEF2F2',
    inverseBold: '#404040',
    interactive: {
      primary: '#5EBA63',
      selected: '#EFF6FF',
      secondary: '#FAFAFA',
      secondaryHovered: '#E5E5E5',
      subtle: '#FEF2F2',
    },
  },
  border: {
    primary: '#A1A1A1',
    focusRing: '#155DFC',
    disabled: '#A1A1A1',
    interactive: {
      primary: '#5EBA63',
      primaryHovered: '#1447E6',
      secondary: '#525252',
      secondaryPressed: '#262626',
      secondaryHovered: '#404040',
      danger: '#E7000B',
    },
    secondary: '#E5E5E5',
  },
  icon: {
    primary: '#171717',
    secondary: '#404040',
    info01: '#1447E6',
    info02: '#FDC700',
    disabled: '#A1A1A1',
    danger: '#C10007',
    success: '#008236',
    interactive: {
      primary: '#5EBA63',
      primaryHovered: '#46A44B',
      secondary: '#525252',
    },
  },
  interactive: {
    primary: '#155DFC',
    secondary: '#525252',
    selected: '#EFF6FF',
  },
  black: '#000000',
  white: '#FFFFFF',
} as const;

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

const BASE_WIDTH = 402 as const;
const BASE_HEIGHT = 874 as const;

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
// ✅ 가로, 세로 스케일
export const SWidth = SCREEN_WIDTH / BASE_WIDTH;
export const SHeight = SCREEN_HEIGHT / BASE_HEIGHT;

// ✅ 폰트 스케일 (접근성 무시)
export const normalizeFont = (size: number) => {
  return (SWidth * size) / PixelRatio.getFontScale();
};
