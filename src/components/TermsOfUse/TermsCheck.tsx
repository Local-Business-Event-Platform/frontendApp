import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SCheckText from '../Elements/SCheckText';

const TermsCheck = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkList, setCheckList] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  const handleAllCheck = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setCheckList({
      check1: newCheckedState,
      check2: newCheckedState,
      check3: newCheckedState,
      check4: newCheckedState,
    });
  };

  // 개별 체크 토글
  const handleCheck = (key: keyof typeof checkList) => {
    const updatedCheckList = {...checkList, [key]: !checkList[key]};
    setCheckList(updatedCheckList);

    // 모든 체크박스가 true인지 확인 후 isChecked 업데이트
    const allChecked = Object.values(updatedCheckList).every(value => value);
    setIsChecked(allChecked);
  };

  return (
    <View style={styles.container}>
      <SCheckText
        checkValue={isChecked}
        fStyle="BlgSb"
        title="약관에 모두 동의합니다. (선택 동의 포함)"
        onPress={handleAllCheck}
      />
      <View style={styles.checkContainer}>
        <SCheckText
          checkValue={checkList.check1}
          fStyle="BmdRg"
          title="[필수] 만 14세 이상입니다."
          onPress={() => handleCheck('check1')}
        />

        <View style={styles.rowLine}>
          <SCheckText
            arrow
            checkValue={checkList.check2}
            fStyle="BmdRg"
            title="[필수] ㅇㅇ 스토어 이용 약관"
            onPress={() => handleCheck('check2')}
          />
        </View>
        <View style={styles.rowLine}>
          <SCheckText
            arrow
            checkValue={checkList.check3}
            fStyle="BmdRg"
            title="[선택] 마케팅 목적의 개인정보 수집 및 이용 동의."
            onPress={() => handleCheck('check3')}
          />
        </View>
        <View style={styles.rowLine}>
          <SCheckText
            arrow
            checkValue={checkList.check4}
            fStyle="BmdRg"
            title="[선택] 광고성 정보 수신 동의"
            onPress={() => handleCheck('check4')}
          />
        </View>
      </View>
    </View>
  );
};

export default TermsCheck;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: SWidth * 40,
  },
  rowLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SWidth * 8,
  },

  checkContainer: {
    marginTop: SWidth * 24,
    paddingLeft: SWidth * 24,
    gap: SWidth * 12,
  },
});
