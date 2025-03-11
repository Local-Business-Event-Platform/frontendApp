import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Address from '../../screen/Address';
import JoinPage from '../../screen/JoinPage';
import JoinUserPage from '../../screen/JoinUserPage';
import LoginPage from '../../screen/LoginPage';
import MainPage from '../../screen/MainPage';
import TermsOfUsePage from '../../screen/TermsOfUsePage';
import BackTitleAppBar from './AppBar/BackTitleAppBar';
import JoinAppBar from './AppBar/JoinAppBar';
import BottomTeb from './BottomTeb';

const MainStackScreen = () => {
  const Stack = createNativeStackNavigator();

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
        name="terms"
        component={TermsOfUsePage}
        options={{
          header() {
            return <BackTitleAppBar title="사용자 회원가입" />;
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
            return <BackTitleAppBar title="사용자 회원가입" />;
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
        name="main"
        component={MainPage}
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
        name="bottomTeb"
        component={BottomTeb}
        options={{
          title: '',
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackScreen;
