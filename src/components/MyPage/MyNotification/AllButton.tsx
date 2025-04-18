import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {AllButtonProps} from '../../../utils/types/myPage';
import SSwitchButton from '../../Elements/SSwitchButton';
import SText from '../../Elements/SText';
import MyPageTitle from '../MyPageTitle';

const AllButton = ({allClick, allOnPress}: AllButtonProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <MyPageTitle title="전체 알림" />
        <SSwitchButton click={allClick} onPress={allOnPress} />
      </View>
      <SText
        fStyle="BlgMd"
        text={'알림을 한 번에 켜거나 끌 수 있어요'}
        color={colors.text.secondary}
      />
    </View>
  );
};

export default AllButton;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 8,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
