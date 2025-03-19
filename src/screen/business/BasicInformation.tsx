import React from 'react';
import {StyleSheet} from 'react-native';
import StoreInfo from '../../components/BusinessPage/Basic/BasicStoreInfo';
import BusinessInfo from '../../components/BusinessPage/Basic/BusinessInfo';
import {BasicInformationProps} from '../../utils/types/businessType';

const BasicInformation = ({data}: BasicInformationProps) => {
  return (
    <>
      <BusinessInfo data={data} />
      <StoreInfo />
    </>
  );
};

export default BasicInformation;

const styles = StyleSheet.create({});
