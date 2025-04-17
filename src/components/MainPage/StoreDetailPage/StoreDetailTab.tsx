import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {storeDetailTabItems} from '../../../utils/listData';
import {StoreDetailTabProps} from '../../../utils/types/StoreDetailType';
import SText from '../../Elements/SText';

const StoreDetailTab = ({tabClicked, setTabClicked}: StoreDetailTabProps) => {
  return (
    <View style={styles.container}>
      {storeDetailTabItems.map(item => (
        <Pressable
          key={item.id}
          style={[
            styles.tabItem,
            {
              paddingTop: tabClicked === item.id ? 1 : 0,
              backgroundColor:
                tabClicked === item.id
                  ? colors.bg.interactive.secondary
                  : colors.bg.primary,
              borderBottomWidth: tabClicked === item.id ? 2 : 1,
              borderColor:
                tabClicked === item.id
                  ? colors.border.interactive.secondary
                  : colors.border.secondary,
            },
          ]}
          onPress={() => setTabClicked(item.id)}>
          {item.icon}
          <SText
            fStyle="BlgMd"
            text={item.title}
            color={colors.text.secondary}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default StoreDetailTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  tabItem: {
    flex: 1,
    height: SWidth * 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SWidth * 8,
  },
});
