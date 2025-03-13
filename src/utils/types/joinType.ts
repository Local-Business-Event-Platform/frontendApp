import {ColorValue} from 'react-native';

export type JoinTitleProps = {
  title1: string;
  title2: string;
};

export type JoinSelectedButtonProps = {
  onPress: () => void;
  title: string;
  backgroundColor: ColorValue;
};

export type JoinButtonProps = {
  title: string;
  onPress: () => void;
};

export type JoinInputButtonProps = {
  value: string;
  title?: string;
  buttonTitle: string;
  onChangeText: (text: string) => void;
  editable?: boolean;
  keyboardType?: 'default' | 'numeric';
  placeholder?: string;
  onPress: () => void;
};
