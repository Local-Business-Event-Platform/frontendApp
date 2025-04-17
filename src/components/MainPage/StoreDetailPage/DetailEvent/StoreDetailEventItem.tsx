import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import Calendar24 from '../../../../utils/svgs/businessPage/Calendar24';
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
          source={{uri: item.img}}
          style={styles.imgStyle}
          resizeMode={FastImage.resizeMode.cover}
        />
        <StoreDetailDDay title="D-13" />
        <StoreDetailImageText />
      </View>
      <View style={styles.itemContentContainer}>
        <SText
          flexShrink={1}
          nLine={3}
          lineHeight={SWidth * 28}
          fStyle="BxlSb"
          text={item.title}
        />
        <StoreDetailIconTitle icon={<Calendar24 />} gap={SWidth * 4}>
          <SText
            fStyle="BmdMd"
            text={item.title}
            color={colors.text.secondary}
          />
        </StoreDetailIconTitle>
        <View style={styles.contentText}>
          {item.content.map((text, index) => (
            <SText
              key={index}
              fStyle="BmdMd"
              text={text}
              color={colors.text.tertiary}
            />
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
