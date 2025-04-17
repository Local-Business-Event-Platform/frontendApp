import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
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
              paddingTop: isClicked === index ? 1 : 0,
              backgroundColor:
                isClicked === index
                  ? colors.bg.interactive.selected
                  : colors.bg.primary,
              borderBottomWidth: isClicked === index ? 2 : 1,
              borderBottomColor:
                isClicked === index
                  ? colors.border.interactive.primary
                  : colors.border.secondary,
            },
          ]}
          onPress={() => setIsClicked(index)}>
          <SText
            fStyle="BlgMd"
            text={menu}
            color={
              isClicked === index
                ? colors.text.interactive.selected
                : colors.text.secondary
            }
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
