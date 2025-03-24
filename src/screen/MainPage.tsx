import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../globalStyle';
import MainFilter from '../components/MainPage/Filter/MainFilter';
import MainEventContent from '../components/MainPage/MainEventContent';
import MainStoreContent from '../components/MainPage/MainStoreContent';
import MainTab from '../components/MainPage/MainTab';
import useCustomNavigation from '../hooks/useCustomNavigation';
const MainPage = () => {
  const navigation = useCustomNavigation();
  const [mainTab, setMainTab] = useState(1);
  return (
    <View style={styles.container}>
      <MainTab mainTab={mainTab} setMainTab={setMainTab} />
      <View style={styles.contentContainer}>
        <MainFilter />
        {mainTab === 1 && <MainEventContent />}
        {mainTab === 2 && <MainStoreContent />}
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: SWidth * 24,
  },
});
