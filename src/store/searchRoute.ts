import {create} from 'zustand';

type MainSearchType = {
  title: string;
  search: boolean;
  setTitle: (title: string) => void;
  setSearch: (search: boolean) => void;
};

export const useMainSearch = create<MainSearchType>(set => ({
  title: '',
  search: false,
  setTitle: (title: string) => set({title}),
  setSearch: (search: boolean) => set({search}),
}));
