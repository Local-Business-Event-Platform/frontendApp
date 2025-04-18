import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {AlarmItemProps} from '../../../utils/types/myPage';
import SSwitchButton from '../../Elements/SSwitchButton';
import SText from '../../Elements/SText';

const AlarmItem = ({
  title,
  subTitle,
  click,
  onPress,
  borderWidth,
}: AlarmItemProps) => {
  return (
    <View
      style={[
        styles.container,
        {borderTopWidth: borderWidth, borderBottomWidth: borderWidth},
      ]}>
      <View style={styles.rowContainer}>
        <SText fStyle="BlgMd" text={title} />
        <SSwitchButton click={click} onPress={onPress} />
      </View>
      <SText fStyle="BmdRg" text={subTitle} color={colors.text.tertiary} />
    </View>
  );
};

export default AlarmItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SWidth * 20,
    gap: SWidth * 2,
    borderColor: colors.border.secondary,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
