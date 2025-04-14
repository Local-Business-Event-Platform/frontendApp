import {ColorValue} from 'react-native';

export type StackOptionType = {
  headerShown: boolean;
  screen?:
    | 'join'
    | 'search'
    | 'main'
    | 'detail'
    | 'business'
    | 'store'
    | undefined;
  title?: string;
};

export type SButtonProps = {
  flex?: boolean;
  onPress: () => void;
  disabled?: boolean;
  ButtonColor: ColorValue;
  title: string;
  textColor: ColorValue;
  icon?: JSX.Element;
};

export type SSButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  ButtonColor: ColorValue;
  title: string;
  textColor: ColorValue;
  borderColor?: ColorValue;
};

export type STextProps = {
  fStyle:
    | 'H4xl'
    | 'H3xl'
    | 'H2xl'
    | 'Hxl'
    | 'Hlg'
    | 'Hmd'
    | 'Hsm'
    | 'BxlSb'
    | 'BxlMd'
    | 'BxlRg'
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
  lineColor?: ColorValue;
  nLine?: number;
  flexShrink?: number;
  lineHeight?: number;
  text: string | number;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
};

export type SInputSuccessProps = {
  title: string;
  titleColor?: ColorValue;
  content: string;
  contentColor?: ColorValue;
};

export type SCheckBoxProps = {
  checkValue: boolean;
  onPress: () => void;
};

export type SCheckTextProps = {
  checkValue: boolean;
  onPress: () => void;
  arrowOnPress?: () => void;
  fStyle:
    | 'H4xl'
    | 'H3xl'
    | 'H2xl'
    | 'Hxl'
    | 'Hlg'
    | 'Hmd'
    | 'Hsm'
    | 'BxlSb'
    | 'BxlMd'
    | 'BxlRg'
    | 'BlgSb'
    | 'BlgMd'
    | 'BlgRg'
    | 'BmdSb'
    | 'BmdMd'
    | 'BmdRg'
    | 'BsmSb'
    | 'BsmMd'
    | 'BsmRg';
  title: string;
  arrow?: boolean;
};

export type SInputProps = {
  title?: string;
  required?: boolean;
  titleColor?: ColorValue;
  value: string;
  height?: number;
  borderWidth?: number;
  borderRadius?: number;
  borderColor?: ColorValue;
  backgroundColor?: ColorValue;
  buttonTitle?: string;
  buttonOnPress?: () => void;
  buttonDisabled?: boolean;
  ButtonTextDecorationLine?: 'underline' | 'none';
  maxLength?: number;
  onChangeText: (text: string) => void;
  editable?: boolean;
  keyboardType?: 'default' | 'numeric';
  secureTextEntry?: boolean;
  placeholder?: string;
  textIcon?: string | undefined;
  iconOn?: boolean;
  searchOn?: boolean;
  searchIconColor?: ColorValue;
  iconOnPress?: () => void;
  msg?: string;
  msgType?: 'error' | 'success' | 'undefined';
};

export type SListButtonProps = {
  title: string;
  onPress: () => void;
};

export type SReviewBoxProps = {
  review: number;
  reviewCount: number;
};

export type SMeterBoxProps = {
  content: string;
};

export type STabBarProps = {
  menuList: {
    id: number;
    title: string;
    icon: ({
      focus,
      newColor,
    }: {
      focus: number;
      newColor?: ColorValue;
    }) => React.JSX.Element;
  }[];

  tabIndex: number;
  setTabIndex: (tabIndex: number) => void;
};

export type SImageCardProps = {
  onPress?: () => void;
  children: React.ReactNode;
  childrenButton?: React.ReactNode;
  image: string;
};

export type SImageCard2Props = {
  image: string;
  onPress?: () => void;
  children: React.ReactNode;
};

export type SkeletonProps = {
  count: number;
};
