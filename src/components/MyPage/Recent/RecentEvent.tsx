import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {useStoreData} from '../../../store/storeRoute';
import Calendar24 from '../../../utils/svgs/businessPage/Calendar24';
import Location24 from '../../../utils/svgs/businessPage/Location24';
import SFlatList from '../../Elements/SFlatList';
import SImageCard from '../../Elements/SImageCard';
import SImageCardLoading from '../../Elements/Skeleton/SImageCardLoading';
import SText from '../../Elements/SText';

type EventType = {
  id: number;
  title: string;
  store: string;
  category: string;
  km: string;
  date: string;
  image: string;
};

const RecentEvent = () => {
  const navigation = useCustomNavigation();
  const {setTitle} = useStoreData();
  const data = [
    {
      id: 1,
      date: '25.03.10',
      events: [
        {
          id: 1,
          title: '이벤트 제목 1',
          store: '카페드파리',
          category: '양식',
          km: '350m / 도보 5분',
          date: '2월 1일(목) ~ 2월 25일(수)',
          image: Image.resolveAssetSource(
            require('../../../assets/images/background.png'),
          ).uri,
        },
      ],
    },
    {
      id: 2,
      date: '25.03.11',
      events: [
        {
          id: 2,
          title: '이벤트 제목 2',
          store: '카페드파리',
          category: '양식',
          km: '350m / 도보 5분',
          date: '2월 1일(목) ~ 2월 25일(수)',
          image: Image.resolveAssetSource(
            require('../../../assets/images/background.png'),
          ).uri,
        },
      ],
    },
    {
      id: 3,
      date: '25.03.12',
      events: [
        {
          id: 3,
          title: '이벤트 제목 3',
          store: '카페드파리',
          category: '양식',
          km: '350m / 도보 5분',
          date: '2월 1일(목) ~ 2월 25일(수)',
          image: Image.resolveAssetSource(
            require('../../../assets/images/background.png'),
          ).uri,
        },
      ],
    },
  ];
  return (
    <SFlatList
      data={data}
      gap={SWidth * 40}
      paddingBottom={SWidth * 100}
      skeleton={<SImageCardLoading count={3} />}
      dataItem={({item}) => (
        <View style={styles.container}>
          <SText fStyle="BxlMd" text={item.date} color={'#000000'} />
          {item.events.map((event: EventType) => (
            <SImageCard
              key={event.id}
              image={event.image}
              onPress={() => {
                setTitle(event.store);
                navigation.navigate('홈', {screen: 'detailPage'});
              }}>
              <View style={styles.itemContainer}>
                <SText fStyle="BxlSb" text={event.title} />
                <View style={styles.contentContainer}>
                  <View style={styles.rowContainer}>
                    <View style={styles.rowTitleContainer}>
                      <Location24 />
                      <SText
                        fStyle="BmdMd"
                        text={event.store}
                        color={colors.secondary}
                      />
                      <SText
                        fStyle="BmdMd"
                        text={`(${event.category})`}
                        color={colors.secondary}
                      />
                    </View>
                    <SText fStyle="BmdMd" text={'·'} color={colors.secondary} />
                    <SText
                      fStyle="BmdMd"
                      text={event.km}
                      color={colors.secondary}
                    />
                  </View>
                  <View style={styles.rowTitleContainer}>
                    <Calendar24 color={colors.interactive.primary} />
                    <SText
                      fStyle="BmdMd"
                      text={event.date}
                      color={colors.secondary}
                    />
                  </View>
                </View>
              </View>
            </SImageCard>
          ))}
        </View>
      )}
    />
  );
};

export default RecentEvent;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 16,
  },

  itemContainer: {
    gap: SWidth * 12,
  },

  contentContainer: {
    gap: SWidth * 4,
  },

  rowTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
