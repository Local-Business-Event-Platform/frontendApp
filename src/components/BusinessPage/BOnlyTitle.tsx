import React from 'react';
import {StyleSheet} from 'react-native';
import {BOnlyTitleProps} from '../../utils/types/businessType';
import SText from '../Elements/SText';

const BOnlyTitle = ({title}: BOnlyTitleProps) => {
  return <SText fStyle="Hmd" text={title} />;
};

export default BOnlyTitle;

const styles = StyleSheet.create({});
