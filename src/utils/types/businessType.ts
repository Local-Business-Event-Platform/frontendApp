import {ColorValue, LayoutChangeEvent} from 'react-native';

export type BDataProps = {
  storeName: string;
  storeContent: string;
  storeInfoNumber: string;
  storeImage: string[];
  storeCEO: string;
  storeBusinessTime: string;
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

export type BTitleTextProps = {
  title: string;
  content: string;
  contentColor: ColorValue;
  color: ColorValue;
  underline?: 'none' | 'underline' | 'line-through' | 'underline line-through';
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
  startTitle: string;
  endTitle: string;
  DateIcon: JSX.Element;
  content: string;
  contentColor: ColorValue;
  color: ColorValue;
  placeholder?: string;
  underline?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  onClick: boolean;
  startPress: () => void;
  endPress: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  startBorderColor?: ColorValue;
  endBorderColor?: ColorValue;
  startTitleColor?: ColorValue;
  endTitleColor?: ColorValue;
};

export type BContentAreaProps = {
  title: string;
  content: string;
  contentColor: ColorValue;
  color: ColorValue;
  placeholder?: string;
  underline?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  textLength: boolean;
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

export type BTitleButtonPRops = {
  title: string;
  titleSize?:
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
  buttonText: string;
  buttonTextColor: ColorValue;
  onPress: () => void;
};

export type BTitleContainerProps = {
  title: string;
  titleSize?:
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
  onClick: boolean;
  buttonText: string | number;
  buttonTextColor: ColorValue;
  onPress: () => void;
  deleteButton?: boolean;
  deleteOnPress?: () => void;
};

export type BStoreInfoData = {
  images: {url: string; name: string; type: string}[];
  title: string;
  startTime: string;
  endTime: string;
  content: string;
};

export type BStoreTimeOpen = {
  start: boolean;
  end: boolean;
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
  onLayout?: (event: LayoutChangeEvent) => void;
  borderColor?: ColorValue;
  textColor?: ColorValue;
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
  content?: string;
  onPress?: () => void;
};

export type StoreMenuInfoItemProps = {
  image: string;
  category: string;
  title: string;
  price: number;
  onPress: () => void;
};
