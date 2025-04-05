import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MapPage from '../../screen/MapPage';
import SBottomSheet from '../BottomSheet/SBottomSheet';

const MapPageScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarStyle: 'dark',
          statusBarTranslucent: true,
          statusBarBackgroundColor: 'transparent',
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
        initialRouteName="mapPage">
        <Stack.Screen
          name="mapPage"
          options={{
            title: '',

            headerShown: false,
            headerShadowVisible: false,
          }}
          component={MapPage}
        />
      </Stack.Navigator>
      <SBottomSheet />
    </>
  );
};

export default MapPageScreen;
