import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import {FAQComponentProps} from '../../../../utils/types/myPage';
import SInput from '../../../Elements/SInput';
import FAQCategory from './FAQCategory';
import FAQQuestion from './FAQQuestion';

const FAQComponent = ({searchValue, searchOnchange}: FAQComponentProps) => {
  return (
    <View style={styles.container}>
      <SInput
        value={searchValue}
        onChangeText={searchOnchange}
        searchOn
        searchIconColor={'#525252'}
        placeholder="궁금한 내용을 검색해보세요"
      />
      <FAQCategory />
      <FAQQuestion />
    </View>
  );
};

export default FAQComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: SWidth * 32,
    paddingHorizontal: SWidth * 24,
  },
});
