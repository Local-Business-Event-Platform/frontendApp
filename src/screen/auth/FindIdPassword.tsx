import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SButton from '../../components/Elements/SButton';
import JoinInputButton from '../../components/Join/JoinUser/JoinInputButton';

const FindIdPassword = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <JoinInputButton
            title="휴대폰 번호"
            titleColor={'#525252'}
            value={''}
            onChangeText={() => {}}
            placeholder={'´-´없이 번호만 입력'}
            buttonTitle="인증번호 전송"
            onPress={() => {}}
          />
          <JoinInputButton
            title="인증번호"
            titleColor={'#525252'}
            value={''}
            onChangeText={() => {}}
            placeholder={'인증번호 6자리 입력'}
            buttonTitle="확인"
            onPress={() => {}}
          />
        </View>
        <View>
          <SButton
            title="다음"
            ButtonColor={'#155DFC'}
            textColor={'white'}
            onPress={() => {}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FindIdPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 48,
    paddingHorizontal: SWidth * 24,
    paddingBottom: SWidth * 16,
    justifyContent: 'space-between',
  },

  topContainer: {
    gap: SWidth * 32,
  },
});
