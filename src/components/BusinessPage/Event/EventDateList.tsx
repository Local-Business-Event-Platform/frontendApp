import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Pressable} from 'react-native-gesture-handler';
import {colors, SWidth} from '../../../../globalStyle';
import Check24 from '../../../utils/svgs/auth/Check24';
import SText from '../../Elements/SText';

type EventDateListProps = {
  dateClicked: boolean;
  setDateTitle: (title: string) => void;
  setDateClicked: (clicked: boolean) => void;
};

const EventDateList = ({
  dateClicked,
  setDateTitle,
  setDateClicked,
}: EventDateListProps) => {
  const dateList = [
    {id: 1, title: '전체 기간'},
    {id: 2, title: '1일'},
    {id: 3, title: '3일'},
    {id: 4, title: '7일'},
    {id: 5, title: '최초'},
  ];

  return (
    dateClicked && (
      <View style={styles.dateList}>
        {dateList.map(item => (
          <Pressable
            key={item.id}
            style={styles.dateItemBox}
            onPress={() => {
              setDateTitle(item.title);
              setDateClicked(false);
            }}>
            <Check24 color={colors.icon.primary} />
            <SText
              fStyle="BmdMd"
              text={item.title}
              color={colors.text.primary}
            />
          </Pressable>
        ))}
      </View>
    )
  );
};

export default EventDateList;

const styles = StyleSheet.create({
  dateList: {
    width: SWidth * 112,
    position: 'absolute',
    bottom: SWidth * 54,
    left: 0,
    backgroundColor: colors.bg.primary,
    borderRadius: SWidth * 8,
    borderWidth: 1,
    borderColor: colors.border.secondary,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.08)',
    paddingVertical: SWidth * 8,
  },

  dateItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
    height: SWidth * 40,
    paddingHorizontal: SWidth * 8,
  },
});
