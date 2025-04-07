import {
  AnimatableNumericValue,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

export type FilterButtonProps = {
  title: string;
  onPress: () => void;
  icon: JSX.Element;
};

export type MainStoreItemProps = {
  storeImg: string;
  title: string;
  category: string;
  review: number;
  reviewCount: number;
  onPress: () => void;
};

export type EventItemProps = {
  item: {
    id: number;
    img: string;
    title: string;
    store: string;
    category: string;
    km: string;
    date: string;
  };
  clicked: boolean;
  onPress: () => void;
  likeOnPress?: () => void;
};

export type NotificationItemProps = {
  icon: JSX.Element;
  title: string;
  date: string;
  content: string;
  onPress: () => void;
  opacity: AnimatableNumericValue;
};

export type SearchInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
  onSubmitEditing: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
};

export type KeywordItemProps = {
  title: string;
  onPress: () => void;
  cancelOnPress: () => void;
};
