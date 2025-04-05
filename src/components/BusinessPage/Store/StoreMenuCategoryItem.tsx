import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import BusinessBurger from '../../../utils/svgs/businessPage/BusinessBurger';
import {TitleOnPressProps} from '../../../utils/types/businessType';
import SText from '../../Elements/SText';
import StoreUpdateButton from './StoreUpdateButton';

const StoreMenuCategoryItem = ({
  title,
  onLongPress,
  disabled,
  onPress,
}: TitleOnPressProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowLine}>
        <TouchableOpacity
          activeOpacity={1}
          disabled={disabled}
          onLongPress={onLongPress}>
          <BusinessBurger />
        </TouchableOpacity>
        <SText fStyle="BxlSb" text={title} color={colors.secondary} />
      </View>
      <StoreUpdateButton onPress={onPress} />
    </View>
  );
};

export default StoreMenuCategoryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rowLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 12,
  },
});
