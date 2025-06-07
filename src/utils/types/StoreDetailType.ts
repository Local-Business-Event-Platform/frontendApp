export type StoreDetailInfoProps = {
  data: {
    time: string;
    holiday: string;
    call: string;
    address: string;
    distance: string;
    x: number;
    y: number;
  };
};

export type DetailMapProps = {
  x: number;
  y: number;
};

export type StoreDetailIconTitleProps = {
  icon: JSX.Element;
  gap?: string | number | undefined;
  children: React.ReactNode;
};

export type StoreDetailContentProps = {
  data: {
    title: string;
    content: string;
    review: number;
    reviewCount: number;
  };
};

export type StoreDetailTabProps = {
  tabClicked: number;
  setTabClicked: (id: number) => void;
};

export type StoreItemProps = {
  id: number;
  title: string;
  content: string;
};

export type StoreDetailEventItemProps = {
  item: StoreItemProps;
  onPress: () => void;
};
export type StoreDetailEventProps = {
  data: StoreItemProps[];
};
