import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {mainFilterItems} from '../../../utils/listData';
import SSwitchButton from '../../Elements/SSwitchButton';
import SText from '../../Elements/SText';
import FilterButton from './FilterButton';

type MainFilterProps = {
  search?: boolean;
};

const MainFilter = ({search = true}: MainFilterProps) => {
  const [onClicked, setonClicked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        {mainFilterItems.map(item => (
          <FilterButton
            key={item.id}
            title={item.title}
            icon={<item.icon />}
            onPress={() => {}}
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
          <SText fStyle="BmdMd" text={'내 주변'} color={'#404040'} />
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
