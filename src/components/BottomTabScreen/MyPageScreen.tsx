import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import InterestStorePage from '../../screen/myPage/InterestStorePage';
import MyLocationPage from '../../screen/myPage/MyLocationPage';
import MyPage from '../../screen/myPage/MyPage';
import ParticipationPage from '../../screen/myPage/ParticipationPage';
import RecentPage from '../../screen/myPage/RecentPage';
import ReviewManagementPage from '../../screen/myPage/ReviewManagementPage';
import {screenNames} from '../../utils/listData';
import {StackOptionType} from '../../utils/types/type';
import BackTitleAppBar from './AppBar/BackTitleAppBar';

const MyPageScreen = () => {
  const Stack = createNativeStackNavigator();
  const insets = useSafeAreaInsets();

  const options = ({headerShown, title = ''}: StackOptionType) => ({
    header() {
      return <BackTitleAppBar title={title} />;
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
      initialRouteName={screenNames.MY_PAGE}>
      <Stack.Screen
        name={screenNames.MY_PAGE}
        component={MyPage}
        options={options({headerShown: true, title: '마이 페이지'})}
      />
      <Stack.Screen
        name={screenNames.MY_LOCATION}
        component={MyLocationPage}
        options={options({headerShown: true, title: '동네 설정'})}
      />
      <Stack.Screen
        name={screenNames.RECENT}
        component={RecentPage}
        options={options({headerShown: true, title: '최근 조회'})}
      />
      <Stack.Screen
        name={screenNames.PARTICIPATION}
        component={ParticipationPage}
        options={options({headerShown: true, title: '참여 기록'})}
      />
      <Stack.Screen
        name={screenNames.REVIEW_MANAGEMENT}
        component={ReviewManagementPage}
        options={options({headerShown: true, title: '리뷰 관리'})}
      />
      <Stack.Screen
        name={screenNames.INTEREST_STORE}
        component={InterestStorePage}
        options={options({headerShown: true, title: '관심 가게'})}
      />
    </Stack.Navigator>
  );
};

export default MyPageScreen;
