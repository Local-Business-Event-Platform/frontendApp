import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import BusinessCirclePlus from '../../../utils/svgs/businessPage/BusinessCirclePlus';
import SText from '../../Elements/SText';
const StoreImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable style={styles.rowLine} onPress={() => {}}>
          <BusinessCirclePlus />
          <SText
            fStyle="BlgSb"
            text={'이미지 등록하기 (최대 6장)'}
            color={'#525252'}
          />
        </Pressable>
      </View>
      <FastImage source={require('../../../assets/images/no_image.jpg')} />
    </View>
  );
};

export default StoreImage;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
  },

  imageContainer: {
    width: '100%',
    height: SWidth * 200,
    backgroundColor: '#F5F5F5',
    borderRadius: SWidth * 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rowLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
