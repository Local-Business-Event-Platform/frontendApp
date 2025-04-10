import {create} from 'zustand';

type ModalOpen = {
  modalTitle: string;
  modalOpen: boolean;
  content: string;
  setModalTitle: (newModalTitle: string) => void;
  setContent: (newContent: string) => void;
  setModalOpen: (newModalOpen: boolean) => void;
};

export const useModalOpen = create<ModalOpen>(set => ({
  modalTitle: '',
  modalOpen: false,
  content: '',
  setModalTitle: (newModalTitle: string) => set({modalTitle: newModalTitle}),
  setContent: (newContent: string) => set({content: newContent}),
  setModalOpen: (newModalOpen: boolean) => set({modalOpen: newModalOpen}),
}));
