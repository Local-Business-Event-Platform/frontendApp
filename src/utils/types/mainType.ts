export type FilterButtonProps = {
  title: string;
  onPress: () => void;
  icon: JSX.Element;
};

export type MainStoreItemProps = {
  storeImg: number;
  title: string;
  category: string;
  review: number;
  reviewCount: number;
  onPress: () => void;
};
