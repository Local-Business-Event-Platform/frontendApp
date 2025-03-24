import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import BusinessCalendar from '../../utils/svgs/businessPage/BusinessCalendar';
import BusinessLocation from '../../utils/svgs/businessPage/BusinessLocation';
import SImageCard from '../Elements/SImageCard';
import SText from '../Elements/SText';
import EventLikeButton from './EventLikeButton';

type EventItemProps = {
  item: {
    id: number;
    img: any;
    title: string;
    store: string;
    category: string;
    km: string;
    date: string;
  };
  clicked: boolean;
  onPress: () => void;
  likeOnPress?: () => void;
};

const EventItem = ({item, clicked, onPress, likeOnPress}: EventItemProps) => {
  return (
    <SImageCard
      source={item.img}
      cardType="event"
      onPress={onPress}
      childrenButton={
        <EventLikeButton click={clicked} onPress={likeOnPress} />
      }>
      <View style={styles.container}>
        <SText fStyle="BxlSb" text={item.title} />
        <View style={styles.contentContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.rowTitleContainer}>
              <BusinessLocation />
              <SText fStyle="BmdMd" text={item.store} color={'#404040'} />
              <SText
                fStyle="BmdMd"
                text={`(${item.category})`}
                color={'#404040'}
              />
            </View>
            <SText fStyle="BmdMd" text={'·'} color={'#404040'} />
            <SText fStyle="BmdMd" text={item.km} color={'#404040'} />
          </View>
          <View style={styles.rowTitleContainer}>
            <BusinessCalendar color={'#155DFC'} />
            <SText fStyle="BmdMd" text={item.date} color={'#404040'} />
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
