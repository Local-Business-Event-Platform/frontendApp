import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../globalStyle';
import MainPage from '../../screen/MainPage';
import {useUserData} from '../../store/userRoute';
import BusinessPageScreen from './BusinessPageScreen';
import MapPageScreen from './MapPageScreen';
import MyPageScreen from './MyPageScreen';
import IconComponent from './TabMenu/IconComponent';
import NameComponent from './TabMenu/NameComponent';

const BottomTeb = () => {
  const Tab = createBottomTabNavigator();
  const {userData} = useUserData();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        animation: 'shift',
        tabBarHideOnKeyboard: true,
        sceneStyle: {backgroundColor: 'white'},
        tabBarShowLabel: true,
        tabBarStyle: {
          height: SWidth * 58,
          elevation: 0,
          borderWidth: 0,
          borderColor: 'transparent',
        },
        tabBarButton: props => <Pressable {...props} android_ripple={null} />,
        tabBarLabel({focused}) {
          return <NameComponent focused={focused} name={route.name} />;
        },
        tabBarIcon({focused}) {
          return <IconComponent focused={focused} name={route.name} />;
        },
        headerShown: false,
        headerShadowVisible: false,
        headerBackgroundContainerStyle: {
          backgroundColor: 'white',
        },
      })}>
      <Tab.Screen name="홈" component={MainPage} />
      <Tab.Screen name="지도" component={MapPageScreen} />
      {/* {userData.type === 2 && ( */}
      <Tab.Screen name="가게 관리" component={BusinessPageScreen} />
      {/* )} */}
      <Tab.Screen name="커뮤니티" component={MainPage} />
      <Tab.Screen name="마이페이지" component={MyPageScreen} />
    </Tab.Navigator>
  );
};

export default BottomTeb;

const styles = StyleSheet.create({});
