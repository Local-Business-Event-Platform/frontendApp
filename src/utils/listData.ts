export const textItems = [
  {text: '아이디', color: '#155DFC'},
  {text: ' 또는 ', color: '#A1A1A1'},
  {text: '비밀번호', color: '#155DFC'},
  {text: '를 잊으셨나요?', color: '#A1A1A1'},
];

export const checkItems = [
  {key: 'check1', title: '[필수] 만 14세 이상입니다.', arrow: false},
  {key: 'check2', title: '[필수] ㅇㅇ 스토어 이용 약관', arrow: true},
  {
    key: 'check3',
    title: '[선택] 마케팅 목적의 개인정보 수집 및 이용 동의.',
    arrow: true,
  },
  {key: 'check4', title: '[선택] 광고성 정보 수신 동의', arrow: true},
] as const;
