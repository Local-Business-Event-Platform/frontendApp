import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../../globalStyle';
import DownArrowTwo24 from '../../../../utils/svgs/mainPage/DownArrowTwo24';
import {FAQQuestionItemProps} from '../../../../utils/types/myPage';
import SText from '../../../Elements/SText';

const FAQQuestionItem = ({title, onPress}: FAQQuestionItemProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <SText fStyle="BlgRg" text={title} />
      <View style={styles.questionIconBox}>
        <DownArrowTwo24 color={colors.icon.interactive.secondary} />
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
    borderColor: colors.border.secondary,
  },

  questionIconBox: {
    width: SWidth * 40,
    height: SWidth * 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
