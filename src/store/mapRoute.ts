import {create} from 'zustand';

type BottomSheetType = {
  bottomSheetTitle: string;
  setBottomSheetTitle: (bottomSheetTitle: string) => void;
};

export const useBottomSheetTitle = create<BottomSheetType>(set => ({
  bottomSheetTitle: 'menuSelect',
  setBottomSheetTitle: (bottomSheetTitle: string) => set({bottomSheetTitle}),
}));
