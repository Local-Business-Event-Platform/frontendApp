import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import StoreInfo from '../../components/BusinessPage/Store/StoreInfo';
import StoreMenuCategory from '../../components/BusinessPage/Store/StoreMenuCategory';
import StoreMenuInfo from '../../components/BusinessPage/Store/StoreMenuInfo';
import {BDataProps} from '../../utils/types/businessType';

type BasicInformationProps = {
  data: BDataProps;
};

const StoreInformation = ({data}: BasicInformationProps) => {
  return (
    <View style={styles.container}>
      <StoreInfo data={data} />
      <StoreMenuCategory />
      <StoreMenuInfo />
    </View>
  );
};

export default StoreInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: SWidth * 40,
  },
});
