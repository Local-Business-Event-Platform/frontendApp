import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SButton from '../../components/Elements/SButton';
import SText from '../../components/Elements/SText';
import JoinTitle from '../../components/Join/JoinTitle';
import JoinSuccess from '../../utils/svgs/auth/JoinSuccess';

const SuccessPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <JoinTitle title1="환영합니다!" title2="가입이 완료됐어요." />
          <View style={styles.contentTextContainer}>
            <SText
              nLine={1}
              flexShrink={1}
              lineHeight={SWidth * 20}
              fStyle="BlgRg"
              text={'놓치기 아까운 우리 동네 이벤트, 지금 확인하세요!'}
            />
            <View style={styles.imageContainer}>
              <JoinSuccess />
            </View>
          </View>
        </View>
        <SButton
          ButtonColor={'#155DFC'}
          title="둘러보기"
          textColor={'#FFFFFF'}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'bottomTeb'}],
            })
          }
        />
      </View>
    </ScrollView>
  );
};

export default SuccessPage;

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

  contentTextContainer: {
    marginTop: SWidth * 37,
  },

  imageContainer: {
    marginTop: SWidth * 70,
    alignItems: 'center',
  },
});
