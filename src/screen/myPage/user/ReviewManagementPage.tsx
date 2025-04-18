import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SFlatList from '../../../components/Elements/SFlatList';
import SText from '../../../components/Elements/SText';
import MainFilter from '../../../components/MainPage/Filter/MainFilter';
import Delete24 from '../../../utils/svgs/businessPage/Delete24';
import FillStar20 from '../../../utils/svgs/myPage/FillStar20';
import Star20 from '../../../utils/svgs/myPage/Star20';
import Pen24 from '../../../utils/svgs/storeDetailPage/Pen24';

type ItemType = {
  item: {
    id: number;
    date: string;
    store: string;
    review: number;
    content: string;
    images: number[];
  };
};

const ReviewManagementPage = () => {
  const data = [
    {
      id: 1,
      date: '25.02.15',
      store: '온정 한식당',
      review: 4,
      content:
        '음식이 정말 맛있고, 분위기도 좋았어요. 특히 직원분들이 친절하셔서 더욱 좋았습니다. 다음에 또 방문하고 싶네요!',
      images: [
        Image.resolveAssetSource(
          require('../../../assets/images/background.png'),
        ).uri,
        Image.resolveAssetSource(require('../../../assets/images/no_image.jpg'))
          .uri,
        ,
      ],
    },
    {
      id: 2,
      date: '25.02.15',
      store: '온정 한식당',
      review: 4,
      content:
        '음식이 정말 맛있고, 분위기도 좋았어요. 특히 직원분들이 친절하셔서 더욱 좋았습니다. 다음에 또 방문하고 싶네요!',
      images: [
        Image.resolveAssetSource(
          require('../../../assets/images/background.png'),
        ).uri,
        ,
        Image.resolveAssetSource(require('../../../assets/images/no_image.jpg'))
          .uri,
        ,
      ],
    },
    {
      id: 3,
      date: '25.02.15',
      store: '온정 한식당',
      review: 4,
      content:
        '음식이 정말 맛있고, 분위기도 좋았어요. 특히 직원분들이 친절하셔서 더욱 좋았습니다. 다음에 또 방문하고 싶네요!',
      images: [
        Image.resolveAssetSource(
          require('../../../assets/images/background.png'),
        ).uri,
        ,
        Image.resolveAssetSource(require('../../../assets/images/no_image.jpg'))
          .uri,
        ,
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <MainFilter search={false} />
      <SFlatList
        data={data}
        paddingHorizontal={SWidth * 24}
        paddingBottom={SWidth * 100}
        skeleton={<View />}
        dataItem={({item, index}) => (
          <View
            style={[
              styles.itemContainer,
              index === data.length - 1 ? {} : {borderBottomWidth: 1},
            ]}>
            <View style={styles.rowContainer}>
              <SText fStyle="BxlMd" text={item.date} />
              <View style={styles.rowTitle}>
                <Pressable style={styles.iconBox} onPress={() => {}}>
                  <Pen24 />
                </Pressable>
                <Pressable style={styles.iconBox} onPress={() => {}}>
                  <Delete24 />
                </Pressable>
              </View>
            </View>
            <View style={styles.rowTitle}>
              <SText
                fStyle="BlgSb"
                text={item.store}
                color={colors.text.secondary}
              />
              <View style={styles.reviewContainer}>
                {Array.from({length: 5}).map((_, index) =>
                  index < item.review ? (
                    <FillStar20 key={index} />
                  ) : (
                    <Star20 key={index} />
                  ),
                )}
              </View>
            </View>
            <SText
              flexShrink={1}
              nLine={100}
              fStyle="BmdRg"
              text={item.content}
            />
            <View style={styles.rowTitle}>
              {item.images.map((image: string, index: number) => (
                <FastImage
                  key={index}
                  style={styles.imgStyle}
                  source={{uri: image}}
                  resizeMode={FastImage.resizeMode.cover}
                />
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ReviewManagementPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 16,
  },

  itemContainer: {
    paddingTop: SWidth * 20,
    paddingBottom: SWidth * 28,
    gap: SWidth * 12,
    borderColor: colors.border.secondary,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SWidth * 8,
  },

  rowTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },

  iconBox: {
    width: SWidth * 40,
    height: SWidth * 40,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg.interactive.secondary,
  },

  reviewContainer: {
    height: SWidth * 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SWidth * 4,
    paddingVertical: SWidth * 2,
    backgroundColor: colors.bg.warningSubtle,
  },

  imgStyle: {
    width: SWidth * 100,
    height: SWidth * 100,
    borderRadius: SWidth * 4,
  },
});
