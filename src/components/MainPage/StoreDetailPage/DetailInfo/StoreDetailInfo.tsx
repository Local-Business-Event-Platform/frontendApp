import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import BusinessLocation from '../../../../utils/svgs/businessPage/BusinessLocation';
import DetailCallingIcon from '../../../../utils/svgs/storeDetailPage/DetailCallingIcon';
import DetailTimeIcon from '../../../../utils/svgs/storeDetailPage/DetailTimeIcon';
import {StoreDetailInfoProps} from '../../../../utils/types/StoreDetailType';
import SText from '../../../Elements/SText';
import StoreDetailIconTitle from '../StoreDetailIconTitle';
import DetailMap from './DetailMap';

const StoreDetailInfo = ({data}: StoreDetailInfoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.timeIconContainer}>
        <DetailTimeIcon />
        <View style={styles.timeContainer}>
          <SText fStyle="BlgMd" text={data.time} color={colors.secondary} />
          <SText fStyle="BlgMd" text={data.holiday} color={'#525252B3'} />
        </View>
      </View>
      <StoreDetailIconTitle icon={<DetailCallingIcon />}>
        <SText fStyle="BlgMd" text={data.call} color={colors.secondary} />
      </StoreDetailIconTitle>
      <View style={styles.addressContainer}>
        <StoreDetailIconTitle icon={<BusinessLocation />}>
          <View style={styles.rowContainer}>
            <SText
              fStyle="BlgMd"
              text={data.address}
              color={colors.secondary}
            />
            <SText
              fStyle="BlgMd"
              text={data.distance}
              color={colors.disabled}
            />
          </View>
        </StoreDetailIconTitle>
        <DetailMap x={data.x} y={data.y} />
      </View>
    </View>
  );
};

export default StoreDetailInfo;

const styles = StyleSheet.create({
  container: {
    padding: SWidth * 24,
    paddingBottom: SWidth * 36,
    gap: SWidth * 16,
  },
  timeIconContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SWidth * 8,
  },

  timeContainer: {
    gap: SWidth * 4,
  },

  addressContainer: {
    gap: SWidth * 12,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
