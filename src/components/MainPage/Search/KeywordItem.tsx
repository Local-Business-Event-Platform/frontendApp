import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import CancelX24 from '../../../utils/svgs/mainPage/CancelX24';
import History24 from '../../../utils/svgs/myPage/History24';
import {KeywordItemProps} from '../../../utils/types/mainType';
import SText from '../../Elements/SText';

const KeywordItem = ({title, onPress, cancelOnPress}: KeywordItemProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.titleContainer}>
        <History24 color={colors.icon.interactive.secondary} />
        <SText fStyle="BlgRg" text={title} />
      </View>
      <Pressable hitSlop={10} onPress={cancelOnPress}>
        <CancelX24 />
      </Pressable>
    </Pressable>
  );
};

export default KeywordItem;

const styles = StyleSheet.create({
  container: {
    height: SWidth * 64,
    flexDirection: 'row',
    paddingHorizontal: SWidth * 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
