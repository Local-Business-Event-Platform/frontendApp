import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SFlatList from '../../../components/Elements/SFlatList';
import SText from '../../../components/Elements/SText';
import PButton from '../../../components/MyPage/Participation/PButton';
import RecentStoreItem from '../../../components/MyPage/Recent/RecentStoreItem';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {useStoreData} from '../../../store/storeRoute';

type StoreType = {
  id: number;
  image: string;
  title: string;
  category: string;
  review: number;
  reviewCount: number;
};
const ParticipationPage = () => {
  const navigation = useCustomNavigation();
  const {setTitle} = useStoreData();
  const [qrChecked, setQrChecked] = useState(false);
  const [reviewChecked, setReviewChecked] = useState(false);
  const data = [
    {
      id: 1,
      date: '25.10.23',
      store: [
        {
          id: 1,
          image: Image.resolveAssetSource(
            require('../../../assets/images/background.png'),
          ).uri,
          title: '스토어1',
          category: 'Category 1',
          review: 4.5,
          reviewCount: 100,
        },
        {
          id: 2,
          image: Image.resolveAssetSource(
            require('../../../assets/images/background.png'),
          ).uri,
          title: '스토어2',
          category: 'Category 1',
          review: 4.5,
          reviewCount: 100,
        },
      ],
    },
    {
      id: 2,
      date: '25.10.24',
      store: [
        {
          id: 1,
          image: Image.resolveAssetSource(
            require('../../../assets/images/background.png'),
          ).uri,
          title: '스토어3',
          category: 'Category 1',
          review: 4.5,
          reviewCount: 100,
        },
        {
          id: 2,
          image: Image.resolveAssetSource(
            require('../../../assets/images/background.png'),
          ).uri,
          title: '스토어4',
          category: 'Category 1',
          review: 4.5,
          reviewCount: 100,
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <SFlatList
        data={data}
        gap={SWidth * 32}
        paddingBottom={SWidth * 100}
        skeleton={<View />}
        dataItem={({item}) => (
          <View style={styles.contentGap}>
            <SText fStyle="BxlMd" text={item.date} color={colors.black} />
            {item.store.map((store: StoreType) => (
              <View key={store.id} style={styles.contentGap}>
                <RecentStoreItem
                  image={store.image}
                  title={store.title}
                  category={store.category}
                  review={store.review}
                  reviewCount={store.reviewCount}
                  onPress={() => {
                    setTitle(store.title);
                    navigation.navigate('홈', {
                      screen: 'detailPage',
                    });
                  }}
                />
                <View style={styles.rowContainer}>
                  <PButton
                    checked={qrChecked}
                    title="QR코드 확인"
                    newTitle="25.01.13 확인 완료"
                    onPress={() => setQrChecked(!qrChecked)}
                  />
                  <PButton
                    checked={reviewChecked}
                    title="후기 작성하기"
                    newTitle="후기 적성 완료"
                    onPress={() => setReviewChecked(!reviewChecked)}
                  />
                </View>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default ParticipationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 24,
  },

  contentGap: {
    gap: SWidth * 16,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
