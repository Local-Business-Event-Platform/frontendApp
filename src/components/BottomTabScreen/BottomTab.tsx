import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, SWidth} from '../../../globalStyle';
import {useBottomSheetTitle} from '../../store/mapRoute';
import {useUserData} from '../../store/userRoute';
import BusinessPageScreen from './BusinessPageScreen';
import CommunityScreen from './CommunityScreen';
import MainPageScreen from './MainPageScreen';
import MapPageScreen from './MapPageScreen';
import MyPageScreen from './MyPageScreen';
import IconComponent from './TabMenu/IconComponent';
import NameComponent from './TabMenu/NameComponent';

const tabHeight = SWidth * 58;

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const {userData} = useUserData();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const {index, setIndex} = useBottomSheetTitle();
  useEffect(() => {
    // 키보드가 나타나면 그라디언트 숨기기
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );

    // 키보드가 사라지면 그라디언트 다시 보이기
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );

    // 컴포넌트가 unmount 될 때 리스너 정리
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={{flex: 1, zIndex: 999}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          animation: 'shift',
          tabBarHideOnKeyboard: true,
          sceneStyle: {backgroundColor: colors.white},
          tabBarShowLabel: true,
          tabBarStyle: {
            height: tabHeight,
            elevation: 0,
            borderColor: 'transparent',
          },
          tabBarButton: props => (
            <Pressable
              {...props}
              android_ripple={null}
              onPress={event => {
                props.onPress?.(event);
                setIndex(1);
              }}
            />
          ),
          tabBarLabel({focused}) {
            return <NameComponent focused={focused} name={route.name} />;
          },
          tabBarIcon({focused}) {
            return <IconComponent focused={focused} name={route.name} />;
          },
          headerShown: false,
          headerShadowVisible: false,
          headerBackgroundContainerStyle: {
            backgroundColor: colors.white,
          },
        })}>
        <Tab.Screen name="홈" component={MainPageScreen} />
        <Tab.Screen name="지도" component={MapPageScreen} />
        {/* {userData.type === 2 && ( */}
        <Tab.Screen name="가게 관리" component={BusinessPageScreen} />
        {/* )} */}
        <Tab.Screen name="커뮤니티" component={CommunityScreen} />
        <Tab.Screen name="마이페이지" component={MyPageScreen} />
      </Tab.Navigator>
      {
        <LinearGradient
          colors={['transparent', '#D3D3D333']}
          style={styles.shadow}
          pointerEvents="none"
        />
      }
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  shadow: {
    position: 'absolute',
    bottom: tabHeight,
    width: '100%',
    height: SWidth * 27,
  },
});
