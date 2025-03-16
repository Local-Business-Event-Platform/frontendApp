import {ColorValue} from 'react-native';

export type StoreInfoTabProps = {
  isClicked: number;
  setIsClicked: (index: number) => void;
};

export type BusinessContentTextProps = {
  title: string;
  content: string;
  color: ColorValue;
  placeholder?: string;
  underline?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  onClick: boolean;
  listButtonTitle?: string;
  listButtonOnPress?: () => void;
};

export type BusinessTitleContainerProps = {
  title: string;
  onClick: boolean;
  onPress: () => void;
  deleteButton?: boolean;
  deleteOnPress?: () => void;
};

export type BusinessButtonProps = {
  onClick: boolean;
  onPress: () => void;
};

export type EventAddButtonProps = {
  onPress: () => void;
};

export type EventDateButtonProps = {
  title: string;
  onPress: () => void;
};
