import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import CommunityPage from '../../screen/CommunityPage';

const CommunityScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,

        contentStyle: {
          backgroundColor: 'white',
        },
      }}
      initialRouteName="community">
      <Stack.Screen
        name="community"
        options={{
          title: '',
          headerShown: false,
          headerShadowVisible: false,
        }}
        component={CommunityPage}
      />
    </Stack.Navigator>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({});
