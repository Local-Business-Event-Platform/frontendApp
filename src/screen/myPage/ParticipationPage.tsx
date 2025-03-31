import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SSButton from '../../components/Elements/SSButton';
import SText from '../../components/Elements/SText';
import RecentStoreItem from '../../components/MyPage/Recent/RecentStoreItem';

const ParticipationPage = () => {
  const [qrChecked, setQrChecked] = useState(false);
  const [reviewChecked, setReviewChecked] = useState(false);
  const data = [
    {
      id: 1,
      date: '25.10.23',
      store: [
        {
          id: 1,
          source: require('../../assets/images/background.png'),
          title: '스토어1',
          category: 'Category 1',
          review: 4.5,
          reviewCount: 100,
        },
        {
          id: 2,
          source: require('../../assets/images/background.png'),
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
          source: require('../../assets/images/background.png'),
          title: '스토어3',
          category: 'Category 1',
          review: 4.5,
          reviewCount: 100,
        },
        {
          id: 2,
          source: require('../../assets/images/background.png'),
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
                  source={store.source}
                  title={store.title}
                  category={store.category}
                  review={store.review}
                  reviewCount={store.reviewCount}
                />
                <View style={styles.rowContainer}>
                  <SSButton
                    title={qrChecked ? '25.01.13 확인 완료' : 'QR코드 확인'}
                    textColor={qrChecked ? '#8c8c8c' : '#525252'}
                    ButtonColor={qrChecked ? '#E5E5E5' : '#FFFFFF'}
                    borderColor={qrChecked ? '#E5E5E5' : '#525252'}
                    onPress={() => setQrChecked(!qrChecked)}
                  />
                  <SSButton
                    title={reviewChecked ? '후기 적성 완료' : '후기 작성하기'}
                    textColor={reviewChecked ? '#8c8c8c' : '#525252'}
                    ButtonColor={reviewChecked ? '#E5E5E5' : '#FFFFFF'}
                    borderColor={reviewChecked ? '#E5E5E5' : '#525252'}
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
