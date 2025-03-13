import {create} from 'zustand';

type Address = {
  userData: {
    name: string;
    phone: string;
    zonecode: number | null;
    address: string;
    buildingName: string;
    detailAddress: string;
    id: string;
    password: string;
  };
  setUserData: (newUserData: Partial<Address['userData']>) => void;
};

export const useUserData = create<Address>(set => ({
  userData: {
    name: '',
    phone: '',
    zonecode: null,
    address: '',
    buildingName: '',
    detailAddress: '',
    id: '',
    password: '',
  },
  setUserData: newUserData =>
    set(state => ({
      userData: {
        ...state.userData,
        ...newUserData,
      },
    })),
}));
