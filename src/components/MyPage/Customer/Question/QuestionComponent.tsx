import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import Plus24 from '../../../../utils/svgs/businessPage/Plus24';
import SButton56 from '../../../Elements/SButton56';
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
          titleColor={colors.text.tertiary}
          value=""
          onChangeText={() => {}}
          placeholder="카테고리를 선택해주세요"
        />
        <SInput
          required
          title="제목"
          titleColor={colors.text.tertiary}
          value=""
          onChangeText={() => {}}
          placeholder="문의 제목을 입력해주세요"
        />
        <STextArea
          title="내용"
          titleColor={colors.text.tertiary}
          required
          textCount
          maxLength={500}
          value=""
          onChangeText={() => {}}
          minHeight={SWidth * 212}
          placeholder="문의하실 내용을 자세하게 작성해주세요"
        />
        <View style={styles.fileContainer}>
          <SText fStyle="BmdMd" text={'첨부파일'} color={colors.tertiary} />
          <View style={styles.fileBox}>
            <Plus24 color={colors.icon.primary} />
          </View>
          <View>
            <SText
              fStyle="BsmRg"
              text={'· 파일당 최대 10M까지 등록할 수 있습니다.'}
              color={colors.text.tertiary}
            />
            <SText
              fStyle="BsmRg"
              text={'· 첨부파일은 최대 2개까지 등록 가능합니다.'}
              color={colors.text.tertiary}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonBox}>
        <SButton56
          title="문의하기"
          textColor={colors.text.tertiary}
          ButtonColor={colors.bg.interactive.secondaryHovered}
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
    gap: SWidth * 24,
  },

  fileContainer: {
    gap: SWidth * 12,
  },

  fileBox: {
    width: SWidth * 100,
    height: SWidth * 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border.secondary,
    backgroundColor: colors.bg.tertiary,
  },

  buttonBox: {
    height: SWidth * 56,
    marginVertical: SWidth * 16,
  },
});
