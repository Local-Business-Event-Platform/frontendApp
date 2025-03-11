import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../globalStyle';
import SText from '../components/Elements/SText';
const MainPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigation.navigate('login')}
          style={[styles.buttonStyle, {backgroundColor: '#155DFC'}]}>
          <SText fStyle="BlgSb" text={'로그인'} color={'white'} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('join')}
          style={[styles.buttonStyle, {backgroundColor: '#FAFAFA'}]}>
          <SText fStyle="BlgSb" text={'회원가입'} />
        </Pressable>
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 32,
  },

  buttonContainer: {
    width: '100%',
    gap: SWidth * 8,
  },

  buttonStyle: {
    width: '100%',
    height: SWidth * 56,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
