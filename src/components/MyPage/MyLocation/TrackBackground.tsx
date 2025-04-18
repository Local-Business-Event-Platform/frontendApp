import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';

type TrackBackgroundProps = {
  location: number;
};
const TrackBackground = ({location}: TrackBackgroundProps) => {
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        bottom: SWidth * 6.5,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          height: SWidth * 12,
          borderTopLeftRadius: SWidth * 4,
          borderBottomLeftRadius: SWidth * 4,
          borderWidth: 1,
          borderColor:
            location <= 1000
              ? colors.border.secondary
              : colors.border.interactive.primaryHovered,
        }}
      />
      <View
        style={{
          flex: 1,
          height: SWidth * 12,
          borderTopRightRadius: SWidth * 4,
          borderBottomRightRadius: SWidth * 4,
          borderWidth: 1,
          borderColor:
            location <= 2000
              ? colors.border.secondary
              : colors.border.interactive.primaryHovered,
        }}
      />
    </View>
  );
};

export default TrackBackground;

const styles = StyleSheet.create({});
