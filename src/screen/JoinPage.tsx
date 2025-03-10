import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../globalStyle';
import SText from '../utils/SText';

const JoinPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <View style={styles.selectBoxContainer}>
        <View style={[styles.boxStyle, {backgroundColor: '#EFF6FF'}]}>
          <SText fStyle="BlgSb" text={'사용자 회원가입'} />
        </View>
        <View style={[styles.boxStyle, {backgroundColor: '#F5F5F5'}]}>
          <SText fStyle="BlgSb" text={'소상공인 회원가입'} />
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate('join')}
        style={[styles.buttonStyle, {backgroundColor: '#FAFAFA'}]}>
        <SText fStyle="BlgSb" text={'다음'} />
      </Pressable>
    </View>
  );
};

export default JoinPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 32,
  },

  selectBoxContainer: {
    width: '100%',
    marginTop: SWidth * 90,
    paddingHorizontal: SWidth * 8,
    gap: SWidth * 24,
  },

  boxStyle: {
    width: '100%',
    height: SWidth * 224,
    paddingTop: SWidth * 24,
    borderRadius: SWidth * 12,
    alignItems: 'center',
  },

  buttonStyle: {
    width: '100%',
    height: SWidth * 56,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
