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
  buttonOnPress?: () => void;
  disabled?: boolean;
  backgroundColor?: ColorValue;
  textDecorationLine?: 'underline' | 'none';
};

export type JoinSuccessSubTitleProps = {
  userType: number | null;
};
