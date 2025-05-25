import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import Calendar24 from '../../utils/svgs/businessPage/Calendar24';
import Location24 from '../../utils/svgs/businessPage/Location24';
import {EventItemProps} from '../../utils/types/mainType';
import SImageCard from '../Elements/SImageCard';
import SText from '../Elements/SText';
import EventLikeButton from './EventLikeButton';

const EventItem = ({item, onPress}: EventItemProps) => {
  const [clicked, setClicked] = useState(false);
  return (
    <SImageCard
      image={item.img}
      onPress={onPress}
      childrenButton={
        <EventLikeButton click={clicked} onPress={() => setClicked(!clicked)} />
      }>
      <View style={styles.container}>
        <SText fStyle="BxlSb" text={item.title} />
        <View style={styles.contentContainer}>
          <View style={[styles.rowContainer, {gap: SWidth * 8}]}>
            <View style={[styles.rowContainer, {gap: SWidth * 4}]}>
              <Location24 />
              <SText
                fStyle="BmdMd"
                text={item.store}
                color={colors.text.secondary}
              />
              <SText
                fStyle="BmdMd"
                text={`(${item.category})`}
                color={colors.text.secondary}
              />
            </View>
            <SText fStyle="BmdMd" text={'·'} color={colors.text.secondary} />
            <SText
              fStyle="BmdMd"
              text={item.km}
              color={colors.text.secondary}
            />
          </View>
          <View style={[styles.rowContainer, {gap: SWidth * 4}]}>
            <Calendar24 color={colors.icon.interactive.primary} />
            <SText
              fStyle="BmdMd"
              text={item.date}
              color={colors.text.secondary}
            />
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

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
