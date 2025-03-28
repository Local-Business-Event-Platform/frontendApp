import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MapPage from '../../screen/MapPage';

const MapPageScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,

        contentStyle: {
          backgroundColor: 'white',
        },
      }}
      initialRouteName="mapPage">
      <Stack.Screen
        name="mapPage"
        options={{
          title: '',
          statusBarStyle: 'dark',
          statusBarTranslucent: true,
          statusBarBackgroundColor: 'transparent',
          headerShown: false,
          headerShadowVisible: false,
        }}
        component={MapPage}
      />
    </Stack.Navigator>
  );
};

export default MapPageScreen;
