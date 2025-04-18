import {ColorValue} from 'react-native';
import {colors} from '../../globalStyle';
import Home24 from './svgs/bottonTab/Home24';
import Store24 from './svgs/bottonTab/Store24';
import Array20 from './svgs/mainPage/Array20';
import Filter20 from './svgs/mainPage/Filter20';
import Gift24 from './svgs/mainPage/Gift24';
import CircleCheck24 from './svgs/myPage/CircleCheck24';
import CircleUser24 from './svgs/myPage/CircleUser24';
import CommentEdit24 from './svgs/myPage/CommentEdit24';
import Help24 from './svgs/myPage/Help24';
import Map24 from './svgs/myPage/Map24';
import Notice24 from './svgs/myPage/Notice24';
import QR24 from './svgs/myPage/QR24';
import Question24 from './svgs/myPage/Question24';
import Option24 from './svgs/Option24';
import Pen24 from './svgs/storeDetailPage/Pen24';

export const screenNames = {
  SPLASH: 'splash',
  LOGIN: 'login',
  FIND: 'find',
  PASSWORD: 'password',
  BOTTOM_TAB: 'bottomTab',
  TERMS: 'terms',
  JOIN_USER: 'joinUser',
  JOIN_ID: 'joinId',
  SUCCESS: 'success',
  ADDRESS: 'address',
  JOIN: 'join',
  MY_NOTIFICATION: 'myNotification',
  SETTING: 'setting',
  NOTICE: 'notice',
  CUSTOMER: 'customer',
  USER_UPDATE: 'userUpdate',
  USER_INFO: 'userInfo',
  BLOCK: 'block',
  NOTIFICATION: 'notification',
  SEARCH: 'search',
  MAIN_PAGE: 'mainPage',
  DETAIL_PAGE: 'detailPage',
  MAP_PAGE: 'mapPage',
  MY_PAGE: 'myPage',
  MY_LOCATION: 'myLocation',
  My_LOCATION_MAP: 'myLocationMap',
  RECENT: 'recent',
  PARTICIPATION: 'participation',
  REVIEW_MANAGEMENT: 'reviewManagement',
  INTEREST_STORE: 'interestStore',
  COMMUNITY: 'community',
  BUSINESS_PAGE: 'businessPage',
  STORE_INFO: 'storeInfo',
} as const;

export const modalNames = {
  BUSINESS: 'business',
  PASSWORD: 'password',
  SETTING: 'setting',
  DETAIL_PAGE: 'detailPage',
  BLOCK: 'block',
} as const;

export const textItems = [
  {text: '아이디/비밀번호', color: colors.text.info},
  {text: '를 잊으셨나요?', color: colors.text.disabled},
];

export const checkItems = [
  {key: 'check1', title: '[필수] 만 14세 이상입니다.', arrow: true},
  {key: 'check2', title: '[필수] ㅇㅇ 스토어 이용 약관', arrow: true},
  {
    key: 'check3',
    title: '[선택] 마케팅 목적의 개인정보 수집 및 이용 동의',
    arrow: true,
  },
  {key: 'check4', title: '[선택] 광고성 정보 수신 동의', arrow: true},
] as const;

export const mainTabItems = [
  {
    id: 1,
    title: '이벤트',
    icon: ({focus, newColor}: {focus: number; newColor?: ColorValue}) => (
      <Gift24 focus={focus} newColor={newColor} />
    ),
  },
  {
    id: 2,
    title: '가게',
    icon: ({focus, newColor}: {focus: number; newColor?: ColorValue}) => (
      <Store24 focus={focus} newColor={newColor} />
    ),
  },
];

export const customerTabItems = [
  {id: 1, title: 'FAQ', icon: Question24},
  {id: 2, title: '문의하기', icon: CommentEdit24},
];

export const mainFilterItems = [
  {id: 1, title: '필터', icon: Filter20},
  {id: 2, title: '정렬', icon: Array20},
];

export const storeDetailTabItems = [
  {
    id: 1,
    title: '가게 정보',
    icon: <Gift24 color={colors.text.interactive.secondary} />,
  },
  {
    id: 2,
    title: '이벤트',
    icon: <Home24 color={colors.text.interactive.secondary} />,
  },
  {id: 3, title: '후기', icon: <Pen24 />},
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
    icon: CircleUser24,
    title: '회원 정보 수정',
    navigation: screenNames.USER_UPDATE,
  },
  {id: 2, icon: Map24, title: '동네 설정', navigation: screenNames.MY_LOCATION},
  {
    id: 3,
    icon: CircleCheck24,
    title: '알림 설정',
    navigation: screenNames.MY_NOTIFICATION,
  },
  {id: 4, icon: QR24, title: 'QR 코드 스캔', navigation: ''},
  {
    id: 5,
    icon: Option24,
    title: '설정',
    marginTop: true,
    navigation: screenNames.SETTING,
  },
  {id: 6, icon: Notice24, title: '공지사항', navigation: screenNames.NOTICE},
  {id: 7, icon: Help24, title: '고객센터', navigation: screenNames.CUSTOMER},
];

export const storeMyPageList: MenuItem[] = [
  {
    id: 1,
    icon: CircleUser24,
    title: '회원 정보 수정',
    navigation: screenNames.USER_UPDATE,
  },
  {
    id: 2,
    icon: Map24,
    title: '차단 사용자 관리',
    navigation: screenNames.BLOCK,
  },
  {
    id: 3,
    icon: CircleCheck24,
    title: '알림 설정',
    navigation: screenNames.MY_NOTIFICATION,
  },
  {id: 4, icon: QR24, title: 'QR 코드 스캔', navigation: ''},
  {
    id: 5,
    icon: Option24,
    title: '설정',
    marginTop: true,
    navigation: screenNames.SETTING,
  },
  {id: 6, icon: Notice24, title: '공지사항', navigation: screenNames.NOTICE},
  {id: 7, icon: Help24, title: '고객센터', navigation: screenNames.CUSTOMER},
];

export const myPageUserDataList = [
  {
    id: 1,
    title: '최근 조회',
    onPress: screenNames.RECENT,
  },
  {
    id: 2,
    title: '참여 기록',
    onPress: screenNames.PARTICIPATION,
  },
  {
    id: 3,
    title: '리뷰 관리',
    onPress: screenNames.REVIEW_MANAGEMENT,
  },
  {
    id: 4,
    title: '관심 가게',
    onPress: screenNames.INTEREST_STORE,
  },
];

export const settingTypes = {
  LOGOUT: '로그아웃',
  WARNING: '탈퇴',
  DATA: '데이터',
  LOGIN: 'login',
};

export const settingsModalList = [
  {
    type: settingTypes.LOGOUT,
    id: 1,
    title: '로그아웃 하시겠어요?',
    content: '로그아웃하면 이용이 중단돼요.',
    content2: '다시 로그인하면 이어서 이용할 수 있어요.',
  },
  {
    type: settingTypes.WARNING,
    id: 2,
    title: '정말 탈퇴하시겠어요?',
    content: '탈퇴하면 계정과 모든 정보가 삭제돼요.',
    content2: '다시 복구할 수 없으니 신중히 결정해주세요.',
  },
  {
    type: settingTypes.DATA,
    id: 3,
    title: '캐시 데이터를 삭제하시겠어요?',
    content: '앱에 저장된 캐시가 삭제돼요.',
    content2: '저장되지 않은 데이터는 복구할 수 없어요.',
  },
  {
    type: settingTypes.LOGIN,
    id: 4,
    title: '로그인이 필요해요',
    content: '로그인이 필요한 기능이에요. 지금 로그인하고',
    content2: '필요한 기능을 사용해보세요.',
  },
];

export const userServiceList = [
  {
    id: 1,
    title: '관심 가게 소식',
    subTitle: '새로운 소식 업데이트',
    click: false,
  },
  {
    id: 2,
    title: '추천 이벤트',
    subTitle: '새로운 소식 업데이트',
    click: false,
    border: true,
  },
  {
    id: 3,
    title: '공지사항',
    subTitle: '서비스 업데이트 및 공지',
    click: false,
  },
];

export const userActivityList = [
  {
    id: 1,
    title: '댓글',
    subTitle: '내 게시물의 새 댓글',
    click: false,
  },
  {
    id: 2,
    title: '좋아요',
    subTitle: '내 게시물의 좋아요',
    click: false,
    border: true,
  },
];
export const storeActivityList = [
  {
    id: 1,
    title: '가게',
    subTitle: '내 가게 찜',
    click: false,
    border: true,
  },
  {
    id: 2,
    title: '이벤트',
    subTitle: '내 이벤트 찜',
    click: false,
    border: true,
  },
  {
    id: 3,
    title: '댓글',
    subTitle: '내 게시물의 새 댓글',
    click: false,
  },
  {
    id: 4,
    title: '좋아요',
    subTitle: '내 게시물의 좋아요',
    click: false,
    border: true,
  },
];

export const storeServiceList = [
  {
    id: 1,
    title: '공지사항',
    subTitle: '서비스 업데이트 및 공지',
    click: false,
    border: false,
  },
];
