import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SText from '../Elements/SText';

const TermsTitle = () => {
  return (
    <View style={styles.container}>
      <SText fStyle="Hmd" text={'ㅇㅇ 이용 약관에'} />
      <SText fStyle="Hmd" text={'동의해 주세요'} />
    </View>
  );
};

export default TermsTitle;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 42,
  },
});
