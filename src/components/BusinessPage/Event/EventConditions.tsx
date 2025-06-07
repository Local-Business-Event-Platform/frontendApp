import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import ArrowUp24 from '../../../utils/svgs/businessPage/ArrowUp24';
import DownArrow24 from '../../../utils/svgs/businessPage/DownArrow24';
import SCheckBox from '../../Elements/SCheckBox';
import SText from '../../Elements/SText';
import EventDateList from './EventDateList';

const EventConditions = () => {
  const [checkBox, setCheckBox] = useState(false);
  const [dateClicked, setDateClicked] = useState(false);
  const [dateTitle, setDateTitle] = useState('전체기간');
  const dateList = [
    {id: 1, title: '전체 기간'},
    {id: 2, title: '1일'},
    {id: 3, title: '3일'},
    {id: 4, title: '7일'},
    {id: 5, title: '최초'},
  ];

  return (
    <Pressable style={styles.container} onPress={() => setDateClicked(false)}>
      <View style={styles.titleContainer}>
        <SText fStyle="BmdMd" text={'참여조건'} color={colors.text.tertiary} />
        <View style={styles.checkBoxContainer}>
          <SCheckBox
            checkValue={checkBox}
            onPress={() => {
              setDateClicked(false);
              setCheckBox(!checkBox);
            }}
          />
          <SText
            fStyle="BmdMd"
            text={'제한없음'}
            color={colors.text.secondary}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <SText
          fStyle="BlgMd"
          text={'1개 아이디당'}
          color={checkBox ? colors.text.disabled : colors.text.tertiary}
        />
        <Pressable
          disabled={checkBox}
          style={[
            styles.dateBox,
            {
              borderColor: checkBox
                ? colors.border.disabled
                : dateClicked
                ? colors.border.interactive.primaryPressed
                : dateTitle !== '전체기간'
                ? colors.border.interactive.secondary
                : colors.border.secondary,
              backgroundColor: checkBox
                ? colors.bg.disabled
                : colors.bg.primary,
            },
          ]}
          onPress={() => setDateClicked(!dateClicked)}>
          <EventDateList
            dateClicked={dateClicked}
            setDateClicked={setDateClicked}
            setDateTitle={setDateTitle}
          />
          <SText
            fStyle="BlgMd"
            text={dateTitle}
            color={
              checkBox
                ? colors.text.disabled
                : dateTitle !== ''
                ? colors.text.primary
                : colors.text.disabled
            }
          />
          {dateClicked ? (
            <ArrowUp24 />
          ) : (
            <DownArrow24
              color={
                checkBox
                  ? colors.icon.disabled
                  : colors.icon.interactive.secondary
              }
            />
          )}
        </Pressable>
        <SText
          fStyle="BlgMd"
          text={'1회 참여가능'}
          color={checkBox ? colors.text.disabled : colors.text.tertiary}
        />
      </View>
    </Pressable>
  );
};

export default EventConditions;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 12,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },

  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },

  dateBox: {
    position: 'relative',
    width: SWidth * 112,
    height: SWidth * 48,
    padding: SWidth * 11,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
    borderRadius: SWidth * 8,
    borderWidth: 1.25,
    justifyContent: 'space-between',
  },

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
