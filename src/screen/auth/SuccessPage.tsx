import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SButton from '../../components/Elements/SButton';
import JoinTitle from '../../components/Join/JoinTitle';
import JoinSuccessSubTitle from '../../components/Join/Success/JoinSuccessSubTitle';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {useUserData} from '../../store/userRoute';

const SuccessPage = () => {
  const {userData} = useUserData();
  const navigation = useCustomNavigation();
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <JoinTitle title1="환영합니다!" title2="가입이 완료됐어요." />
          <JoinSuccessSubTitle userType={userData.type} />
        </View>
        <View style={styles.buttonContainer}>
          <SButton
            ButtonColor={'#155DFC'}
            title="둘러보기"
            textColor={'#FFFFFF'}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'bottomTeb'}],
              })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 16,
    justifyContent: 'space-between',
  },

  topContainer: {
    paddingHorizontal: SWidth * 8,
    gap: SWidth * 16,
  },

  buttonContainer: {
    height: SWidth * 56,
  },
});
