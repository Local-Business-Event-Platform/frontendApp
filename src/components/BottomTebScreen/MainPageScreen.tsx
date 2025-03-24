import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import MainPage from '../../screen/MainPage';
import StoreDetailPage from '../../screen/StoreDetailPage';
import MainAppBar from './AppBar/MainAppBar';

const MainPageScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
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
          title: '',
          headerShown: false,
          headerShadowVisible: false,
        }}
        component={StoreDetailPage}
      />
    </Stack.Navigator>
  );
};

export default MainPageScreen;

const styles = StyleSheet.create({});
