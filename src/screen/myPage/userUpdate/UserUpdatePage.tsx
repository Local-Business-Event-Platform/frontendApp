import React from 'react';
import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SButton56 from '../../../components/Elements/SButton56';
import UserUpdateInput from '../../../components/MyPage/UserUpdate/UserUpdateInput';
import UserUpdateTitle from '../../../components/MyPage/UserUpdate/UserUpdateTitle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {screenNames} from '../../../utils/listData';

const UserUpdatePage = () => {
  const navigation = useCustomNavigation();

  const handleSubmit = () => {
    navigation.navigate(screenNames.USER_INFO);
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
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
    </Pressable>
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
