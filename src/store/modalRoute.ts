import {create} from 'zustand';

type ModalOpen = {
  modalTitle: string;
  modalOpen: boolean;
  setModalTitle: (newModalTitle: string) => void;
  setModalOpen: (newModalOpen: boolean) => void;
};

export const useModalOpen = create<ModalOpen>(set => ({
  modalTitle: '',
  modalOpen: false,
  setModalTitle: (newModalTitle: string) => set({modalTitle: newModalTitle}),
  setModalOpen: (newModalOpen: boolean) => set({modalOpen: newModalOpen}),
}));
