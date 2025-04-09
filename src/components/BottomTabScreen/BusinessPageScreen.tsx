import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BusinessPage from '../../screen/business/BusinessPage';
import StoreInfoPage from '../../screen/business/StoreInfoPage';
import {StackOptionType} from '../../utils/types/type';
import JoinAppBar from './AppBar/JoinAppBar';
import OnlyTitleAppBar from './AppBar/OnlyTitleAppBar';

const BusinessPageScreen = () => {
  const Stack = createNativeStackNavigator();
  const insets = useSafeAreaInsets();

  const options = ({
    headerShown,
    screen = undefined,
    title = '',
  }: StackOptionType) => ({
    header() {
      return screen === 'business' ? (
        <OnlyTitleAppBar title={title} />
      ) : screen === 'store' ? (
        <JoinAppBar />
      ) : null;
    },
    title: '',
    headerShown: headerShown,
    headerShadowVisible: false,
  });

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
      initialRouteName="businessPage">
      <Stack.Screen
        name="businessPage"
        component={BusinessPage}
        options={options({
          headerShown: true,
          screen: 'business',
          title: '나의 가게',
        })}
      />
      <Stack.Screen
        name="storeInfo"
        component={StoreInfoPage}
        options={options({headerShown: true, screen: 'store'})}
      />
    </Stack.Navigator>
  );
};

export default BusinessPageScreen;

const styles = StyleSheet.create({});
