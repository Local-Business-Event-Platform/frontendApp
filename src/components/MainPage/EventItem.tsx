import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import Calendar24 from '../../utils/svgs/businessPage/Calendar24';
import Location24 from '../../utils/svgs/businessPage/Location24';
import {EventItemProps} from '../../utils/types/mainType';
import SImageCard from '../Elements/SImageCard';
import SText from '../Elements/SText';
import EventLikeButton from './EventLikeButton';

const EventItem = ({item, clicked, onPress, likeOnPress}: EventItemProps) => {
  return (
    <SImageCard
      image={item.img}
      onPress={onPress}
      childrenButton={
        <EventLikeButton click={clicked} onPress={likeOnPress} />
      }>
      <View style={styles.container}>
        <SText fStyle="BxlSb" text={item.title} />
        <View style={styles.contentContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.rowTitleContainer}>
              <Location24 />
              <SText
                fStyle="BmdMd"
                text={item.store}
                color={colors.secondary}
              />
              <SText
                fStyle="BmdMd"
                text={`(${item.category})`}
                color={colors.secondary}
              />
            </View>
            <SText fStyle="BmdMd" text={'·'} color={colors.secondary} />
            <SText fStyle="BmdMd" text={item.km} color={colors.secondary} />
          </View>
          <View style={styles.rowTitleContainer}>
            <Calendar24 color={colors.interactive.primary} />
            <SText fStyle="BmdMd" text={item.date} color={colors.secondary} />
          </View>
        </View>
      </View>
    </SImageCard>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 12,
  },

  contentContainer: {
    gap: SWidth * 4,
  },

  rowTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
