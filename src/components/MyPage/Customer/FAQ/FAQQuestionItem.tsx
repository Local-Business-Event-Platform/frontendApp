import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import MainDownArrow from '../../../../utils/svgs/mainPage/MainDownArrow';
import {FAQQuestionItemProps} from '../../../../utils/types/myPage';
import SText from '../../../Elements/SText';

const FAQQuestionItem = ({title, onPress}: FAQQuestionItemProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <SText fStyle="BlgRg" text={title} />
      <View style={styles.questionIconBox}>
        <MainDownArrow color={'#525252'} />
      </View>
    </Pressable>
  );
};

export default FAQQuestionItem;

const styles = StyleSheet.create({
  container: {
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
