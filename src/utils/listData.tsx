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

export const textItems = [
  {text: '아이디/비밀번호', color: colors.text.info},
  {text: '를 잊으셨나요?', color: colors.text.disabled},
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
  {
    id: 1,
    title: '이벤트',
    icon: ({focus}: {focus: number}) => <Gift24 focus={focus} />,
  },
  {
    id: 2,
    title: '가게',
    icon: ({focus}: {focus: number}) => <Store24 focus={focus} />,
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
  {id: 1, title: '가게 정보', icon: <Gift24 color={colors.tertiary} />},
  {id: 2, title: '이벤트', icon: <Home24 color={colors.tertiary} />},
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
    navigation: 'userUpdate',
  },
  {id: 2, icon: Map24, title: '동네 설정', navigation: 'myLocation'},
  {id: 3, icon: CircleCheck24, title: '알림 설정', navigation: 'notification'},
  {id: 4, icon: QR24, title: 'QR 코드 스캔', navigation: ''},
  {
    id: 5,
    icon: Option24,
    title: '설정',
    marginTop: true,
    navigation: 'setting',
  },
  {id: 6, icon: Notice24, title: '공지사항', navigation: 'notice'},
  {id: 7, icon: Help24, title: '고객센터', navigation: 'customer'},
];

export const storeMyPageList: MenuItem[] = [
  {
    id: 1,
    icon: CircleUser24,
    title: '회원 정보 수정',
    navigation: 'userUpdate',
  },
  {id: 2, icon: Map24, title: '동네 설정', navigation: ''},
  {id: 3, icon: CircleCheck24, title: '알림 설정', navigation: ''},
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
