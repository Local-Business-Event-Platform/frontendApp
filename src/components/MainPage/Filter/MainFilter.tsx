import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {
  useArrayBottomSheetTitle,
  useBottomSheetRef,
} from '../../../store/arrayBottomSheetRoute';
import {bottomSheetNames, mainFilterItems} from '../../../utils/listData';
import SSwitchButton from '../../Elements/SSwitchButton';
import SText from '../../Elements/SText';
import FilterButton from './FilterButton';

type MainFilterProps = {
  search?: boolean;
};

const MainFilter = ({search = true}: MainFilterProps) => {
  const [onClicked, setonClicked] = useState(false);
  const {setBottomSheetTitle} = useArrayBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const handleFilterPress = (title: string) => {
    switch (title) {
      case '필터':
        setBottomSheetTitle(bottomSheetNames.FILTER_LIST);
        console.log('필터');
        bottomSheetRef.current?.present();
        break;
      case '정렬':
        setBottomSheetTitle(bottomSheetNames.ARRAY_MENU);
        if (bottomSheetRef.current) {
          console.log('정렬 눌림');
          bottomSheetRef.current?.present();
        }
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        {mainFilterItems.map(item => (
          <FilterButton
            key={item.id}
            title={item.title}
            icon={<item.icon />}
            onPress={() => handleFilterPress(item.title)}
          />
        ))}
      </View>
      {search && (
        <View style={styles.rowContainer}>
          <SSwitchButton
            click={onClicked}
            onPress={() => {
              console.log('필터 눌림');
              setonClicked(!onClicked);
            }}
          />
          <SText
            fStyle="BmdMd"
            text={'내 주변'}
            color={colors.text.secondary}
          />
        </View>
      )}
    </View>
  );
};

export default MainFilter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SWidth * 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
