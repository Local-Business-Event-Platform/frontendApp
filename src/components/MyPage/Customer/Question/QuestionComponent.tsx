import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import BusinessPlus from '../../../../utils/svgs/businessPage/BusinessPlus';
import SButton from '../../../Elements/SButton';
import SInput from '../../../Elements/SInput';
import SText from '../../../Elements/SText';
import STextArea from '../../../Elements/STextArea';

const QuestionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SInput
          required
          title="카테고리"
          titleColor="#525252"
          value=""
          onChangeText={() => {}}
          placeholder="카테고리를 선택해주세요"
        />
        <SInput
          required
          title="제목"
          titleColor="#525252"
          value=""
          onChangeText={() => {}}
          placeholder="문의 제목을 입력해주세요"
        />
        <STextArea
          title="내용"
          titleColor="#525252"
          required
          value=""
          onChangeText={() => {}}
          minHeight={SWidth * 212}
          placeholder="문의하실 내용을 자세하게 작성해주세요"
        />
        <View style={styles.fileContainer}>
          <SText fStyle="BmdMd" text={'첨부파일'} color={colors.tertiary} />
          <View style={styles.fileBox}>
            <BusinessPlus color={colors.primary} />
          </View>
        </View>
      </View>
      <View style={styles.buttonBox}>
        <SButton
          title="문의하기"
          textColor={colors.secondary}
          ButtonColor={colors.interactive.secondary}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default QuestionComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SWidth * 24,
    paddingHorizontal: SWidth * 16,
    justifyContent: 'space-between',
  },

  inputContainer: {
    paddingHorizontal: SWidth * 8,
    gap: SWidth * 32,
  },

  fileContainer: {
    gap: SWidth * 8,
  },

  fileBox: {
    width: SWidth * 100,
    height: SWidth * 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.interactive.secondary,
    backgroundColor: '#F5F5F5',
  },

  buttonBox: {
    height: SWidth * 56,
    marginBottom: SWidth * 16,
  },
});
