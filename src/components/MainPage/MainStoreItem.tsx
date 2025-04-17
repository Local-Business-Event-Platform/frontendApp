import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import FillHeart24 from '../../utils/svgs/mainPage/FillHeart24';
import Heart24 from '../../utils/svgs/myPage/Heart24';
import {MainStoreItemProps} from '../../utils/types/mainType';
import SImageCard2 from '../Elements/SImageCard2';
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
    <SImageCard2 image={storeImg} onPress={onPress}>
      <View style={{gap: 0}}>
        <View style={styles.titleContainer}>
          <View style={styles.rowContainer}>
            <SText fStyle="BlgSb" text={title} />
            <SText
              fStyle="BmdMd"
              text={category}
              color={colors.text.disabled}
            />
          </View>
          <Pressable
            style={styles.iconBox}
            hitSlop={10}
            onPress={() => setIsClicked(!isClicked)}>
            {isClicked ? (
              <FillHeart24 color={colors.icon.interactive.primary} />
            ) : (
              <Heart24 color={colors.icon.interactive.primary} />
            )}
          </Pressable>
        </View>
        <SReviewBox review={review} reviewCount={reviewCount} />
      </View>
      <SMeterBox content="350m / 도보 5분" />
    </SImageCard2>
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

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

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
});
