import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors, SWidth} from '../../../../globalStyle';
import {SkeletonProps} from '../../../utils/types/type';

const EventItemLoading = ({count}: SkeletonProps) => {
  return Array.from({length: count}).map((_, index) => (
    <View key={index} style={styles.container}>
      <SkeletonPlaceholder>
        <View>
          <View style={{width: '100%', height: SWidth * 140}} />
          <View style={{padding: SWidth * 16, gap: SWidth * 16}}>
            <View
              style={{
                width: SWidth * 200,
                height: SWidth * 28,
                borderRadius: SWidth * 8,
              }}
            />
            <View
              style={{
                width: SWidth * 150,
                height: SWidth * 20,
                borderRadius: SWidth * 8,
              }}
            />
            <View
              style={{
                width: SWidth * 200,
                height: SWidth * 20,
                borderRadius: SWidth * 8,
              }}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  ));
};

export default EventItemLoading;

const styles = StyleSheet.create({
  container: {
    width: SWidth * 304,
    borderRadius: SWidth * 8,
    backgroundColor: colors.white,
    overflow: 'hidden',
    boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.05)',
  },
});
