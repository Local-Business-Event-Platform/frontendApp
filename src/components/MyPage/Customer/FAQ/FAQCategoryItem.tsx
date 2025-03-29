import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import {FAQCategoryItemProps} from '../../../../utils/types/myPage';
import SText from '../../../Elements/SText';

const FAQCategoryItem = ({title, onPress}: FAQCategoryItemProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <SText fStyle="BmdMd" text={title} color={'#404040'} />
    </Pressable>
  );
};

export default FAQCategoryItem;

const styles = StyleSheet.create({
  container: {
    height: SWidth * 36,
    paddingHorizontal: SWidth * 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
});
