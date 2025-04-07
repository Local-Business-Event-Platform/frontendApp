import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {NotificationItemProps} from '../../../utils/types/mainType';
import SText from '../../Elements/SText';

const NotificationItem = ({
  icon,
  title,
  date,
  content,
  onPress,
  opacity,
}: NotificationItemProps) => {
  return (
    <Pressable
      style={[styles.itemContainer, {opacity: opacity}]}
      onPress={onPress}>
      {icon}
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <SText fStyle="BmdSb" text={title} color={colors.disabled} />
          <SText fStyle="BmdMd" text={date} color={colors.text.disabled} />
        </View>
        <SText
          flexShrink={1}
          lineHeight={SWidth * 24}
          nLine={10}
          fStyle="BlgRg"
          text={content}
          color={colors.black}
        />
      </View>
    </Pressable>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: SWidth * 24,
    paddingVertical: SWidth * 20,
    flexDirection: 'row',
    gap: SWidth * 8,
  },

  textContainer: {
    flex: 1,
    gap: SWidth * 4,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
