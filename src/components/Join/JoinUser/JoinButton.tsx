import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {JoinButtonProps} from '../../../utils/types/joinType';
import SText from '../../Elements/SText';

const JoinButton = ({title, onPress, textDecorationLine}: JoinButtonProps) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <SText
        fStyle="BlgSb"
        text={title}
        color={'#404040'}
        textDecorationLine={textDecorationLine}
      />
    </Pressable>
  );
};

export default JoinButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: SWidth * 48,
    paddingVertical: SWidth * 14,
    paddingHorizontal: SWidth * 24,
    backgroundColor: '#FAFAFA',
    borderRadius: SWidth * 8,
  },
});
