export type TermsType = {
  check1: boolean;
  check2: boolean;
  check3: boolean;
  check4: boolean;
  check5: boolean;
};

export type TermsCheckProps = {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
  checkList: TermsType;
  setCheckList: (value: TermsType) => void;
};
