import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import StoreInfoTab from '../../components/BusinessPage/Basic/StoreInfoTab';
import BasicInformation from './BasicInformation';
import EventInformation from './EventInformation';
import StoreInformation from './StoreInformation';

const StoreInfoPage = () => {
  const [isClicked, setIsClicked] = useState(0);
  return (
    <ScrollView style={styles.container} overScrollMode="never">
      <StoreInfoTab isClicked={isClicked} setIsClicked={setIsClicked} />
      <View style={styles.contentContainer}>
        {isClicked === 0 && <BasicInformation />}
        {isClicked === 1 && <StoreInformation />}
        {isClicked === 2 && <EventInformation />}
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
