import {BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {useBottomSheetRef} from '../../../store/arrayBottomSheetRoute';
import {filterItems} from '../../../utils/listData';
import ReLoad24 from '../../../utils/svgs/bottomSheet/ReLoad24';
import SButton56 from '../../Elements/SButton56';
import SCheckBox from '../../Elements/SCheckBox';
import STabBar from '../../Elements/STabBar';
import SText from '../../Elements/SText';
import ArraySheetHead from '../SubArraySheet/ArraySheetHead';

const FilterBottomSheet = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const [listIndex, setListIndex] = useState(1);
  const [menuChecked, setMenuChecked] = useState(1);
  const handleSubmit = async () => {
    switch (menuChecked) {
      case 1:
        console.log('최신순');
        break;
      case 2:
        console.log('조회순');
        break;
      case 3:
        console.log('거리순');
        break;
      case 4:
        console.log('리뷰순');
        break;
    }
  };

  const list = [
    {id: 1, title: '한식'},
    {id: 2, title: '중식'},
    {id: 3, title: '일식'},
    {id: 4, title: '양식'},
    {id: 5, title: '분식'},
    {id: 6, title: '패스트푸드'},
    {id: 7, title: '패스트푸드'},
    {id: 8, title: '패스트푸드'},
  ];

  const firstRow = list.slice(0, 7);
  const secondRow = list.slice(7);

  return (
    <BottomSheetView>
      <ArraySheetHead content="필터" onPress={bottomSheetRef.current?.close} />
      <STabBar
        menuList={filterItems}
        setTabIndex={setListIndex}
        tabIndex={listIndex}
      />
      <View style={[styles.listContainer]}>
        <View
          style={[
            styles.listRow,
            {borderRightWidth: secondRow.length > 0 ? 1 : 0},
          ]}>
          {firstRow.map(item => (
            <View key={item.id} style={styles.listItem}>
              <SCheckBox checkValue={false} onPress={() => {}} />
              <SText
                fStyle="BlgMd"
                text={item.title}
                color={colors.text.secondary}
              />
            </View>
          ))}
        </View>
        {secondRow.length > 0 && (
          <View style={styles.listRow}>
            {secondRow.map(item => (
              <View key={item.id} style={styles.listItem}>
                <SCheckBox checkValue={false} onPress={() => {}} />
                <SText
                  fStyle="BlgMd"
                  text={item.title}
                  color={colors.text.secondary}
                />
              </View>
            ))}
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.reLoadButton}>
          <Pressable onPress={() => {}}>
            <ReLoad24 />
          </Pressable>
        </View>
        <SButton56
          title="적용하기"
          textColor={colors.text.interactive.inverse}
          ButtonColor={colors.bg.interactive.primary}
          onPress={handleSubmit}
        />
      </View>
    </BottomSheetView>
  );
};

export default FilterBottomSheet;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    paddingHorizontal: SWidth * 16,
  },
  listRow: {
    flex: 1,
    flexWrap: 'nowrap',
    borderColor: colors.border.secondary,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
    padding: SWidth * 20,
  },

  reLoadButton: {
    width: SWidth * 56,
    height: SWidth * 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SWidth * 8,
    backgroundColor: colors.bg.interactive.secondaryHovered,
  },

  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
    height: SWidth * 80,
    justifyContent: 'center',
    paddingVertical: SWidth * 12,
    paddingHorizontal: SWidth * 16,
  },
});
