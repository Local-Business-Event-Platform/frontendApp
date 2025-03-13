import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import AppBarBackArrow from '../../../utils/svgs/AppBarBackArrow';

const JoinAppBar = () => {
  const navigate = useCustomNavigation();
  return (
    <Pressable onPress={() => navigate.goBack()} style={styles.container}>
      <AppBarBackArrow />
    </Pressable>
  );
};

export default JoinAppBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SWidth * 42,
    justifyContent: 'center',
    paddingHorizontal: SWidth * 24,
  },
});
