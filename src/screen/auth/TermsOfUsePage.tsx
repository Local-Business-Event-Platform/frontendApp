import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SButton56 from '../../components/Elements/SButton56';
import JoinTitle from '../../components/Join/JoinTitle';
import TermsCheck from '../../components/Join/TermsOfUse/TermsCheck';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {screenNames} from '../../utils/listData';

const TermsOfUsePage = () => {
  const navigation = useCustomNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [checkList, setCheckList] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  const handleCheck = () => {
    if (checkList.check1 && checkList.check2) {
      navigation.navigate(screenNames.JOIN_USER);
    } else {
      console.log('약관에 모두 동의해주세요');
    }
    console.log(checkList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <JoinTitle title1="ㅇㅇ 이용 약관에" title2="동의해 주세요" />
        <TermsCheck
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          setCheckList={setCheckList}
          checkList={checkList}
        />
      </View>
      <View style={styles.buttonContainer}>
        <SButton56
          ButtonColor={colors.bg.interactive.primary}
          title="동의하고 본인 인증하기"
          textColor={colors.white}
          onPress={handleCheck}
        />
      </View>
    </View>
  );
};

export default TermsOfUsePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 16,
    justifyContent: 'space-between',
  },

  topContainer: {
    paddingHorizontal: SWidth * 8,
    gap: SWidth * 48,
  },

  buttonContainer: {
    height: SWidth * 56,
  },
});
