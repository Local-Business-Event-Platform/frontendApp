import React, {useState} from 'react';
import {Keyboard, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SButton56 from '../../components/Elements/SButton56';
import SInput from '../../components/Elements/SInput';
import JoinTitle from '../../components/Join/JoinTitle';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {useUserData} from '../../store/userRoute';

const JoinIdPage = () => {
  const navigation = useCustomNavigation();
  const {userData, setUserData} = useUserData();
  const [passwordChecked, setPasswordChecked] = useState('');
  const [iconClicked, setIconClicked] = useState([true, true]);

  const handleSubmit = async () => {
    navigation.navigate('success');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Pressable onPress={Keyboard.dismiss} style={styles.container}>
        <View style={styles.topContainer}>
          <JoinTitle title1="아이디와 비밀번호를" title2="입력해 주세요." />
          <View style={styles.inputContainer}>
            <SInput
              value={userData.id}
              title="아이디"
              onChangeText={text => setUserData({...userData, id: text})}
              placeholder="영문/숫자 조합 4~12자"
              buttonTitle="중복 확인"
              buttonOnPress={() => {}}
            />
            <SInput
              iconOn
              secureTextEntry={iconClicked[0]}
              iconOnPress={() => setIconClicked(prev => [!prev[0], prev[1]])}
              value={userData.password}
              title="비밀번호"
              onChangeText={text => setUserData({...userData, password: text})}
              placeholder="영문/숫자/특수문자 모두 조합 8~15자"
            />
            <SInput
              iconOn
              secureTextEntry={iconClicked[1]}
              iconOnPress={() => setIconClicked(prev => [prev[0], !prev[1]])}
              value={passwordChecked}
              title="비밀번호 확인"
              onChangeText={text => setPasswordChecked(text)}
              placeholder="비밀번호 재입력"
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <SButton56
            ButtonColor={colors.interactive.primary}
            title="완료"
            textColor={colors.white}
            onPress={handleSubmit}
          />
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default JoinIdPage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 16,
    justifyContent: 'space-between',
  },

  topContainer: {
    paddingHorizontal: SWidth * 8,
  },
  inputContainer: {
    marginTop: SWidth * 40,
    gap: SWidth * 32,
  },

  buttonContainer: {
    height: SWidth * 56,
  },
});
