import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {SWidth} from '../../globalStyle';
import SText from '../utils/SText';
const MainPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <View style={{width: '100%', paddingHorizontal: SWidth * 19}}>
        <View style={styles.logoStyle}>
          <Text>로고</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigation.navigate('login')}
          style={[styles.buttonStyle, {backgroundColor: '#155DFC'}]}>
          <SText fStyle="BlgSb" text={'로그인'} color={'white'} />
        </Pressable>
        <View style={[styles.buttonStyle, {backgroundColor: '#FAFAFA'}]}>
          <SText fStyle="BlgSb" text={'회원가입'} />
        </View>
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

  logoStyle: {
    marginTop: SWidth * 84,
    width: '100%',
    height: SWidth * 444,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
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
