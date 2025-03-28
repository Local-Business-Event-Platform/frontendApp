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
          backgroundColor: !click ? '#FAFAFA' : '#155DFC',
          borderColor: !click ? '#E5E5E5' : '#155DFC',
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
    paddingHorizontal: SWidth * 4,
    justifyContent: 'center',
    borderRadius: 999,
    borderWidth: 1.25,
  },

  content: {
    width: SWidth * 16,
    height: SWidth * 16,
    borderRadius: 999,
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
});
