import React from 'react';
import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SWidth} from '../../../globalStyle';
import SButton from '../../components/Elements/SButton';
import SInput from '../../components/Elements/SInput';
import SText from '../../components/Elements/SText';
import JoinTitle from '../../components/Join/JoinTitle';
import JoinInputButton from '../../components/Join/JoinUser/JoinInputButton';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {useUserData} from '../../store/userRoute';

const JoinUserPage = () => {
  const navigation = useCustomNavigation();
  const {userData, setUserData} = useUserData();

  const handleNextPage = () => {
    if (
      userData.name === '' ||
      userData.phone === '' ||
      userData.zonecode === null ||
      userData.address === '' ||
      userData.detailAddress === ''
    ) {
      console.log('모든 정보를 입력해주세요.');
      return;
    } else {
      navigation.navigate('joinId');
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.topContainer}>
          <JoinTitle title1="본인 확인을 위해" title2="인증을 진행해 주세요." />
          <View style={styles.inputContainer}>
            <SInput
              value={userData.name}
              title="이름"
              onChangeText={text => setUserData({...userData, name: text})}
              placeholder="실명 입력"
            />
            <View style={styles.phoneInputContainer}>
              <JoinInputButton
                value={userData.phone}
                title="휴대폰번호"
                keyboardType="numeric"
                onChangeText={text => setUserData({...userData, phone: text})}
                placeholder="´-´없이 번호만 입력"
                buttonTitle="인증번호 전송"
                onPress={() => {}}
              />
              <JoinInputButton
                value=""
                onChangeText={() => {}}
                buttonTitle="확인"
                onPress={() => {}}
              />
            </View>
            <View style={styles.addressInputContainer}>
              <SText fStyle="BmdMd" text={'주소'} />
              <JoinInputButton
                value={userData.zonecode?.toString()!}
                onChangeText={() => {}}
                editable={false}
                buttonTitle="우편번호 검색"
                onPress={() => navigation.navigate('address')}
              />
              <SInput
                value={`${userData.address} ${userData.buildingName}`}
                onChangeText={() => {}}
                editable={false}
              />
              <SInput
                value={userData.detailAddress}
                onChangeText={text =>
                  setUserData({
                    ...userData,
                    detailAddress: text,
                  })
                }
              />
            </View>
          </View>
        </View>
        <SButton
          ButtonColor={'#155DFC'}
          title="아이디, 비밀번호 입력하기"
          textColor={'#FFFFFF'}
          onPress={handleNextPage}
        />
      </Pressable>
    </ScrollView>
  );
};

export default JoinUserPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 32,
    justifyContent: 'space-between',
  },

  topContainer: {
    paddingHorizontal: SWidth * 8,
  },

  inputContainer: {
    marginTop: SWidth * 40,
  },

  phoneInputContainer: {
    marginTop: SWidth * 32,
    gap: SWidth * 8,
  },

  addressInputContainer: {
    marginTop: SWidth * 32,
    gap: SWidth * 8,
  },
  // certification: {
  //   height: SWidth * 40,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: SWidth * 4,
  //   backgroundColor: '#E5E5E5',
  // },
});
