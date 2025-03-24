import {ColorValue} from 'react-native';

export type BDataProps = {
  storeName: string;
  storeInfoNumber: string;
  storeCEO: string;
  storeCategory: string;
  storeDetailCategory: string;
  storeAddress: string;
  storeZipCode: string;
  storePhoneNumber: string;
};

export type StoreInfoTabProps = {
  isClicked: number;
  setIsClicked: (index: number) => void;
};

export type BContentProps = {
  title: string;
  content: string;
  contentColor: ColorValue;
  color: ColorValue;
  placeholder?: string;
  underline?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  onClick: boolean;
  value: string;
  buttonOnPress?: () => void;
  onChangeText: (text: string) => void;
};

export type BContentTimeProps = {
  title: string;
  content: string;
  color: ColorValue;
  placeholder?: string;
  underline?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  onClick: boolean;
};

export type BContentAreaProps = {
  title: string;
  content: string;
  color: ColorValue;
  placeholder?: string;
  underline?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  onClick: boolean;
  value: string;
  onChangeText: (text: string) => void;
};

export type BContentListProps = {
  title: string;
  content: string;
  color: ColorValue;
  contentColor: ColorValue;
  placeholder?: string;
  underline?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  onClick: boolean;
  listButtonTitle: string;
  onPress: () => void;
};

export type BContentAddressProps = {
  title: string;
  content: string;
  contentColor: ColorValue;
  color: ColorValue;
  placeholder?: string;
  underline?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  onClick: boolean;
};

export type BTitleContainerProps = {
  title: string;
  onClick: boolean;
  buttonText: string | number;
  buttonTextColor: ColorValue;
  onPress: () => void;
  deleteButton?: boolean;
  deleteOnPress?: () => void;
};

export type BusinessButtonProps = {
  buttonText: string | number;
  buttonTextColor: ColorValue;
  onClick: boolean;
  onPress: () => void;
};

export type TitleOnPressProps = {
  title: string;
  onLongPress?: () => void;
  disabled?: boolean;
  onPress: () => void;
};

export type EventDateButtonProps = {
  title: string;
  icon: JSX.Element;
  onPress: () => void;
};

export type BOnlyTitleProps = {
  title: string;
};

export type StoreCategoryInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  addOnPress: () => void;
  deleteOnPress: () => void;
};

export type OnPressProps = {
  click?: boolean;
  onPress?: () => void;
};
