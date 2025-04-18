import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import STabBar from '../../../components/Elements/STabBar';
import RecentEvent from '../../../components/MyPage/Recent/RecentEvent';
import RecentStore from '../../../components/MyPage/Recent/RecentStore';
import {mainTabItems} from '../../../utils/listData';

const RecentPage = () => {
  const [tabClicked, setTabClicked] = useState(1);
  return (
    <View style={styles.container}>
      <STabBar
        menuList={mainTabItems}
        setTabIndex={setTabClicked}
        tabIndex={tabClicked}
      />
      <View style={styles.contentContainer}>
        {tabClicked === 1 && <RecentEvent />}
        {tabClicked === 2 && <RecentStore />}
      </View>
    </View>
  );
};

export default RecentPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginTop: SWidth * 24,
  },
});
