import React from 'react';
import {StyleSheet} from 'react-native';
import BusinessInfo from '../../components/BusinessPage/Basic/BusinessInfo';
import StoreInfo from '../../components/BusinessPage/Basic/StoreInfo';

const BasicInformation = () => {
  return (
    <>
      <BusinessInfo />
      <StoreInfo />
    </>
  );
};

export default BasicInformation;

const styles = StyleSheet.create({});
