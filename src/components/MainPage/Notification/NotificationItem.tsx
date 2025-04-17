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
    <Pressable style={[styles.container, {opacity: opacity}]} onPress={onPress}>
      {icon}
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <SText fStyle="BmdSb" text={title} />
          <SText fStyle="BmdMd" text={date} color={colors.text.disabled} />
        </View>
        <SText
          flexShrink={1}
          lineHeight={SWidth * 20}
          nLine={10}
          fStyle="BmdRg"
          text={content}
          color={colors.text.tertiary}
        />
      </View>
    </Pressable>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SWidth * 16,
    paddingVertical: SWidth * 20,
    flexDirection: 'row',
    gap: SWidth * 8,
  },

  textContainer: {
    flex: 1,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
