import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import {BContentTimeProps} from '../../utils/types/businessType';
import SText from '../Elements/SText';
import EventDateButton from './Event/EventDateButton';

const BContentTime = ({
  title,
  startTitle,
  endTitle,
  startTitleColor = colors.text.disabled,
  endTitleColor = colors.text.disabled,
  DateIcon,
  content,
  contentColor = colors.text.disabled,
  color,
  underline,
  onClick,
  startPress,
  endPress,
  onLayout,
  startBorderColor,
  endBorderColor,
}: BContentTimeProps) => {
  return (
    <View style={styles.container}>
      <SText
        fStyle="BmdMd"
        text={title}
        color={color}
        textDecorationLine={underline}
        lineColor={color}
      />
      {onClick ? (
        <View style={styles.dateContainer}>
          <EventDateButton
            title={startTitle}
            textColor={startTitleColor}
            icon={DateIcon}
            onPress={startPress}
            onLayout={onLayout}
            borderColor={startBorderColor}
          />
          <EventDateButton
            title={endTitle}
            textColor={endTitleColor}
            icon={DateIcon}
            onPress={endPress}
            onLayout={onLayout}
            borderColor={endBorderColor}
          />
        </View>
      ) : (
        <SText
          nLine={10}
          flexShrink={1}
          lineHeight={SWidth * 24}
          fStyle="BxlSb"
          text={content}
          color={contentColor}
        />
      )}
    </View>
  );
};

export default BContentTime;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 8,
  },

  dateContainer: {
    flexDirection: 'row',
    gap: SWidth * 8,
  },
});
