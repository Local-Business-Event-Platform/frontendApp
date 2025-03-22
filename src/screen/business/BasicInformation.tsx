import React from 'react';
import {StyleSheet} from 'react-native';
import StoreInfo from '../../components/BusinessPage/Basic/BasicStoreInfo';
import BusinessInfo from '../../components/BusinessPage/Basic/BusinessInfo';
import {BDataProps} from '../../utils/types/businessType';

type BasicInformationProps = {
  data: BDataProps;
};

const BasicInformation = ({data}: BasicInformationProps) => {
  return (
    <>
      <BusinessInfo data={data} />
      <StoreInfo data={data} />
    </>
  );
};

export default BasicInformation;

const styles = StyleSheet.create({});
