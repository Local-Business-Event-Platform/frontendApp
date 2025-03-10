import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../../screen/LoginPage';
import MainPage from '../../screen/MainPage';
import BottomTeb from './BottomTeb';

const MainStackScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: 'white',
        statusBarStyle: 'dark',
        navigationBarColor: 'white',
        contentStyle: {backgroundColor: 'white'},
      }}>
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
        name="login"
        component={LoginPage}
        options={{
          title: '',
          headerShown: false,
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
