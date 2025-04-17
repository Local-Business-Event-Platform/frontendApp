import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Address from '../../screen/auth/Address';
import FindIdPassword from '../../screen/auth/FindIdPassword';
import JoinIdPage from '../../screen/auth/JoinIdPage';
import JoinPage from '../../screen/auth/JoinPage';
import JoinUserPage from '../../screen/auth/JoinUserPage';
import LoginPage from '../../screen/auth/LoginPage';
import NewPasswordPage from '../../screen/auth/NewPasswordPage';
import SuccessPage from '../../screen/auth/SuccessPage';
import TermsOfUsePage from '../../screen/auth/TermsOfUsePage';
import NotificationPage from '../../screen/main/NotificationPage';
import SearchPage from '../../screen/main/SearchPage';
import BlockUserPage from '../../screen/myPage/BlockUserPage';
import CustomerPage from '../../screen/myPage/CustomerPage';
import MyNotificationPage from '../../screen/myPage/MyNotificationPage';
import NoticePage from '../../screen/myPage/NoticePage';
import SettingPage from '../../screen/myPage/SettingPage';
import UserInfoPage from '../../screen/myPage/UserInfoPage';
import UserUpdatePage from '../../screen/myPage/UserUpdatePage';
import SplashScreen from '../../screen/SplashScreen';
import {useModalOpen} from '../../store/modalRoute';
import {useUserData} from '../../store/userRoute';
import {screenNames} from '../../utils/listData';
import {StackOptionType} from '../../utils/types/type';
import BackTitleAppBar from './AppBar/BackTitleAppBar';
import JoinAppBar from './AppBar/JoinAppBar';
import SearchAppBar from './AppBar/SearchAppBar';
import BottomTab from './BottomTab';

const MainStackScreen = () => {
  const Stack = createNativeStackNavigator();
  const {userData} = useUserData();
  const insets = useSafeAreaInsets();
  const {modalOpen} = useModalOpen();
  const options = ({
    headerShown,
    screen = undefined,
    title = '',
  }: StackOptionType) => ({
    header() {
      return screen === 'join' ? (
        <JoinAppBar />
      ) : screen === 'search' ? (
        <SearchAppBar />
      ) : (
        <BackTitleAppBar title={title} />
      );
    },
    title: '',
    headerShown: headerShown,
    headerShadowVisible: false,
  });

  return (
    <Stack.Navigator
      initialRouteName={screenNames.BOTTOM_TAB}
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: modalOpen ? 'transparent' : 'white',
        navigationBarHidden: modalOpen ? true : false,
        statusBarStyle: 'dark',
        navigationBarColor: 'white',
        contentStyle: {
          paddingTop: insets.top,
          backgroundColor: 'white',
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
        options={options({headerShown: false})}
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
          contentStyle: {
            backgroundColor: 'white',
          },
          ...options({
            headerShown: false,
          }),
        }}
      />
      {/* <Stack.Screen
        name="business"
        component={JoinBusinessPage}
        options={{
          header() {
            return <BackTitleAppBar title="소상공인 회원가입" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
      /> */}
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
    </Stack.Navigator>
  );
};

export default MainStackScreen;
