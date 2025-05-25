import {Dimensions, PixelRatio} from 'react-native';

export const colors = {
  text: {
    primary: '#0F172B',
    secondary: '#314158',
    tertiary: '#45556C',
    info: '#46A44B',
    warning: '#DD8700',
    disabled: '#90A1B9',
    success: '#155DFC',
    danger: '#E7000B',
    interactive: {
      primary: '#5EBA63',
      primaryHovered: '#46A44B',
      primaryPressed: '#39843C',
      secondary: '#F8FAFC',
      secondaryHovered: '#E2E8F0',
      secondaryPressed: '#CAD5E2',
      selected: '#46A44B',
      visited: '#4F39F6',
      inverse: '#FFFFFF',
    },
  },
  bg: {
    primary: '#FFFFFF',
    secondary: '#F8FAFC',
    tertiary: '#F1F5F9',
    brand: '#5EBA63',
    info: '#46a44B',
    infoSubtle: '#EDF7EE',
    warning: '#F0B100',
    warningSubtle: '#FEFCE8',
    success: '#2B7FFF',
    successSubtle: '#FEF2F2',
    danger: '#E7000B',
    dangerSubtle: '#FEF2F2',
    inverseBold: '#314158',
    inverseBolder: '#1D293D',
    disabled: '#CAD5E2',
    interactive: {
      primary: '#5EBA63',
      primaryHovered: '#46A44B',
      primaryPressed: '#39843C',
      secondary: '#F8FAFC',
      secondaryHovered: '#E2E8F0',
      secondaryPressed: '#CAD5E2',
      selected: '#EDF7EE',
      selectedHovered: '#DFF1E0',
      selectedPressed: '#BFE3C1',
      danger: '#E7000B',
      dangerHovered: '#C10007',
      dangerPressed: '#8F0712',
      subtle: '#FEF2F2',
    },
  },
  icon: {
    primary: '#0F172B',
    secondary: '#314158',
    info01: '#39843C',
    info02: '#FDC700',
    warning: '#A65F00',
    success: '#1447E6',
    danger: '#B91C1C',
    disabled: '#90A1B9',
    interactive: {
      primary: '#5EBA63',
      primaryHovered: '#46A44B',
      primaryPressed: '#39843C',
      secondary: '#45556C',
      secondaryHovered: '#314158',
      secondaryPressed: '#1D293D',
      selected: '#46A44B',
      visited: '#4F39F6',
      inverse: '#FFFFFF',
    },
  },
  border: {
    primary: '#90A1B9',
    secondary: '#E2E8F0',
    focusRing: '#5EBA63',
    info: '#39843C',
    infoSubtle: '#EDF7EE',
    warning: '#F0B100',
    warningSubtle: '#FEFCE8',
    success: '#2B7FFF',
    successSubtle: '#EFF6FF',
    danger: '#E7000B',
    dangerSubtle: '#FEF2F2',
    disabled: '#CAD5E2',
    interactive: {
      primary: '#5EBA63',
      primaryHovered: '#46A44B',
      primaryPressed: '#39843C',
      secondary: '#45556C',
      secondaryHovered: '#314158',
      secondaryPressed: '#1D293D',
      danger: '#E7000B',
      dangerHovered: '#C10007',
      dangerPressed: '#8F0712',
      subtle: '#FEF2F2',
      subtleHovered: '#FEE2E2',
      subtlePressed: '#FFC9C9',
    },
  },
  interactive: {
    primary: '#155DFC',
    secondary: '#525252',
    selected: '#EFF6FF',
  },
  effect: {
    cast: '#0000001F',
    core: '#00000014 ',
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
