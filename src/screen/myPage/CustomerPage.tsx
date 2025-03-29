import React, {useState} from 'react';
import {Keyboard, Pressable, ScrollView, StyleSheet} from 'react-native';
import STabBar from '../../components/Elements/STabBar';
import FAQComponent from '../../components/MyPage/Customer/FAQ/FAQComponent';
import QuestionComponent from '../../components/MyPage/Customer/Question/QuestionComponent';
import {customerTabItems} from '../../utils/listData';

const CustomerPage = () => {
  const [MenuNumber, setMenuNumber] = useState(1);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <STabBar
          menuList={customerTabItems}
          tabIndex={MenuNumber}
          setTabIndex={setMenuNumber}
        />
        {MenuNumber === 1 && (
          <FAQComponent searchValue="" searchOnchange={() => {}} />
        )}
        {MenuNumber === 2 && <QuestionComponent />}
      </Pressable>
    </ScrollView>
  );
};

export default CustomerPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
