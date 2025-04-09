import {create} from 'zustand';

type BottomSheetType = {
  category: string;
  bottomSheetTitle: string;
  setCategory: (category: string) => void;
  setBottomSheetTitle: (bottomSheetTitle: string) => void;
};

export const useBottomSheetTitle = create<BottomSheetType>(set => ({
  category: '',
  bottomSheetTitle: 'menuSelect',
  setCategory: (category: string) => set({category}),
  setBottomSheetTitle: (bottomSheetTitle: string) => set({bottomSheetTitle}),
}));
