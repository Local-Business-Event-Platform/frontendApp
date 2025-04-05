import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {useStoreData} from '../../../store/storeRoute';
import AppBarBackArrow from '../../../utils/svgs/AppBarBackArrow';
import MainFillHeart from '../../../utils/svgs/mainPage/MainFillHeart';
import MyPageHeart from '../../../utils/svgs/myPage/MyPageHeart';
import SText from '../../Elements/SText';

const StoreDetailAppBar = () => {
  const navigation = useCustomNavigation();
  const [clicked, setClicked] = useState(false);
  const {title} = useStoreData();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <AppBarBackArrow />
      </Pressable>
      <SText fStyle="BlgMd" text={title} />
      <Pressable onPress={() => setClicked(!clicked)} hitSlop={10}>
        {clicked ? (
          <MainFillHeart />
        ) : (
          <MyPageHeart color={colors.interactive.primary} />
        )}
      </Pressable>
    </View>
  );
};

export default StoreDetailAppBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SWidth * 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SWidth * 24,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});
