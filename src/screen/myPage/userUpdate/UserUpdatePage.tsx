import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SButton56 from '../../../components/Elements/SButton56';
import UserUpdateInput from '../../../components/MyPage/UserUpdate/UserUpdateInput';
import UserUpdateTitle from '../../../components/MyPage/UserUpdate/UserUpdateTitle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';

const UserUpdatePage = () => {
  const navigation = useCustomNavigation();

  const handleSubmit = () => {
    navigation.navigate('userInfo');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <UserUpdateTitle />
        <UserUpdateInput
          value=""
          userId={'abcdef12345'}
          onChangeText={() => {}}
        />
      </View>
      <View style={styles.buttonContainer}>
        <SButton56
          title="확인"
          textColor={colors.text.interactive.inverse}
          ButtonColor={colors.bg.interactive.primary}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default UserUpdatePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: SWidth * 32,
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 16,
  },

  topContainer: {
    gap: SWidth * 60,
    paddingHorizontal: SWidth * 8,
  },

  buttonContainer: {
    height: SWidth * 56,
  },
});
