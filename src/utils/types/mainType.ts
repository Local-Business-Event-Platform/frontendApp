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
