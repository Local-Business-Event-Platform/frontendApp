import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import CommunityPage from '../../screen/CommunityPage';
import {screenNames} from '../../utils/listData';

const CommunityScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={screenNames.COMMUNITY}>
      <Stack.Screen
        name={screenNames.COMMUNITY}
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
