import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../../../globalStyle';
import Address from '../../screen/auth/Address';
import FindIdPassword from '../../screen/auth/FindIdPassword';
import JoinIdPage from '../../screen/auth/JoinIdPage';
import JoinPage from '../../screen/auth/JoinPage';
import JoinUserPage from '../../screen/auth/JoinUserPage';
import LoginPage from '../../screen/auth/LoginPage';
import NewPasswordPage from '../../screen/auth/NewPasswordPage';
import SuccessPage from '../../screen/auth/SuccessPage';
import TermsOfUsePage from '../../screen/auth/TermsOfUsePage';
import EventDetailPage from '../../screen/main/EventDetailPage';
import NotificationPage from '../../screen/main/NotificationPage';
import SearchPage from '../../screen/main/SearchPage';
import BlockUserPage from '../../screen/myPage/BlockUserPage';
import CustomerPage from '../../screen/myPage/CustomerPage';
import MyLocationMapPage from '../../screen/myPage/location/MyLocationMapPage';
import MyNotificationPage from '../../screen/myPage/MyNotificationPage';
import NoticeDetailPage from '../../screen/myPage/notice/NoticeDetailPage';
import NoticePage from '../../screen/myPage/notice/NoticePage';
import SettingPage from '../../screen/myPage/SettingPage';
import UserInfoPage from '../../screen/myPage/userUpdate/UserInfoPage';
import UserUpdatePage from '../../screen/myPage/userUpdate/UserUpdatePage';
import SplashScreen from '../../screen/SplashScreen';
import {useModalOpen} from '../../store/modalRoute';
import {useStoreData} from '../../store/storeRoute';
import {useUserData} from '../../store/userRoute';
import {screenNames} from '../../utils/listData';
import {StackOptionType} from '../../utils/types/type';
import BackTitleAppBar from './AppBar/BackTitleAppBar';
import SearchAppBar from './AppBar/SearchAppBar';
import BottomTab from './BottomTab';

const MainStackScreen = () => {
  const Stack = createNativeStackNavigator();
  const {userData} = useUserData();
  const {title} = useStoreData();
  // const insets = useSafeAreaInsets();
  const {modalOpen} = useModalOpen();
  const options = ({
    headerShown,
    screen = undefined,
    title = '',
  }: StackOptionType) => ({
    header() {
      return screen === 'search' ? (
        <SearchAppBar />
      ) : (
        <BackTitleAppBar title={title} />
      );
    },
    title: title,
    headerShown: headerShown,
    headerShadowVisible: false,
  });

  return (
    <Stack.Navigator
      initialRouteName={screenNames.BOTTOM_TAB}
      screenOptions={{
        headerShown: false,

        statusBarBackgroundColor: modalOpen ? 'rgba(0,0,0,0.44)' : colors.white,
        statusBarStyle: 'dark',
        navigationBarColor: modalOpen ? 'transparent' : colors.white,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <Stack.Screen
        name={screenNames.SPLASH}
        component={SplashScreen}
        options={options({headerShown: false})}
      />
      <Stack.Screen
        name={screenNames.LOGIN}
        component={LoginPage}
        options={options({headerShown: true})}
      />
      <Stack.Screen
        name={screenNames.FIND}
        component={FindIdPassword}
        options={options({headerShown: true, title: '아이디/비밀번호 찾기'})}
      />
      <Stack.Screen
        name={screenNames.PASSWORD}
        component={NewPasswordPage}
        options={options({headerShown: true, title: '아이디/비밀번호 찾기'})}
      />
      <Stack.Screen
        name={screenNames.BOTTOM_TAB}
        component={BottomTab}
        options={{
          ...options({
            headerShown: false,
          }),
        }}
      />
      <Stack.Screen
        name={screenNames.TERMS}
        component={TermsOfUsePage}
        options={options({
          headerShown: true,
          title: userData.type === 1 ? '사용자 회원가입' : '소상공인 회원가입',
        })}
      />
      <Stack.Screen
        name={screenNames.JOIN_USER}
        component={JoinUserPage}
        options={options({
          headerShown: true,
          title: userData.type === 1 ? '사용자 회원가입' : '소상공인 회원가입',
        })}
      />
      <Stack.Screen
        name={screenNames.JOIN_ID}
        component={JoinIdPage}
        options={options({
          headerShown: true,
          title: userData.type === 1 ? '사용자 회원가입' : '소상공인 회원가입',
        })}
      />
      <Stack.Screen
        name={screenNames.SUCCESS}
        component={SuccessPage}
        options={options({
          headerShown: true,
          title: userData.type === 1 ? '사용자 회원가입' : '소상공인 회원가입',
        })}
      />
      <Stack.Screen
        name={screenNames.ADDRESS}
        component={Address}
        options={options({headerShown: false})}
      />
      <Stack.Screen
        name={screenNames.JOIN}
        component={JoinPage}
        options={options({headerShown: true, screen: 'join'})}
      />
      <Stack.Screen
        name={screenNames.EVENT_DETAIL_PAGE}
        component={EventDetailPage}
        options={options({headerShown: true, title: title})}
      />
      <Stack.Screen
        name={screenNames.MY_NOTIFICATION}
        component={MyNotificationPage}
        options={options({headerShown: true, title: '알림 설정'})}
      />
      <Stack.Screen
        name={screenNames.SETTING}
        component={SettingPage}
        options={options({headerShown: true, title: '설정'})}
      />
      <Stack.Screen
        name={screenNames.NOTICE}
        component={NoticePage}
        options={options({headerShown: true, title: '공지사항'})}
      />
      <Stack.Screen
        name={screenNames.NOTICE_DETAIL}
        component={NoticeDetailPage}
        options={options({headerShown: true, title: '공지사항'})}
      />
      <Stack.Screen
        name={screenNames.CUSTOMER}
        component={CustomerPage}
        options={options({headerShown: true, title: '고객센터'})}
      />
      <Stack.Screen
        name={screenNames.USER_UPDATE}
        component={UserUpdatePage}
        options={options({headerShown: true, title: '회원 정보 변경'})}
      />
      <Stack.Screen
        name={screenNames.USER_INFO}
        component={UserInfoPage}
        options={options({headerShown: true, title: '회원 정보 수정'})}
      />
      <Stack.Screen
        name={screenNames.BLOCK}
        component={BlockUserPage}
        options={options({headerShown: true, title: '차단 사용자 관리'})}
      />
      <Stack.Screen
        name={screenNames.NOTIFICATION}
        component={NotificationPage}
        options={options({headerShown: true, title: '알림'})}
      />
      <Stack.Screen
        name={screenNames.SEARCH}
        component={SearchPage}
        options={options({headerShown: true, screen: 'search'})}
      />
      <Stack.Screen
        name={screenNames.My_LOCATION_MAP}
        component={MyLocationMapPage}
        options={{
          ...options({headerShown: true, title: '동네 설정'}),
          animation: 'slide_from_bottom',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackScreen;
