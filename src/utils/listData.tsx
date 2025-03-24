import MainArrayIcon from './svgs/mainPage/MainArrayIcon';
import MainFilterIcon from './svgs/mainPage/MainFilterIcon';
import MainGift from './svgs/mainPage/MainGift';
import MainStore from './svgs/mainPage/MainStore';
import DetailGiftIcon from './svgs/storeDetailPage/DetailGiftIcon';
import DetailHomeIcon from './svgs/storeDetailPage/DetailHomeIcon';
import DetailPen from './svgs/storeDetailPage/DetailPen';

export const textItems = [
  {text: '아이디/비밀번호', color: '#155DFC'},
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

export const mainTabItems = [
  {id: 1, title: '이벤트', icon: MainGift},
  {id: 2, title: '가게', icon: MainStore},
];

export const mainFilterItems = [
  {id: 1, title: '필터', icon: MainFilterIcon},
  {id: 2, title: '정렬', icon: MainArrayIcon},
];

export const storeDetailTabItems = [
  {id: 1, title: '가게 정보', icon: <DetailGiftIcon />},
  {id: 2, title: '이벤트', icon: <DetailHomeIcon />},
  {id: 3, title: '후기', icon: <DetailPen />},
];
