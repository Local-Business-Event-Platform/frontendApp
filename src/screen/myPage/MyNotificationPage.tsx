import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import ActivityButtons from '../../components/MyPage/MyNotification/ActivityButtons';
import AllButton from '../../components/MyPage/MyNotification/AllButton';
import ServiceButtons from '../../components/MyPage/MyNotification/ServiceButtons';

const MyNotificationPage = () => {
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

export default MyNotificationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SWidth * 24,
  },

  contentContainer: {
    marginTop: SWidth * 33,
  },
});
