import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import MyLocationPage from '../../screen/myPage/MyLocationPage';
import MyPage from '../../screen/myPage/MyPage';
import NotificationPage from '../../screen/myPage/NotificationPage';
import BackTitleAppBar from './AppBar/BackTitleAppBar';

const MyPageScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}
      initialRouteName="myPage">
      <Stack.Screen
        name="myPage"
        options={{
          header() {
            return <BackTitleAppBar title="마이 페이지" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={MyPage}
      />
      <Stack.Screen
        name="myLocation"
        options={{
          header() {
            return <BackTitleAppBar title="동네 설정" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={MyLocationPage}
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
    </Stack.Navigator>
  );
};

export default MyPageScreen;

const styles = StyleSheet.create({});
