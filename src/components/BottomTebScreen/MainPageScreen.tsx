import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import MainPage from '../../screen/main/MainPage';
import StoreDetailPage from '../../screen/main/StoreDetailPage';
import MainAppBar from './AppBar/MainAppBar';
import StoreDetailAppBar from './AppBar/StoreDetailAppBar';

const MainPageScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        contentStyle: {
          paddingTop: StatusBar.currentHeight,
          backgroundColor: 'white',
        },
      }}
      initialRouteName="mainPage">
      <Stack.Screen
        name="mainPage"
        options={{
          header() {
            return <MainAppBar />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={MainPage}
      />
      <Stack.Screen
        name="detailPage"
        options={{
          animation: 'fade_from_bottom',
          header() {
            return <StoreDetailAppBar />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={StoreDetailPage}
      />
    </Stack.Navigator>
  );
};

export default MainPageScreen;

const styles = StyleSheet.create({});
