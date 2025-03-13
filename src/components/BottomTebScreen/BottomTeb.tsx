import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SWidth} from '../../../globalStyle';
import MainPage from '../../screen/MainPage';
import MyPageScreen from './MyPageScreen';
import IconComponent from './TabMenu/IconComponent';
import NameComponent from './TabMenu/NameComponent';

const BottomTeb = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        animation: 'shift',
        tabBarHideOnKeyboard: true,
        sceneStyle: {backgroundColor: 'white', borderWidth: 0},
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#1447E6',
        tabBarStyle: {
          height: SWidth * 64,
          elevation: 0,
          borderWidth: 0,
          borderColor: 'transparent',
        },
        tabBarLabel({focused}) {
          return <NameComponent focused={focused} name={route.name} />;
        },
        tabBarIcon({focused}) {
          return <IconComponent focused={focused} name={route.name} />;
        },
        tabBarItemStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
        headerShadowVisible: false,
        headerBackgroundContainerStyle: {
          backgroundColor: 'white',
        },
      })}>
      <Tab.Screen name="홈" component={MainPage} />
      <Tab.Screen name="지도" component={MainPage} />
      <Tab.Screen name="커뮤니티" component={MainPage} />
      <Tab.Screen name="마이페이지" component={MyPageScreen} />
    </Tab.Navigator>
  );
};

export default BottomTeb;

const styles = StyleSheet.create({});
