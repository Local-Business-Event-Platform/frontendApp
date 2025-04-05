import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {SWidth} from '../../../globalStyle';

type SImageCardLoadingProps = {
  count: number;
};

const SImageCardLoading = ({count}: SImageCardLoadingProps) => {
  return Array.from({length: count}).map((_, index) => (
    <View
      key={index}
      style={{
        boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.05)',
        borderRadius: SWidth * 8,
        overflow: 'hidden',
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
            <View style={{width: '80%', height: SWidth * 24}} />
            <View style={{gap: SWidth * 8}}>
              <View style={{width: '80%', height: SWidth * 20}} />
              <View style={{width: '80%', height: SWidth * 20}} />
            </View>
          </View>
        </>
      </SkeletonPlaceholder>
    </View>
  ));
};

export default SImageCardLoading;
