import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../globalStyle';
import SButton from '../components/Elements/SButton';
import TermsCheck from '../components/TermsOfUse/TermsCheck';
import TermsTitle from '../components/TermsOfUse/TermsTitle';

const TermsOfUsePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TermsTitle />
        <TermsCheck />
      </View>
      <SButton
        ButtonColor={'#155DFC'}
        title="동의하고 본인 인증하기"
        textColor={'#FFFFFF'}
        onPress={() => {}}
      />
    </View>
  );
};

export default TermsOfUsePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 32,
    justifyContent: 'space-between',
  },

  topContainer: {
    paddingHorizontal: SWidth * 8,
  },
});
