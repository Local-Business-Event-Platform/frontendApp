import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SButton from '../../components/Elements/SButton';
import JoinTitle from '../../components/Join/JoinTitle';
import useCustomNavigation from '../../hooks/useCustomNavigation';

const JoinBusinessPage = () => {
  const navigation = useCustomNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <JoinTitle
          title1="우리 가게, 한 번에"
          title2="등록하고 시작해보세요!"
        />
      </View>
      <SButton
        ButtonColor={'#155DFC'}
        title="계정 생성하고 가게 등록하기"
        textColor={'#FFFFFF'}
        onPress={() => navigation.navigate('terms')}
      />
    </View>
  );
};

export default JoinBusinessPage;

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
