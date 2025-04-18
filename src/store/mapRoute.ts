import {create} from 'zustand';

type BottomSheetType = {
  category: string;
  bottomSheetTitle: string;
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
  bottomSheetTitle: 'menuSelect',
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
