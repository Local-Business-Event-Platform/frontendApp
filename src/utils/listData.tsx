import MainArrayIcon from './svgs/mainPage/MainArrayIcon';
import MainFilterIcon from './svgs/mainPage/MainFilterIcon';
import MainGift from './svgs/mainPage/MainGift';
import MainStore from './svgs/mainPage/MainStore';
import CommentEditIcon from './svgs/myPage/CommentEditIcon';
import MyPageCheck from './svgs/myPage/MyPageCheck';
import MyPageHelpIcon from './svgs/myPage/MyPageHelpIcon';
import MyPageInfoIcon from './svgs/myPage/MyPageInfoIcon';
import MyPageMap from './svgs/myPage/MyPageMap';
import MyPageQr from './svgs/myPage/MyPageQr';
import MyPageUserIcon from './svgs/myPage/MyPageUserIcon';
import QuestionIcon from './svgs/myPage/QuestionIcon';
import MyPageOption from './svgs/MyPageOption';
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

export const customerTabItems = [
  {id: 1, title: 'FAQ', icon: QuestionIcon},
  {id: 2, title: '문의하기', icon: CommentEditIcon},
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

export type MenuItem = {
  id: number;
  icon: React.ElementType;
  title: string;
  navigation: string;
  marginTop?: boolean;
};

export const userMyPageList: MenuItem[] = [
  {
    id: 1,
    icon: MyPageUserIcon,
    title: '회원 정보 수정',
    navigation: 'userUpdate',
  },
  {id: 2, icon: MyPageMap, title: '동네 설정', navigation: 'myLocation'},
  {id: 3, icon: MyPageCheck, title: '알림 설정', navigation: 'notification'},
  {id: 4, icon: MyPageQr, title: 'QR 코드 스캔', navigation: ''},
  {
    id: 5,
    icon: MyPageOption,
    title: '설정',
    marginTop: true,
    navigation: 'setting',
  },
  {id: 6, icon: MyPageInfoIcon, title: '공지사항', navigation: 'notice'},
  {id: 7, icon: MyPageHelpIcon, title: '고객센터', navigation: 'customer'},
];

export const storeMyPageList: MenuItem[] = [
  {
    id: 1,
    icon: MyPageUserIcon,
    title: '회원 정보 수정',
    navigation: 'userUpdate',
  },
  {id: 2, icon: MyPageMap, title: '동네 설정', navigation: ''},
  {id: 3, icon: MyPageCheck, title: '알림 설정', navigation: ''},
];

export const myPageUserDataList = [
  {
    id: 1,
    title: '최근 조회',
    onPress: 'recent',
  },
  {
    id: 2,
    title: '참여 기록',
    onPress: 'participation',
  },
  {
    id: 3,
    title: '리뷰 관리',
    onPress: 'reviewManagement',
  },
  {
    id: 4,
    title: '관심 가게',
    onPress: 'interestStore',
  },
];
