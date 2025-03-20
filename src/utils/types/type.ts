import {ColorValue} from 'react-native';

export type SButtonProps = {
  onPress: () => void;
  ButtonColor: ColorValue;
  title: string;
  textColor: ColorValue;
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
  titleColor?: ColorValue;
  value: string;
  maxLength?: number;
  onChangeText: (text: string) => void;
  editable?: boolean;
  keyboardType?: 'default' | 'numeric';
  secureTextEntry?: boolean;
  placeholder?: string;
  textIcon?: string | undefined;
  iconOn?: boolean;
  iconOnPress?: () => void;
  errorText?: string;
};

export type SListButtonProps = {
  title: string;
  onPress: () => void;
};
