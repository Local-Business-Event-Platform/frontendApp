import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SText from '../Elements/SText';
const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <FastImage
          source={require('../../assets/images/myPageImage.png')}
          style={styles.imageStyle}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.textContainer}>
          <SText fStyle="BxlSb" text={'닉네임'} />
          <SText fStyle="BlgRg" text={'이름'} />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.contentStyle}>
          <SText fStyle="BxlSb" text={'8'} />
          <SText fStyle="BmdRg" text={'최근 조회'} />
        </View>
        <View style={styles.contentStyle}>
          <SText fStyle="BxlSb" text={'10'} />
          <SText fStyle="BmdRg" text={'참여 기록'} />
        </View>
        <View style={styles.contentStyle}>
          <SText fStyle="BxlSb" text={'6'} />
          <SText fStyle="BmdRg" text={'리뷰 관리'} />
        </View>
        <View style={styles.contentStyle}>
          <SText fStyle="BxlSb" text={'4'} />
          <SText fStyle="BmdRg" text={'관심 가게'} />
        </View>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 12,
    backgroundColor: '#FAFAFA',
    padding: SWidth * 16,
    borderRadius: SWidth * 8,
    gap: SWidth * 12,
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 16,
  },

  imageStyle: {
    width: SWidth * 72,
    height: SWidth * 72,
    borderRadius: SWidth * 999,
  },

  textContainer: {
    gap: SWidth * 4,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  contentStyle: {
    flex: 1,
    height: SWidth * 76,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SWidth * 8,
  },
});
