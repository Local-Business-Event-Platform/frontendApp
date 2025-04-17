import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import {useModalOpen} from '../../../../store/modalRoute';
import More24 from '../../../../utils/svgs/myPage/More24';
import ReviewContent from './ReviewContent';
import ReviewDate from './ReviewDate';
import ReviewUser from './ReviewUser';

type StoreReviewItemProps = {
  item: {
    id: number;
    userImg: string;
    userName: string;
    reviewStar: number;
    reviewDate: string;
    reviewContent: string;
  };
  lastItem: boolean;
};

const StoreReviewItem = ({item, lastItem}: StoreReviewItemProps) => {
  const {setModalTitle, setModalOpen, setId} = useModalOpen();
  return (
    <View style={[styles.container, !lastItem && {borderBottomWidth: 1}]}>
      <View style={styles.userContainer}>
        <ReviewUser
          img={item.userImg}
          userName={item.userName}
          reviewStar={item.reviewStar}
        />
        <View style={styles.dateContainer}>
          <ReviewDate reviewDate={item.reviewDate} />
          {
            <Pressable
              style={styles.iconBox}
              onPress={() => {
                setId(item.id);
                setModalTitle('detailPage');
                setModalOpen(true);
              }}>
              <More24 />
            </Pressable>
          }
        </View>
      </View>
      <ReviewContent content={item.reviewContent} />
    </View>
  );
};

export default StoreReviewItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SWidth * 24,
    gap: SWidth * 16,
    borderColor: colors.border.secondary,
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },

  iconBox: {
    width: SWidth * 40,
    height: SWidth * 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
