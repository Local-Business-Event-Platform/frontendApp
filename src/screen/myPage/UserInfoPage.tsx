import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SButton from '../../components/Elements/SButton';
import SInput from '../../components/Elements/SInput';
import SInputSuccess from '../../components/Elements/SInputSuccess';
import UserImg from '../../components/MyPage/UserInfo/UserImg';
import UserInfoContainer from '../../components/MyPage/UserInfo/UserInfoContainer';
import UserInfoUser from '../../components/MyPage/UserInfo/UserInfoUser';

const UserInfoPage = () => {
  const [userImg, setUserImg] = useState({
    img: '',
  });
  return (
    <ScrollView
      overScrollMode="never"
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <UserImg
        source={
          userImg.img
            ? {uri: userImg.img}
            : require('../../assets/images/no_image.jpg')
        }
        setUserImg={setUserImg}
      />
      <View style={styles.userInfoContainer}>
        <UserInfoUser
          userName={'이*진'}
          userPhone={'010-****-5678'}
          onPress={() => {}}
        />
        <UserInfoContainer title="로그인 정보">
          <SInputSuccess
            title="아이디"
            content="abcdef12345"
            contentColor={'#404040'}
          />
          <View style={styles.gapContainer}>
            <SInput
              value=""
              title="비밀번호"
              secureTextEntry={true}
              onChangeText={() => {}}
              buttonTitle="비밀번호 변경"
              buttonOnPress={() => {}}
            />
            {
              <>
                <SInput
                  value=""
                  onChangeText={() => {}}
                  secureTextEntry={true}
                  iconOn
                  iconOnPress={() => {}}
                />
                <SInput
                  value=""
                  onChangeText={() => {}}
                  secureTextEntry={true}
                  iconOn
                  iconOnPress={() => {}}
                />
              </>
            }
          </View>
          <View style={styles.gapContainer}>
            <SInput
              value=""
              title="주소"
              onChangeText={() => {}}
              buttonTitle="우편번호 검색"
              buttonOnPress={() => {}}
            />
            <SInput value="" onChangeText={() => {}} />
            <SInput value="" onChangeText={() => {}} />
          </View>
        </UserInfoContainer>
      </View>
      <View style={styles.submitButtonContainer}>
        <SButton
          title="변경 완료"
          textColor={'#404040'}
          disabled={true}
          ButtonColor={'#E5E5E5'}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default UserInfoPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: SWidth * 24,
    paddingBottom: SWidth * 16,
    paddingHorizontal: SWidth * 16,
  },

  userInfoContainer: {
    marginTop: SWidth * 24,
    gap: SWidth * 64,
  },

  gapContainer: {
    gap: SWidth * 8,
  },

  submitButtonContainer: {
    marginTop: SWidth * 28,
  },
});
