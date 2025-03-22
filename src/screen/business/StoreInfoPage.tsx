import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import StoreInfoTab from '../../components/BusinessPage/Basic/StoreInfoTab';
import BasicInformation from './BasicInformation';
import EventInformation from './EventInformation';
import StoreInformation from './StoreInformation';

type StoreInfoPageProps = {
  route?: {
    params: {
      data: {
        id: number;
        name: string;
        review: number;
        reviewCount: number;
        category: string;
      };
    };
  };
};

const StoreInfoPage = ({route}: StoreInfoPageProps) => {
  const storeData = route?.params?.data;
  console.log('스토어 데이터', storeData);
  const [isClicked, setIsClicked] = useState(0);
  const [data, setData] = useState({
    storeName: '',
    storeInfoNumber: '',
    storeCEO: '',
    storeCategory: '',
    storeDetailCategory: '',
    storeAddress: '',
    storeZipCode: '',
    storePhoneNumber: '',
  });
  return (
    <ScrollView style={styles.container} overScrollMode="never">
      <StoreInfoTab isClicked={isClicked} setIsClicked={setIsClicked} />
      <View style={styles.contentContainer}>
        {isClicked === 0 && <BasicInformation data={data} />}
        {isClicked === 1 && <StoreInformation data={data} />}
        {isClicked === 2 && <EventInformation data={data} />}
      </View>
    </ScrollView>
  );
};

export default StoreInfoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: SWidth * 17,
  },
});
