import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import BusinessCalendar from '../../../../utils/svgs/businessPage/BusinessCalendar';
import {StoreDetailEventItemProps} from '../../../../utils/types/StoreDetailType';
import SText from '../../../Elements/SText';
import StoreDetailIconTitle from '../StoreDetailIconTitle';
import StoreDetailDDay from './StoreDetailDDay';
import StoreDetailImageText from './StoreDetailImageText';

const StoreDetailEventItem = ({item}: StoreDetailEventItemProps) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.imgContainer}>
        <FastImage
          source={item.img}
          style={styles.imgStyle}
          resizeMode={FastImage.resizeMode.cover}
        />
        <StoreDetailDDay title="D-13" />
        <StoreDetailImageText />
      </View>
      <View style={styles.itemContentContainer}>
        <SText fStyle="BxlSb" text={item.title} />
        <StoreDetailIconTitle icon={<BusinessCalendar />} gap={SWidth * 4}>
          <SText fStyle="BmdMd" text={item.title} color={'#404040'} />
        </StoreDetailIconTitle>
        <View style={styles.contentText}>
          {item.content.map((text, index) => (
            <SText key={index} fStyle="BmdMd" text={text} color={'#525252'} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default StoreDetailEventItem;

const styles = StyleSheet.create({
  listItem: {
    width: SWidth * 304,
    borderRadius: SWidth * 8,
    overflow: 'hidden',
    boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.05)',
  },

  imgContainer: {
    position: 'relative',
  },

  imgStyle: {
    width: '100%',
    height: SWidth * 140,
    zIndex: -1,
  },

  itemContentContainer: {
    padding: SWidth * 16,
    gap: SWidth * 16,
  },

  contentText: {
    gap: SWidth * 8,
  },
});
