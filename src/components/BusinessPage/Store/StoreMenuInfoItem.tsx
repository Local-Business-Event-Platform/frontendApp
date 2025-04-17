import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import Burger24 from '../../../utils/svgs/businessPage/Burger24';
import {StoreMenuInfoItemProps} from '../../../utils/types/businessType';
import SText from '../../Elements/SText';
import StoreUpdateButton from './StoreUpdateButton';

const StoreMenuInfoItem = ({
  image,
  category,
  title,
  price,
  onPress,
}: StoreMenuInfoItemProps) => {
  return (
    <View style={styles.rowContainer}>
      <Burger24 />
      <View style={styles.rowLine}>
        <FastImage
          source={{uri: image}}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.imageStyle}
        />
        <View style={styles.contentContainer}>
          <SText fStyle="BmdSb" text={category} color={colors.text.tertiary} />
          <View style={styles.contentGap}>
            <SText fStyle="BxlSb" text={title} color={colors.text.secondary} />
            <SText
              fStyle="BxlSb"
              text={price.toLocaleString()}
              color={colors.text.tertiary}
            />
          </View>
        </View>
      </View>
      <StoreUpdateButton onPress={onPress} />
    </View>
  );
};

export default StoreMenuInfoItem;

const styles = StyleSheet.create({
  rowContainer: {
    height: SWidth * 78,
    flexDirection: 'row',
    gap: SWidth * 4,
    alignItems: 'center',
  },

  rowLine: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    gap: SWidth * 16,
  },

  imageStyle: {
    width: SWidth * 78,
    height: SWidth * 78,
    borderRadius: SWidth * 4,
  },

  contentContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },

  contentGap: {
    gap: SWidth * 2,
  },
});
