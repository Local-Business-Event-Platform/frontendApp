import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import BusinessLocation from '../../utils/svgs/businessPage/BusinessLocation';
import BusinessStar from '../../utils/svgs/businessPage/BusinessStar';
import SImageCard from '../Elements/SImageCard';
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
    <SImageCard source={item.image} onPress={onPress} cardType="store">
      <View style={styles.container}>
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
        </View>
        <View style={styles.rowContainer}>
          <BusinessLocation />
          <SText fStyle="BmdMd" text={'350m / 도보 5분'} color={'#404040'} />
        </View>
      </View>
    </SImageCard>
  );
};

export default BStoreCard;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 16,
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
