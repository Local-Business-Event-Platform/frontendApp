import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import MyPage from '../../screen/MyPage';
import MaPageAppBar from './AppBar/MaPageAppBar';

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
            return <MaPageAppBar title="" />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={MyPage}
      />
    </Stack.Navigator>
  );
};

export default MyPageScreen;

const styles = StyleSheet.create({});
