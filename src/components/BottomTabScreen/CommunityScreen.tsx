import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CommunityPage from '../../screen/CommunityPage';

const CommunityScreen = () => {
  const Stack = createNativeStackNavigator();
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        contentStyle: {
          paddingTop: insets.top,
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
