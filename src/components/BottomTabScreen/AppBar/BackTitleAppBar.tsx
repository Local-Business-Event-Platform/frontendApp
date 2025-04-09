import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import BackArrow24 from '../../../utils/svgs/BackArrow24';
import {AppBarProps} from '../../../utils/types/appBarType';
import SText from '../../Elements/SText';

const BackTitleAppBar = ({title}: AppBarProps) => {
  const navigate = useCustomNavigation();
  return (
    <View style={styles.container}>
      <Pressable hitSlop={10} onPress={() => navigate.goBack()}>
        <BackArrow24 />
      </Pressable>
      <SText fStyle="BlgMd" text={title} />
      <View style={{opacity: 0}}>
        <BackArrow24 />
      </View>
    </View>
  );
};

export default BackTitleAppBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SWidth * 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SWidth * 23.83,
  },
});
