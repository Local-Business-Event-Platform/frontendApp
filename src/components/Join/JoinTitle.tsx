import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {JoinTitleProps} from '../../utils/types/joinType';
import SText from '../Elements/SText';

const JoinTitle = ({title1, title2}: JoinTitleProps) => {
  return (
    <View style={styles.container}>
      <SText fStyle="Hmd" text={title1} />
      <SText fStyle="Hmd" text={title2} />
    </View>
  );
};

export default JoinTitle;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 42,
  },
});
