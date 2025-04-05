import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import {mainTabItems} from '../../utils/listData';
import SText from '../Elements/SText';

type MainTabProps = {
  mainTab: number;
  setMainTab: (tab: number) => void;
};

const MainTab = ({mainTab, setMainTab}: MainTabProps) => {
  return (
    <View style={styles.container}>
      {mainTabItems.map(item => (
        <Pressable
          key={item.id}
          style={[
            styles.rowContainer,
            {
              backgroundColor: mainTab === item.id ? '#DBEAFE' : colors.white,
              paddingTop: mainTab === item.id ? 1 : 0,
              borderBottomWidth: mainTab === item.id ? 2 : 1,
              borderColor:
                mainTab === item.id ? '#1447E6' : colors.interactive.secondary,
            },
          ]}
          onPress={() => setMainTab(item.id)}>
          <item.icon focus={mainTab} />
          <SText
            fStyle="BlgMd"
            text={item.title}
            color={mainTab === item.id ? '#1447E6' : colors.secondary}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default MainTab;

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
