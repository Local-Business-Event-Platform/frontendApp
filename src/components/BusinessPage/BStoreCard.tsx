import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import BusinessLocation from '../../utils/svgs/businessPage/BusinessLocation';
import BusinessStar from '../../utils/svgs/businessPage/BusinessStar';
import SText from '../Elements/SText';
type BStoreCardProps = {
  item: {
    id: number;
    name: string;
    review: number;
    reviewCount: number;
    category: string;
    image: any;
  };
  onPress?: () => void;
};

const BStoreCard = ({item, onPress}: BStoreCardProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FastImage
        source={item.image}
        style={styles.imgContainer}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.contentContainer}>
        <View style={styles.contentTextContainer}>
          <View style={styles.rowContainer}>
            <SText fStyle="BxlSb" text={item.name} />
            <SText fStyle="BlgMd" text={item.category} color={'#A1A1A1'} />
          </View>
          <View style={styles.reviewContainer}>
            <BusinessStar />
            <SText fStyle="BmdSb" text={`${item.review} / 5.0`} />
            <SText fStyle="BmdSb" text={`(${item.reviewCount})`} />
          </View>
          <View style={styles.rowContainer}>
            <BusinessLocation />
            <SText fStyle="BmdMd" text={'350m / 도보 5분'} color={'#404040'} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default BStoreCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    marginBottom: SWidth * 20,
    zIndex: 10,
  },

  imgContainer: {
    width: '100%',
    height: SWidth * 172,
  },
  contentContainer: {
    padding: SWidth * 16,
    gap: SWidth * 16,
  },

  contentTextContainer: {
    gap: SWidth * 8,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },
  reviewContainer: {
    backgroundColor: '#FEFCE8',
    flexDirection: 'row',
    paddingHorizontal: SWidth * 4,
    paddingVertical: SWidth * 2,
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: SWidth * 4,
  },
});
