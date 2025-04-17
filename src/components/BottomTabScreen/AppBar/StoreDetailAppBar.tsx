import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {useStoreData} from '../../../store/storeRoute';
import BackArrow24 from '../../../utils/svgs/BackArrow24';
import FillHeart24 from '../../../utils/svgs/mainPage/FillHeart24';
import Heart24 from '../../../utils/svgs/myPage/Heart24';
import SText from '../../Elements/SText';

const StoreDetailAppBar = () => {
  const navigation = useCustomNavigation();
  const [clicked, setClicked] = useState(false);
  const {title} = useStoreData();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <BackArrow24 />
      </Pressable>
      <SText fStyle="BlgMd" text={title} />
      <Pressable onPress={() => setClicked(!clicked)} hitSlop={10}>
        {clicked ? (
          <FillHeart24 color={colors.icon.interactive.primary} />
        ) : (
          <Heart24 color={colors.icon.interactive.primary} />
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
