import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {JoinButtonProps} from '../../../utils/types/joinType';
import SText from '../../Elements/SText';

const JoinButton = ({title, onPress}: JoinButtonProps) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <SText fStyle="BlgSb" text={title} color={'#404040'} />
    </Pressable>
  );
};

export default JoinButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: SWidth * 14,
    paddingHorizontal: SWidth * 24,
    backgroundColor: '#FAFAFA',
    borderRadius: SWidth * 8,
  },
});
