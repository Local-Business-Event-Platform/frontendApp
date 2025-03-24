import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';

type SSwitchButtonProps = {
  click: boolean;
  onPress: () => void;
};

const SSwitchButton = ({click, onPress}: SSwitchButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={[
        styles.container,
        {
          alignItems: !click ? 'flex-start' : 'flex-end',
          backgroundColor: !click ? '#666666' : '#155DFC',
        },
      ]}>
      <View style={styles.content} />
    </Pressable>
  );
};

export default SSwitchButton;

const styles = StyleSheet.create({
  container: {
    width: SWidth * 40,
    height: SWidth * 24,
    padding: SWidth * 4,
    borderRadius: 999,
  },

  content: {
    width: SWidth * 16,
    height: SWidth * 16,
    borderRadius: 999,
    backgroundColor: 'white',
  },
});
