import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SText from '../Elements/SText';
const UserInfo = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../assets/images/myPageImage.png')}
        style={styles.imageStyle}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.textContainer}>
        <SText fStyle="BxlSb" text={'아름다운 오렌지'} />
        <SText fStyle="BlgRg" text={'송소희'} />
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 16,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    padding: SWidth * 16,
    borderRadius: SWidth * 12,
    alignItems: 'center',
    gap: SWidth * 16,
  },
  imageStyle: {
    width: SWidth * 64,
    height: SWidth * 64,
    borderRadius: SWidth * 999,
  },

  textContainer: {
    gap: SWidth * 4,
  },
});
