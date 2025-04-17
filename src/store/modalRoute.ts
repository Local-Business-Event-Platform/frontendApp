import {create} from 'zustand';

type ModalOpen = {
  modalTitle: string;
  modalOpen: boolean;
  content: string;
  id: number;
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
  setModalTitle: (newModalTitle: string) => set({modalTitle: newModalTitle}),
  setContent: (newContent: string) => set({content: newContent}),
  setModalOpen: (newModalOpen: boolean) => set({modalOpen: newModalOpen}),
  setId: (newId: number) => set({id: newId}),
}));
