import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import MainPage from '../../screen/MainPage';
import IconComponent from './TabMenu/IconComponent';
import NameComponent from './TabMenu/NameComponent';

const BottomTeb = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {},
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
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
      <Tab.Screen name="지도" component={MainPage} />
      <Tab.Screen name="커뮤니티" component={MainPage} />
      <Tab.Screen name="더보기" component={MainPage} />
    </Tab.Navigator>
  );
};

export default BottomTeb;

const styles = StyleSheet.create({});
