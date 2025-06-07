import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import Check24 from '../../../utils/svgs/auth/Check24';
import {
  BStoreInfoData,
  BStoreTimeOpen,
} from '../../../utils/types/businessType';
import SText from '../../Elements/SText';

type StoreTimeListProps = {
  listWidth: number;
  storeData: BStoreInfoData;
  openTime: BStoreTimeOpen;
  setStoreData: React.Dispatch<React.SetStateAction<BStoreInfoData>>;
  setOpenTime: React.Dispatch<React.SetStateAction<BStoreTimeOpen>>;
};

const StoreTimeList = ({
  listWidth,
  storeData,
  setStoreData,
  openTime,
  setOpenTime,
}: StoreTimeListProps) => {
  const timeList = [
    {id: 1, time: '11:00'},
    {id: 2, time: '11:30'},
    {id: 3, time: '12:00'},
    {id: 4, time: '12:30'},
    {id: 5, time: '13:00'},
  ];
  return (
    <View
      style={[
        styles.container,
        {
          width: listWidth,
          left: openTime.start ? 0 : null,
          right: openTime.end ? 0 : null,
        },
      ]}>
      {timeList.map(item => (
        <Pressable
          key={item.id}
          style={styles.timeItem}
          onPress={() => {
            if (openTime.start) {
              setStoreData({
                ...storeData,
                startTime: item.time,
              });
              setOpenTime({...openTime, start: false});
            } else if (openTime.end) {
              setStoreData({
                ...storeData,
                endTime: item.time,
              });
              setOpenTime({...openTime, end: false});
            }
          }}>
          <Check24 color={colors.icon.primary} />
          <SText fStyle="BlgMd" text={item.time} />
        </Pressable>
      ))}
    </View>
  );
};

export default StoreTimeList;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: SWidth * 82,
    backgroundColor: colors.bg.primary,
    zIndex: 10,
    borderWidth: 1,
    borderColor: colors.border.secondary,
    borderRadius: SWidth * 8,
    paddingVertical: SWidth * 8,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
  },

  timeItem: {
    height: SWidth * 40,
    gap: SWidth * 4,
    paddingHorizontal: SWidth * 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
