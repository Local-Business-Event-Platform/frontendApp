import {create} from 'zustand';

type ModalOpen = {
  modalTitle: string;
  modalOpen: boolean;
  content: string;
  id: number;
  userID: string;
  idType: string;
  setUserID: (newUserID: string) => void;
  setIdType: (newIdType: string) => void;
  setModalTitle: (newModalTitle: string) => void;
  setContent: (newContent: string) => void;
  setModalOpen: (newModalOpen: boolean) => void;
  setId: (newId: number) => void;
};

export const useModalOpen = create<ModalOpen>(set => ({
  modalTitle: '',
  modalOpen: false,
  content: '',
  id: 0,
  userID: '',
  idType: '',
  setUserID: (newUserID: string) => set({userID: newUserID}),
  setIdType: (newIdType: string) => set({idType: newIdType}),
  setModalTitle: (newModalTitle: string) => set({modalTitle: newModalTitle}),
  setContent: (newContent: string) => set({content: newContent}),
  setModalOpen: (newModalOpen: boolean) => set({modalOpen: newModalOpen}),
  setId: (newId: number) => set({id: newId}),
}));
