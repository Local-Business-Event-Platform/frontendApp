import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {screenNames} from '../../../utils/listData';
import DownArrowTwo24 from '../../../utils/svgs/mainPage/DownArrowTwo24';
import Notification24 from '../../../utils/svgs/mainPage/Notification24';
import Search24 from '../../../utils/svgs/mainPage/Search24';
import SText from '../../Elements/SText';

const MainAppBar = () => {
  const navigation = useCustomNavigation();
  return (
    <View style={styles.container}>
      <Pressable style={styles.titleContainer} onPress={() => {}}>
        <SText fStyle="Hsm" text={'성수동'} />
        <DownArrowTwo24 />
      </Pressable>
      <View style={styles.rowContainer}>
        <Pressable
          hitSlop={5}
          onPress={() => navigation.navigate(screenNames.SEARCH)}>
          <Search24 />
        </Pressable>
        <Pressable
          hitSlop={5}
          onPress={() => navigation.navigate(screenNames.NOTIFICATION)}>
          <Notification24 />
        </Pressable>
      </View>
    </View>
  );
};

export default MainAppBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SWidth * 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: SWidth * 24,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
