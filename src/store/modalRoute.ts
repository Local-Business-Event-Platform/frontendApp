import {create} from 'zustand';

type ModalOpen = {
  modalOpen: boolean;
  setModalOpen: (newModalOpen: boolean) => void;
};

export const useModalOpen = create<ModalOpen>(set => ({
  modalOpen: false,
  setModalOpen: (newModalOpen: boolean) => set({modalOpen: newModalOpen}),
}));
