import {create} from 'zustand';

type StoreDataType = {
  title: string;
  setTitle: (title: string) => void;
};

export const useStoreData = create<StoreDataType>(set => ({
  title: '',
  setTitle: (title: string) => set({title}),
}));
