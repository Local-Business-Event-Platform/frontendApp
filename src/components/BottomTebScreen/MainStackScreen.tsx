import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Address from '../../screen/auth/Address';
import FindIdPassword from '../../screen/auth/FindIdPassword';
import JoinIdPage from '../../screen/auth/JoinIdPage';
import JoinPage from '../../screen/auth/JoinPage';
import JoinUserPage from '../../screen/auth/JoinUserPage';
import LoginPage from '../../screen/auth/LoginPage';
import NewPasswordPage from '../../screen/auth/NewPasswordPage';
import SuccessPage from '../../screen/auth/SuccessPage';
import TermsOfUsePage from '../../screen/auth/TermsOfUsePage';
import CustomerPage from '../../screen/myPage/CustomerPage';
import NoticePage from '../../screen/myPage/NoticePage';
import NotificationPage from '../../screen/myPage/NotificationPage';
import SettingPage from '../../screen/myPage/SettingPage';
import UserInfoPage from '../../screen/myPage/UserInfoPage';
import UserUpdatePage from '../../screen/myPage/UserUpdatePage';
import {useUserData} from '../../store/userRoute';
import BackTitleAppBar from './AppBar/BackTitleAppBar';
import JoinAppBar from './AppBar/JoinAppBar';
import BottomTeb from './BottomTeb';

const MainStackScreen = () => {
  const Stack = createNativeStackNavigator();
  const {userData} = useUserData();
  return (
    <Stack.Navigator
      initialRouteName="bottomTeb"
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: 'white',
        statusBarStyle: 'dark',
        navigationBarColor: 'white',
        contentStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="login"
        component={LoginPage}
        options={{
          title: '',
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="find"
        component={FindIdPassword}
        options={{
          header() {
            return <BackTitleAppBar title="아이디/비밀번호 찾기" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="password"
        component={NewPasswordPage}
        options={{
          header() {
            return <BackTitleAppBar title="아이디/비밀번호 찾기" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="bottomTeb"
        component={BottomTeb}
        options={{
          title: '',
          headerShown: false,
          headerShadowVisible: false,
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
        name="terms"
        component={TermsOfUsePage}
        options={{
          header() {
            return (
              <BackTitleAppBar
                title={
                  userData.type === 1 ? '사용자 회원가입' : '소상공인 회원가입'
                }
              />
            );
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="joinUser"
        component={JoinUserPage}
        options={{
          header() {
            return (
              <BackTitleAppBar
                title={
                  userData.type === 1 ? '사용자 회원가입' : '소상공인 회원가입'
                }
              />
            );
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="joinId"
        component={JoinIdPage}
        options={{
          header() {
            return (
              <BackTitleAppBar
                title={
                  userData.type === 1 ? '사용자 회원가입' : '소상공인 회원가입'
                }
              />
            );
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="success"
        component={SuccessPage}
        options={{
          header() {
            return (
              <BackTitleAppBar
                title={
                  userData.type === 1 ? '사용자 회원가입' : '소상공인 회원가입'
                }
              />
            );
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="address"
        component={Address}
        options={{
          title: '',
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="join"
        component={JoinPage}
        options={{
          header() {
            return <JoinAppBar />;
          },
          headerShown: true,
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="notification"
        options={{
          header() {
            return <BackTitleAppBar title="알림 설정" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={NotificationPage}
      />
      <Stack.Screen
        name="setting"
        options={{
          header() {
            return <BackTitleAppBar title="설정" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={SettingPage}
      />
      <Stack.Screen
        name="notice"
        options={{
          header() {
            return <BackTitleAppBar title="공지사항" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={NoticePage}
      />
      <Stack.Screen
        name="customer"
        options={{
          header() {
            return <BackTitleAppBar title="고객센터" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={CustomerPage}
      />
      <Stack.Screen
        name="userUpdate"
        options={{
          header() {
            return <BackTitleAppBar title="회원 정보 변경" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={UserUpdatePage}
      />
      <Stack.Screen
        name="userInfo"
        options={{
          header() {
            return <BackTitleAppBar title="회원 정보 수정" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={UserInfoPage}
      />
    </Stack.Navigator>
  );
};

export default MainStackScreen;
