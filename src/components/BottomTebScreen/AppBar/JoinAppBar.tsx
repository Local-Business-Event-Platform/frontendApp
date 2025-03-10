import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import JoinBackArrow from '../../../utils/svgs/JoinBackArrow';

const JoinAppBar = () => {
  const navigate = useNavigation();
  return (
    <Pressable onPress={() => navigate.goBack()} style={styles.container}>
      <JoinBackArrow />
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
