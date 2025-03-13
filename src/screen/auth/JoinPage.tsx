import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import JoinSelectedButton from '../../components/Join/JoinSelectedButton';
import {useUserData} from '../../store/userRoute';

const JoinPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {setUserData} = useUserData();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.selectBoxContainer}>
        <JoinSelectedButton
          title="사용자 회원가입"
          backgroundColor={'#EFF6FF'}
          onPress={() => {
            setUserData({type: 1});
            navigation.navigate('terms');
          }}
        />
        <JoinSelectedButton
          title="소상공인 회원가입"
          backgroundColor={'#F5F5F5'}
          onPress={() => {
            setUserData({type: 2});
            navigation.navigate('business');
          }}
        />
      </View>
    </ScrollView>
  );
};

export default JoinPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SWidth * 24,
    paddingBottom: SWidth * 32,
  },

  selectBoxContainer: {
    width: '100%',
    marginTop: SWidth * 85,
    gap: SWidth * 24,
  },
});
