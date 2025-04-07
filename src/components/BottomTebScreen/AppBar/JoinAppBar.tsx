import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import BackArrow24 from '../../../utils/svgs/BackArrow24';

const JoinAppBar = () => {
  const navigate = useCustomNavigation();
  return (
    <Pressable onPress={() => navigate.goBack()} style={styles.container}>
      <BackArrow24 />
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
