import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import MapPage from '../../screen/MapPage';

const MapPageScreen = () => {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
          marginTop: 0,
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
  );
};

export default MapPageScreen;
