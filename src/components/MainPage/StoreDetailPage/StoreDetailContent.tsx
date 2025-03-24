import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import BusinessStar from '../../../utils/svgs/businessPage/BusinessStar';
import {StoreDetailContentProps} from '../../../utils/types/StoreDetailType';
import SText from '../../Elements/SText';

const StoreDetailContent = ({data}: StoreDetailContentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SText fStyle="BxlSb" text={data.title} />
        <View style={styles.reviewContainer}>
          <BusinessStar />
          <SText fStyle="BmdSb" text={`${data.review} / 5.0`} />
          <SText fStyle="BmdSb" text={`(${data.reviewCount})`} />
        </View>
      </View>
      <SText
        lineHeight={SWidth * 20}
        flexShrink={1}
        nLine={100}
        fStyle="BlgRg"
        text={data.content}
      />
    </View>
  );
};

export default StoreDetailContent;

const styles = StyleSheet.create({
  container: {
    padding: SWidth * 24,
    gap: SWidth * 20,
  },

  titleContainer: {
    gap: SWidth * 8,
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
