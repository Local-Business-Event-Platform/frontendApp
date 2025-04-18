import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import JoinSelectedButton from '../../components/Join/JoinSelectedButton';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {useUserData} from '../../store/userRoute';
import {screenNames} from '../../utils/listData';

const JoinPage = () => {
  const navigation = useCustomNavigation();
  const {setUserData} = useUserData();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.selectBoxContainer}>
        <JoinSelectedButton
          title="사용자 회원가입"
          backgroundColor={colors.bg.infoSubtle}
          onPress={() => {
            setUserData({type: 1});
            navigation.navigate(screenNames.TERMS);
          }}
        />
        <JoinSelectedButton
          title="소상공인 회원가입"
          backgroundColor={colors.bg.tertiary}
          onPress={() => {
            setUserData({type: 2});
            navigation.navigate(screenNames.TERMS);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default JoinPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 79,
    paddingHorizontal: SWidth * 24,
  },

  selectBoxContainer: {
    width: '100%',
    gap: SWidth * 24,
  },
});
