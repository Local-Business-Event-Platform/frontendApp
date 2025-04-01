import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import InterestStorePage from '../../screen/myPage/InterestStorePage';
import MyLocationPage from '../../screen/myPage/MyLocationPage';
import MyPage from '../../screen/myPage/MyPage';
import ParticipationPage from '../../screen/myPage/ParticipationPage';
import RecentPage from '../../screen/myPage/RecentPage';
import ReviewManagementPage from '../../screen/myPage/ReviewManagementPage';
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
        name="recent"
        options={{
          header() {
            return <BackTitleAppBar title="최근 조회" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={RecentPage}
      />
      <Stack.Screen
        name="participation"
        options={{
          header() {
            return <BackTitleAppBar title="참여 기록" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={ParticipationPage}
      />
      <Stack.Screen
        name="reviewManagement"
        options={{
          header() {
            return <BackTitleAppBar title="리뷰 관리" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={ReviewManagementPage}
      />
      <Stack.Screen
        name="interestStore"
        options={{
          header() {
            return <BackTitleAppBar title="리뷰 관리" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={InterestStorePage}
      />
    </Stack.Navigator>
  );
};

export default MyPageScreen;

const styles = StyleSheet.create({});
