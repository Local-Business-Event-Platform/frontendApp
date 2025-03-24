import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import MainPage from '../../screen/MainPage';
import MainAppBar from './AppBar/MainAppBar';

const MainPageScreen = () => {
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
            return <MainAppBar />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={MainPage}
      />
    </Stack.Navigator>
  );
};

export default MainPageScreen;

const styles = StyleSheet.create({});
