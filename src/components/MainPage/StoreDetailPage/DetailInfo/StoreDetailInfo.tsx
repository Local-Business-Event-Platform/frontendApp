import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import Location24 from '../../../../utils/svgs/businessPage/Location24';
import Calling24 from '../../../../utils/svgs/storeDetailPage/Calling24';
import Time24 from '../../../../utils/svgs/storeDetailPage/Time24';
import {StoreDetailInfoProps} from '../../../../utils/types/StoreDetailType';
import SText from '../../../Elements/SText';
import StoreDetailIconTitle from '../StoreDetailIconTitle';
import DetailMap from './DetailMap';

const StoreDetailInfo = ({data}: StoreDetailInfoProps) => {
  return (
    <View style={styles.container}>
      <View style={{gap: 0}}>
        <View style={styles.timeIconContainer}>
          <Time24 />
          <View style={styles.timeContainer}>
            <SText
              fStyle="BlgMd"
              text={data.time}
              color={colors.text.secondary}
            />
            <SText
              fStyle="BlgMd"
              text={data.holiday}
              color={`${colors.text.tertiary}B3`}
            />
          </View>
        </View>
        <StoreDetailIconTitle icon={<Calling24 />}>
          <SText
            fStyle="BlgMd"
            text={data.call}
            color={colors.text.secondary}
          />
        </StoreDetailIconTitle>
      </View>
      <View style={styles.addressContainer}>
        <StoreDetailIconTitle icon={<Location24 />}>
          <View style={styles.rowContainer}>
            <SText
              fStyle="BlgMd"
              text={data.address}
              color={colors.text.secondary}
            />
            <SText
              fStyle="BlgMd"
              text={data.distance}
              color={colors.text.disabled}
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
