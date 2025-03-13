import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import useCustomNavigation from '../hooks/useCustomNavigation';
const MainPage = () => {
  const navigation = useCustomNavigation();
  return (
    <View style={styles.container}>
      <Text>메인</Text>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
