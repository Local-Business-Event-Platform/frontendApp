import {create} from 'zustand';

type Address = {
  userAddress: {
    zonecode: number | null;
    address: string;
    buildingName: string;
  };
  setUserAddress: (
    zonecode: number | null,
    address: string,
    buildingName: string,
  ) => void;
};

export const useAddress = create<Address>(set => ({
  userAddress: {
    zonecode: null,
    address: '',
    buildingName: '',
  },
  setUserAddress: (zonecode, address, buildingName) =>
    set(state => ({
      userAddress: {
        zonecode,
        address,
        buildingName,
      },
    })),
}));
