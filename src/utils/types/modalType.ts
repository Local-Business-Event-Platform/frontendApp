import {ColorValue} from 'react-native';

export type SingleModalProps = {
  content: string;
  userID?: string | undefined;
  idType?: string | undefined;
  setModalOpen: (newModalOpen: boolean) => void;
};

export type LogoutModalProps = {
  type: string | undefined;
  title: string | undefined;
  content: string | undefined;
  content2: string | undefined;
  onPress: () => void;
  closeOnPress: () => void;
};

export type ModalDetailItemProps = {
  title: string;
  titleColor: ColorValue;
  onPress: () => void;
  border: number;
};

export type ModalDetailPageProps = {
  id: number;
  setModalOpen: (newModalOpen: boolean) => void;
};
