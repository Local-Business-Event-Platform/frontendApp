import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../../screen/LoginPage';
import MainPage from '../../screen/MainPage';

const MainStackScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
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
        name="main"
        component={MainPage}
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
