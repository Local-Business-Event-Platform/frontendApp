import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CommunityPage from '../../screen/CommunityPage';
import {screenNames} from '../../utils/listData';

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
