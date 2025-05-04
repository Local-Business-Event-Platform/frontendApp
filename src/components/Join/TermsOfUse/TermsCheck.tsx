import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {checkItems} from '../../../utils/listData';
import {TermsCheckProps} from '../../../utils/types/termsType';
import SCheckText from '../../Elements/SCheckText';

const TermsCheck = ({
  isChecked,
  setIsChecked,
  checkList,
  setCheckList,
}: TermsCheckProps) => {
  const handleAllCheck = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setCheckList({
      check1: newCheckedState,
      check2: newCheckedState,
      check3: newCheckedState,
      check4: newCheckedState,
      check5: newCheckedState,
    });
  };

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
        title="전체 동의"
        onPress={handleAllCheck}
      />
      <View style={styles.checkContainer}>
        {checkItems.map(({key, title, arrow}) => (
          <View key={key} style={styles.rowLine}>
            <SCheckText
              arrow={arrow}
              checkValue={checkList[key]}
              fStyle="BmdRg"
              title={title}
              onPress={() => handleCheck(key)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default TermsCheck;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: SWidth * 16,
  },

  rowLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SWidth * 8,
  },

  checkContainer: {
    paddingTop: SWidth * 24,
    borderTopWidth: 1,
    borderColor: colors.border.secondary,
    gap: SWidth * 12,
  },
});
