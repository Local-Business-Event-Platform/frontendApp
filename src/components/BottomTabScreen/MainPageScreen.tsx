import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MainPage from '../../screen/main/MainPage';
import StoreDetailPage from '../../screen/main/StoreDetailPage';
import {StackOptionType} from '../../utils/types/type';
import MainAppBar from './AppBar/MainAppBar';
import StoreDetailAppBar from './AppBar/StoreDetailAppBar';

const MainPageScreen = () => {
  const Stack = createNativeStackNavigator();
  const insets = useSafeAreaInsets();

  const options = ({
    headerShown,
    screen = undefined,
    title = '',
  }: StackOptionType) => ({
    header() {
      return screen === 'main' ? (
        <MainAppBar />
      ) : screen === 'detail' ? (
        <StoreDetailAppBar />
      ) : null;
    },
    title: '',
    headerShown: headerShown,
    headerShadowVisible: false,
  });

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        contentStyle: {
          paddingTop: insets.top,
          backgroundColor: 'white',
        },
      }}
      initialRouteName="mainPage">
      <Stack.Screen
        name="mainPage"
        component={MainPage}
        options={options({headerShown: true, screen: 'main'})}
      />
      <Stack.Screen
        name="detailPage"
        component={StoreDetailPage}
        options={{
          animation: 'fade_from_bottom',
          ...options({headerShown: true, screen: 'detail'}),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainPageScreen;

const styles = StyleSheet.create({});
