import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import SMeterBox from '../../Elements/SMeterBox';
import SReviewBox from '../../Elements/SReviewBox';
import SText from '../../Elements/SText';

type RecentStoreItemProps = {
  source: number;
  title: string;
  category: string;
  review: number;
  reviewCount: number;
};

const RecentStoreItem = ({
  source,
  title,
  category,
  review,
  reviewCount,
}: RecentStoreItemProps) => {
  const navigation = useCustomNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('홈', {
          screen: 'detailPage',
        })
      }>
      <FastImage
        source={source}
        style={styles.imgStyle}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.textContainer}>
        <View>
          <View style={styles.titleContainer}>
            <View style={styles.rowContainer}>
              <SText fStyle="BlgSb" text={title} />
              <SText fStyle="BmdMd" text={category} color={'#A1A1A1'} />
            </View>
          </View>
          <SReviewBox review={review} reviewCount={reviewCount} />
        </View>
        <SMeterBox content="350m / 도보 5분" />
      </View>
    </Pressable>
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

  imgStyle: {
    width: SWidth * 110,
    height: SWidth * 110,
  },
  textContainer: {
    flex: 1,
    paddingTop: SWidth * 8,
    paddingHorizontal: SWidth * 12,
    gap: SWidth * 12,
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
