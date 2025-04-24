import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors, SWidth} from '../../../../globalStyle';
import {SkeletonProps} from '../../../utils/types/type';

const SImageCardLoading = ({count}: SkeletonProps) => {
  return Array.from({length: count}).map((_, index) => (
    <View
      key={index}
      style={{
        boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.05)',
        borderRadius: SWidth * 8,
        overflow: 'hidden',
        backgroundColor: colors.white,
      }}>
      <SkeletonPlaceholder>
        <>
          <View style={{width: '100%', height: SWidth * 172}} />
          <View
            style={{
              padding: SWidth * 16,
              gap: SWidth * 12,
              borderRadius: SWidth * 8,
            }}>
            <View style={{width: '85%', height: SWidth * 24}} />
            <View style={{gap: SWidth * 8}}>
              <View style={{width: '70%', height: SWidth * 20}} />
              <View style={{width: '80%', height: SWidth * 20}} />
            </View>
          </View>
        </>
      </SkeletonPlaceholder>
    </View>
  ));
};

export default SImageCardLoading;
