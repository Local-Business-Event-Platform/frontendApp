import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import {StoreDetailEventProps} from '../../../../utils/types/StoreDetailType';
import SFlatList from '../../../Elements/SFlatList';
import EventItemLoading from '../../../Elements/Skeleton/EventItemLoading';
import StoreDetailEventItem from './StoreDetailEventItem';

const StoreDetailEvent = ({data}: StoreDetailEventProps) => {
  return (
    <View style={styles.container}>
      <SFlatList
        data={data}
        gap={SWidth * 16}
        paddingHorizontal={SWidth * 24}
        paddingBottom={SWidth * 24}
        horizontal
        skeleton={<EventItemLoading count={4} />}
        dataItem={({item}) => <StoreDetailEventItem item={item} />}
      />
    </View>
  );
};

export default StoreDetailEvent;

const styles = StyleSheet.create({
  container: {
    paddingTop: SWidth * 24,
  },
  listItem: {
    width: SWidth * 304,
    borderRadius: SWidth * 8,
    overflow: 'hidden',
    boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.05)',
  },

  imgContainer: {
    width: '100%',
    height: SWidth * 140,
  },

  itemContentContainer: {
    padding: SWidth * 16,
    gap: SWidth * 16,
  },

  contentText: {
    gap: SWidth * 8,
  },
});
