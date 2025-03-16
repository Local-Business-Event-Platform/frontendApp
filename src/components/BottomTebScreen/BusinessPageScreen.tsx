import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import BusinessPage from '../../screen/business/BusinessPage';
import StoreInfoPage from '../../screen/business/StoreInfoPage';
import JoinAppBar from './AppBar/JoinAppBar';

const BusinessPageScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}
      initialRouteName="businessPage">
      <Stack.Screen
        name="businessPage"
        options={{
          title: '',
          headerShown: false,
          headerShadowVisible: false,
        }}
        component={BusinessPage}
      />
      <Stack.Screen
        name="storeInfo"
        options={{
          header() {
            return <JoinAppBar />;
          },
          title: '',
          headerShown: true,
          headerShadowVisible: false,
        }}
        component={StoreInfoPage}
      />
    </Stack.Navigator>
  );
};

export default BusinessPageScreen;

const styles = StyleSheet.create({});
