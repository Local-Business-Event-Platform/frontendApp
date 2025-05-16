import {BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {useBottomSheetRef} from '../../../store/arrayBottomSheetRoute';
import {arrayBottomSheetMenuList} from '../../../utils/listData';
import Radio16 from '../../../utils/svgs/bottomSheet/Radio16';
import RadioCheck16 from '../../../utils/svgs/bottomSheet/RadioCheck16';
import SButton56 from '../../Elements/SButton56';
import SText from '../../Elements/SText';
import ArraySheetHead from './ArraySheetHead';

const SubArraySheet = () => {
  const {bottomSheetRef} = useBottomSheetRef();
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

  return (
    <BottomSheetView style={styles.container}>
      <ArraySheetHead onPress={bottomSheetRef.current?.close} />
      {arrayBottomSheetMenuList.map((item, index) => (
        <Pressable
          key={item.id}
          style={styles.itemContainer}
          onPress={() => setMenuChecked(item.id)}>
          {menuChecked === index + 1 ? <RadioCheck16 /> : <Radio16 />}
          <SText
            fStyle="BlgMd"
            text={item.title}
            color={colors.text.secondary}
          />
        </Pressable>
      ))}

      <View style={styles.buttonContainer}>
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

export default SubArraySheet;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  itemContainer: {
    height: SWidth * 56,
    paddingHorizontal: SWidth * 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },

  buttonContainer: {
    width: '100%',
    height: SWidth * 80,
    justifyContent: 'center',
    paddingVertical: SWidth * 12,
    paddingHorizontal: SWidth * 16,
  },
});
