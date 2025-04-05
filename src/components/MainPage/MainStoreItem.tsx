import FastImage from '@d11/react-native-fast-image';
import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import MainFillHeart from '../../utils/svgs/mainPage/MainFillHeart';
import MyPageHeart from '../../utils/svgs/myPage/MyPageHeart';
import {MainStoreItemProps} from '../../utils/types/mainType';
import SMeterBox from '../Elements/SMeterBox';
import SReviewBox from '../Elements/SReviewBox';
import SText from '../Elements/SText';

const MainStoreItem = ({
  storeImg,
  title,
  category,
  review,
  reviewCount,
  onPress,
}: MainStoreItemProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FastImage
        source={storeImg}
        style={styles.imgStyle}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.textContainer}>
        <View>
          <View style={styles.titleContainer}>
            <View style={styles.rowContainer}>
              <SText fStyle="BlgSb" text={title} />
              <SText fStyle="BmdMd" text={category} color={colors.disabled} />
            </View>
            <Pressable
              style={styles.iconBox}
              hitSlop={10}
              onPress={() => setIsClicked(!isClicked)}>
              {isClicked ? (
                <MainFillHeart />
              ) : (
                <MyPageHeart color={colors.interactive.primary} />
              )}
            </Pressable>
          </View>
          <SReviewBox review={review} reviewCount={reviewCount} />
        </View>
        <SMeterBox content="350m / 도보 5분" />
      </View>
    </Pressable>
  );
};

export default MainStoreItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: SWidth * 8,
    overflow: 'hidden',
    boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.05)',
  },

  imgStyle: {
    width: SWidth * 110,
    height: SWidth * 110,
  },
  textContainer: {
    flex: 1,
    paddingTop: SWidth * 8,
    paddingHorizontal: SWidth * 12,
    gap: SWidth * 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleReviewContainer: {},

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },

  iconBox: {
    width: SWidth * 32,
    height: SWidth * 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  reviewContainer: {
    backgroundColor: '#FEFCE8',
    flexDirection: 'row',
    paddingHorizontal: SWidth * 4,
    paddingVertical: SWidth * 2,
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: SWidth * 4,
  },
});
