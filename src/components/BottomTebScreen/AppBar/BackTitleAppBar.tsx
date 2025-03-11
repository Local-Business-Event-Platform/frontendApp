import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import AppBarBackArrow from '../../../utils/svgs/AppBarBackArrow';
import SText from '../../Elements/SText';

type BackTitleAppBarProps = {
  title: string;
};

const BackTitleAppBar = ({title}: BackTitleAppBarProps) => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate.goBack()}>
        <AppBarBackArrow />
      </Pressable>
      <SText fStyle="BlgMd" text={title} />
      <View style={{opacity: 0}}>
        <AppBarBackArrow />
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
    paddingHorizontal: SWidth * 24,
  },
});
