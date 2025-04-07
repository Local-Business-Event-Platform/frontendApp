import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import BackArrow24 from '../../../utils/svgs/BackArrow24';
import Option24 from '../../../utils/svgs/Option24';
import {AppBarProps} from '../../../utils/types/appBarType';
import SText from '../../Elements/SText';

const MaPageAppBar = ({title}: AppBarProps) => {
  const navigate = useCustomNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate.goBack()}>
        <BackArrow24 />
      </Pressable>
      <SText fStyle="BlgMd" text={title} />
      <Pressable onPress={() => {}}>
        <Option24 />
      </Pressable>
    </View>
  );
};

export default MaPageAppBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SWidth * 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: SWidth * 23.83,
    paddingRight: SWidth * 24.17,
  },
});
