import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import MyPageTitle from '../../MyPageTitle';
import FAQQuestionItem from './FAQQuestionItem';

const FAQQuestion = () => {
  const itemList = [
    {
      id: 1,
      title: '비밀번호를 잊어버렸어요.',
      onPress: () => {},
    },
    {
      id: 2,
      title: '동네 인증이 안돼요!',
      onPress: () => {},
    },
    {
      id: 3,
      title: '다른 사용자를 차단할 수 있나요?',
      onPress: () => {},
    },
    {
      id: 4,
      title: '고객센터 운영 시간은 언제인가요?',
      onPress: () => {},
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <MyPageTitle title="자주 묻는 질문" />
      </View>
      <View style={styles.questionItemContainer}>
        {itemList.map(item => (
          <FAQQuestionItem
            key={item.id}
            title={item.title}
            onPress={item.onPress}
          />
        ))}
      </View>
    </View>
  );
};

export default FAQQuestion;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 64,
    paddingHorizontal: SWidth * 24,
  },

  titleBox: {
    height: SWidth * 32,
    justifyContent: 'center',
    borderBottomWidth: 1.5,
    borderColor: '#000000',
  },

  questionItemContainer: {
    marginTop: SWidth * 4,
  },

  questionItemBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: SWidth * 64,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },

  questionIconBox: {
    width: SWidth * 40,
    height: SWidth * 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
