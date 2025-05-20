import {create} from 'zustand';
import {bottomSheetNames} from '../utils/listData';

type BottomSheetType = {
  category: string;
  bottomSheetTitle: string;
  index: number;
  setIndex: (index: number) => void;
  setCategory: (category: string) => void;
  setBottomSheetTitle: (bottomSheetTitle: string) => void;
};

type MyLocationType = {
  myLocation: {
    latitude: number;
    longitude: number;
  };
  radius: number;
  setRadius: (radius: number) => void;
  setMyLocation: (latitude: number, longitude: number) => void;
};

export const useBottomSheetTitle = create<BottomSheetType>(set => ({
  category: '',
  bottomSheetTitle: bottomSheetNames.ITEM_LIST,
  index: 0,
  setIndex: (index: number) => set({index}),
  setCategory: (category: string) => set({category}),
  setBottomSheetTitle: (bottomSheetTitle: string) => set({bottomSheetTitle}),
}));

export const useMyLocation = create<MyLocationType>(set => ({
  myLocation: {
    latitude: 0,
    longitude: 0,
  },
  radius: 1000,
  setRadius: (radius: number) => set({radius}),
  setMyLocation: (latitude: number, longitude: number) =>
    set({myLocation: {latitude, longitude}}),
}));
