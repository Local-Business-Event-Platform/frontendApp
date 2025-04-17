import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import STabBar from '../../components/Elements/STabBar';
import MainFilter from '../../components/MainPage/Filter/MainFilter';
import MainEventContent from '../../components/MainPage/MainEventContent';
import MainStoreContent from '../../components/MainPage/MainStoreContent';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {mainTabItems} from '../../utils/listData';
const MainPage = () => {
  const navigation = useCustomNavigation();
  const [mainTab, setMainTab] = useState(1);
  return (
    <View style={styles.container}>
      <STabBar
        menuList={mainTabItems}
        tabIndex={mainTab}
        setTabIndex={setMainTab}
      />
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
    gap: SWidth * 24,
  },
});
