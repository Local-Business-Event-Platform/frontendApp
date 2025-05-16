import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {RefObject} from 'react';
import {create} from 'zustand';
import {bottomSheetNames} from '../utils/listData';

type BottomSheetType = {
  bottomSheetTitle: string;
  setBottomSheetTitle: (bottomSheetTitle: string) => void;
};

type BottomSheetRefType = {
  bottomSheetRef: RefObject<BottomSheetModal>;
  setBottomSheetRef: (ref: RefObject<BottomSheetModal>) => void;
};

export const useArrayBottomSheetTitle = create<BottomSheetType>(set => ({
  bottomSheetTitle: bottomSheetNames.ARRAY_MENU,
  setBottomSheetTitle: (bottomSheetTitle: string) => set({bottomSheetTitle}),
}));

export const useBottomSheetRef = create<BottomSheetRefType>(set => ({
  bottomSheetRef: {current: null},
  setBottomSheetRef: ref => set({bottomSheetRef: ref}),
}));
