import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import MainDownArrow from '../../../utils/svgs/mainPage/MainDownArrow';
import MainNotification from '../../../utils/svgs/mainPage/MainNotification';
import MainSearchIcon from '../../../utils/svgs/mainPage/MainSearchIcon';
import SText from '../../Elements/SText';

const MainAppBar = () => {
  const navigate = useCustomNavigation();
  return (
    <View style={styles.container}>
      <Pressable style={styles.titleContainer} onPress={() => {}}>
        <SText fStyle="Hsm" text={'성수동'} />
        <MainDownArrow />
      </Pressable>
      <View style={styles.rowContainer}>
        <Pressable onPress={() => {}}>
          <MainSearchIcon />
        </Pressable>
        <Pressable onPress={() => {}}>
          <MainNotification />
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
