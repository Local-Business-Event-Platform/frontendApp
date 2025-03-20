import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Address from '../../screen/auth/Address';
import FindIdPassword from '../../screen/auth/FindIdPassword';
import JoinIdPage from '../../screen/auth/JoinIdPage';
import JoinPage from '../../screen/auth/JoinPage';
import JoinUserPage from '../../screen/auth/JoinUserPage';
import LoginPage from '../../screen/auth/LoginPage';
import SuccessPage from '../../screen/auth/SuccessPage';
import TermsOfUsePage from '../../screen/auth/TermsOfUsePage';
import {useUserData} from '../../store/userRoute';
import BackTitleAppBar from './AppBar/BackTitleAppBar';
import JoinAppBar from './AppBar/JoinAppBar';
import BottomTeb from './BottomTeb';

const MainStackScreen = () => {
  const Stack = createNativeStackNavigator();
  const {userData} = useUserData();
  return (
    <Stack.Navigator
      initialRouteName="login"
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
    </Stack.Navigator>
  );
};

export default MainStackScreen;
