import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import ActivityButtons from '../../components/MyPage/Notification/ActivityButtons';
import AllButton from '../../components/MyPage/Notification/AllButton';
import ServiceButtons from '../../components/MyPage/Notification/ServiceButtons';

const NotificationPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <ScrollView
      style={styles.container}
      overScrollMode="never"
      showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <AllButton
          allClick={isClicked}
          allOnPress={() => setIsClicked(!isClicked)}
        />
        <ServiceButtons />
        <ActivityButtons />
      </View>
    </ScrollView>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SWidth * 24,
  },

  contentContainer: {
    marginTop: SWidth * 33,
  },
});
