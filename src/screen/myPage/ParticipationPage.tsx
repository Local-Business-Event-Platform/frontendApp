import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SSButton from '../../components/Elements/SSButton';
import SText from '../../components/Elements/SText';
import RecentStoreItem from '../../components/MyPage/Recent/RecentStoreItem';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {useStoreData} from '../../store/storeRoute';

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
          source: Image.resolveAssetSource(
            require('../../assets/images/background.png'),
          ).uri,
          title: '스토어1',
          category: 'Category 1',
          review: 4.5,
          reviewCount: 100,
        },
        {
          id: 2,
          source: Image.resolveAssetSource(
            require('../../assets/images/background.png'),
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
          source: Image.resolveAssetSource(
            require('../../assets/images/background.png'),
          ).uri,
          title: '스토어3',
          category: 'Category 1',
          review: 4.5,
          reviewCount: 100,
        },
        {
          id: 2,
          source: Image.resolveAssetSource(
            require('../../assets/images/background.png'),
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
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SWidth * 16,
          paddingBottom: SWidth * 100,
          gap: SWidth * 32,
        }}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.contentGap}>
            <SText fStyle="BxlMd" text={item.date} color={'#000000'} />
            {item.store.map(store => (
              <View key={store.id} style={styles.contentGap}>
                <RecentStoreItem
                  image={store.source}
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
                  <SSButton
                    title={qrChecked ? '25.01.13 확인 완료' : 'QR코드 확인'}
                    textColor={qrChecked ? '#8c8c8c' : colors.tertiary}
                    ButtonColor={
                      qrChecked ? colors.interactive.secondary : colors.white
                    }
                    borderColor={
                      qrChecked ? colors.interactive.secondary : colors.tertiary
                    }
                    onPress={() => setQrChecked(!qrChecked)}
                  />
                  <SSButton
                    title={reviewChecked ? '후기 적성 완료' : '후기 작성하기'}
                    textColor={reviewChecked ? '#8c8c8c' : colors.tertiary}
                    ButtonColor={
                      reviewChecked
                        ? colors.interactive.secondary
                        : colors.white
                    }
                    borderColor={
                      reviewChecked
                        ? colors.interactive.secondary
                        : colors.tertiary
                    }
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
