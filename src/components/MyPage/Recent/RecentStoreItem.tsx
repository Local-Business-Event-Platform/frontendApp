import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import SImageCard2 from '../../Elements/SImageCard2';
import SMeterBox from '../../Elements/SMeterBox';
import SReviewBox from '../../Elements/SReviewBox';
import SText from '../../Elements/SText';

type RecentStoreItemProps = {
  image: string;
  title: string;
  category: string;
  review: number;
  reviewCount: number;
};

const RecentStoreItem = ({
  image,
  title,
  category,
  review,
  reviewCount,
}: RecentStoreItemProps) => {
  const navigation = useCustomNavigation();
  return (
    <SImageCard2
      image={image}
      onPress={() =>
        navigation.navigate('홈', {
          screen: 'detailPage',
        })
      }>
      <View>
        <View style={styles.titleContainer}>
          <View style={styles.rowContainer}>
            <SText fStyle="BlgSb" text={title} />
            <SText fStyle="BmdMd" text={category} color={colors.disabled} />
          </View>
        </View>
        <SReviewBox review={review} reviewCount={reviewCount} />
      </View>
      <SMeterBox content="350m / 도보 5분" />
    </SImageCard2>
  );
};

export default RecentStoreItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: SWidth * 8,
    overflow: 'hidden',
    boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.05)',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
