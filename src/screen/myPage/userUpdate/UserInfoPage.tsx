import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SButton56 from '../../../components/Elements/SButton56';
import SInput from '../../../components/Elements/SInput';
import SInputSuccess from '../../../components/Elements/SInputSuccess';
import UserImg from '../../../components/MyPage/UserInfo/UserImg';
import UserInfoContainer from '../../../components/MyPage/UserInfo/UserInfoContainer';
import UserInfoUser from '../../../components/MyPage/UserInfo/UserInfoUser';

const UserInfoPage = () => {
  const [userData, setUserData] = useState({
    userId: '',
    userNickname: '이*진',
    userImg: '',
  });

  const [userImg, setUserImg] = useState({
    url: '',
    name: '',
    type: '',
  });

  return (
    <ScrollView
      overScrollMode="never"
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <UserImg
        source={
          userImg.url
            ? {uri: userImg.url}
            : userData.userImg
            ? userData.userImg
            : require('../../../assets/images/no_image.jpg')
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
            titleColor={colors.text.tertiary}
            content="abcdef12345"
            contentColor={colors.text.secondary}
          />
          <SInput
            value=""
            title="닉네임"
            titleColor={colors.text.tertiary}
            editable={false}
            onChangeText={() => {}}
          />
          <View style={styles.gapContainer}>
            <SInput
              value=""
              title="비밀번호"
              titleColor={colors.text.tertiary}
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
          {/* <View style={styles.gapContainer}>
            <SInput
              value=""
              title="주소"
              titleColor={colors.text.tertiary}
              onChangeText={() => {}}
              buttonTitle="우편번호 검색"
              buttonOnPress={() => {}}
            />
            <SInput value="" onChangeText={() => {}} />
            <SInput value="" onChangeText={() => {}} />
          </View> */}
        </UserInfoContainer>
      </View>
      <View style={styles.submitButtonContainer}>
        <SButton56
          title="변경 완료"
          textColor={colors.icon.secondary}
          disabled={true}
          ButtonColor={colors.bg.interactive.secondaryHovered}
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
