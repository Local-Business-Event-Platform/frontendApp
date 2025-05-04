import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';

type SSwitchButtonProps = {
  click: boolean;
  onPress: () => void;
};

const SSwitchButton = ({click, onPress}: SSwitchButtonProps) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: click ? SWidth * 18 : 0, // 움직일 거리
      duration: 50,
      useNativeDriver: true,
    }).start();
  }, [click]);

  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={[
        styles.container,
        {
          backgroundColor: !click
            ? colors.bg.interactive.secondary
            : colors.bg.interactive.primary,
          borderColor: !click
            ? colors.border.secondary
            : colors.bg.interactive.primary,
        },
      ]}>
      <Animated.View
        style={[
          styles.content,
          {
            transform: [{translateX}],
          },
        ]}
      />
    </Pressable>
  );
};

export default SSwitchButton;

const styles = StyleSheet.create({
  container: {
    width: SWidth * 48,
    height: SWidth * 28,
    paddingHorizontal: SWidth * 4,
    justifyContent: 'center',
    borderRadius: 999,
    borderWidth: 1.25,
  },

  content: {
    width: SWidth * 20,
    height: SWidth * 20,
    borderRadius: 999,
    backgroundColor: colors.white,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
});
