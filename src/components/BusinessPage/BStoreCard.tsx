import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SImageCard from '../Elements/SImageCard';
import SMeterBox from '../Elements/SMeterBox';
import SReviewBox from '../Elements/SReviewBox';
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
          <SReviewBox review={item.review} reviewCount={item.reviewCount} />
        </View>
        <SMeterBox content="350m / 도보 5분" />
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
});
