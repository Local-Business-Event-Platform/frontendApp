import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {StoreInfoTabProps} from '../../../utils/types/businessType';
import SText from '../../Elements/SText';

const StoreInfoTab = ({isClicked, setIsClicked}: StoreInfoTabProps) => {
  const menuList = ['기본 정보', '가게 정보', '이벤트 정보'];
  return (
    <View style={styles.container}>
      {menuList.map((menu, index) => (
        <Pressable
          key={index}
          style={[
            styles.tabItem,
            {
              backgroundColor: isClicked === index ? '#DBEAFE' : 'white',
              borderBottomWidth: 2,
              borderBottomColor: isClicked === index ? '#1447E6' : 'white',
            },
          ]}
          onPress={() => setIsClicked(index)}>
          <SText
            fStyle="BlgMd"
            text={menu}
            color={isClicked === index ? '#1447E6' : '#404040'}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default StoreInfoTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: SWidth * 48,
  },
});
