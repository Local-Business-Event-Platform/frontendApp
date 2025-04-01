export type MyPageTitleProps = {
  title: string;
};

export type LocationAddItemProps = {
  isClicked: boolean;
  title: string;
  onPress: () => void;
};

export type AllButtonProps = {
  allClick: boolean;
  allOnPress: () => void;
};

export type MyNContainerProps = {
  title: string;
  marginTop: number;
  children: React.ReactNode;
};

export type AlarmItemProps = {
  title: string;
  subTitle: string;
  click: boolean;
  onPress: () => void;
  borderWidth?: number;
};

export type FAQComponentProps = {
  searchValue: string;
  searchOnchange: (text: string) => void;
};

export type FAQCategoryItemProps = {
  title: string;
  onPress: () => void;
};

export type FAQQuestionItemProps = {
  title: string;
  onPress: () => void;
};

export type UserUpdateInputProps = {
  userId: string;
  value: string;
  onChangeText: (text: string) => void;
};

export type UserImgProps = {
  source: {uri: string} | number;
  setUserImg: React.Dispatch<
    React.SetStateAction<{
      url: string;
      name: string;
      type: string;
    }>
  >;
};

export type UserInfoProps = {
  userName: string;
  userPhone: string;
  onPress: () => void;
};
