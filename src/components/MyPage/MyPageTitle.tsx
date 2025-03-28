import React from 'react';
import {StyleSheet} from 'react-native';
import {MyPageTitleProps} from '../../utils/types/myPage';
import SText from '../Elements/SText';

const MyPageTitle = ({title}: MyPageTitleProps) => {
  return <SText fStyle="Hsm" text={title} />;
};

export default MyPageTitle;

const styles = StyleSheet.create({});
