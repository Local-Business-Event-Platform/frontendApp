import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import {STabBarProps} from '../../utils/types/type';
import SText from './SText';

const STabBar = ({menuList, tabIndex, setTabIndex}: STabBarProps) => {
  return (
    <View style={styles.container}>
      {menuList.map(item => (
        <Pressable
          key={item.id}
          style={[
            styles.rowContainer,
            {
              backgroundColor: tabIndex === item.id ? '#EFF6FF' : colors.white,
              paddingTop: tabIndex === item.id ? 1 : 0,
              borderBottomWidth: tabIndex === item.id ? 2 : 1,
              borderColor:
                tabIndex === item.id
                  ? colors.interactive.primary
                  : colors.interactive.secondary,
            },
          ]}
          onPress={() => setTabIndex(item.id)}>
          <item.icon focus={tabIndex} newColor={colors.interactive.primary} />
          <SText
            fStyle="BlgMd"
            text={item.title}
            color={
              tabIndex === item.id
                ? colors.interactive.primary
                : colors.secondary
            }
          />
        </Pressable>
      ))}
    </View>
  );
};

export default STabBar;

const styles = StyleSheet.create({
  container: {
    height: SWidth * 48,
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SWidth * 8,
  },
});
