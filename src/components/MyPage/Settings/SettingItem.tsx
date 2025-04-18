import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import RightArrow24 from '../../../utils/svgs/auth/RightArrow24';
import {SettingItemProps} from '../../../utils/types/settingType';
import SText from '../../Elements/SText';

const SettingItem = ({
  title,
  borderBottomWidth,
  icon,
  onPress,
}: SettingItemProps) => {
  return (
    <Pressable
      style={[styles.container, {borderBottomWidth: borderBottomWidth}]}
      onPress={onPress}>
      <SText fStyle="BlgRg" text={title} />
      {icon && (
        <View style={styles.iconContainer}>
          <RightArrow24 color={colors.icon.interactive.secondary} />
        </View>
      )}
    </Pressable>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: SWidth * 64,
    justifyContent: 'space-between',
    borderColor: colors.border.secondary,
  },

  iconContainer: {
    width: SWidth * 40,
    height: SWidth * 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
