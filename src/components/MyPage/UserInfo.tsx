import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {myPageUserDataList} from '../../utils/listData';
import Pen16 from '../../utils/svgs/myPage/Pen16';
import SText from '../Elements/SText';

type UserInfoProps = {
  userInfo: {
    userNickname: string;
    userName: string;
    userImage: string;
    userType: string;
  };
};

const UserInfo = ({userInfo}: UserInfoProps) => {
  const navigation = useCustomNavigation();
  const data: Record<string, number> = {
    '최근 조회': 8,
    '참여 기록': 10,
    '리뷰 관리': 6,
    '관심 가게': 4,
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.imageContainer}>
          <FastImage
            source={{
              uri: Image.resolveAssetSource(
                require('../../assets/images/myPageImage.png'),
              ).uri,
            }}
            style={styles.imageStyle}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Pressable style={styles.imageUpdateIcon} onPress={() => {}}>
            <Pen16 />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <SText fStyle="BxlSb" text={'닉네임'} />
          <SText fStyle="BlgRg" text={'이름'} />
        </View>
      </View>
      {userInfo.userType === 'user' && (
        <View style={styles.rowContainer}>
          {myPageUserDataList.map(item => (
            <Pressable
              key={item.id}
              style={styles.contentStyle}
              onPress={() => navigation.navigate(item.onPress)}>
              <SText fStyle="BxlSb" text={data[item.title]} />
              <SText fStyle="BmdRg" text={item.title} />
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 12,
    backgroundColor: colors.bg.secondary,
    padding: SWidth * 16,
    borderRadius: SWidth * 8,
    gap: SWidth * 12,
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 16,
  },

  imageContainer: {
    position: 'relative',
  },

  imageStyle: {
    width: SWidth * 72,
    height: SWidth * 72,
    borderRadius: SWidth * 999,
  },

  imageUpdateIcon: {
    width: SWidth * 24,
    height: SWidth * 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg.tertiary,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 999,
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
