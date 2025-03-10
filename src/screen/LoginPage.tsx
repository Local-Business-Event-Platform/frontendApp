import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Keyboard, Pressable, StyleSheet, TextInput, View} from 'react-native';
import {SWidth} from '../../globalStyle';
import SText from '../utils/SText';

const LoginPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <View style={styles.inputContainer}>
        <View style={styles.inputItemContainer}>
          <SText fStyle="BmdMd" text={'아이디'} />
          <TextInput style={styles.inputStyle} placeholder="Placeholder" />
        </View>
        <View style={styles.inputItemContainer}>
          <SText fStyle="BmdMd" text={'비밀번호'} />
          <TextInput style={styles.inputStyle} placeholder="Placeholder" />
        </View>
      </View>
      <View style={styles.BottomContainer}>
        <View style={{flexDirection: 'row'}}>
          <SText
            fStyle="BlgSb"
            text={'아이디'}
            color={'#155DFC'}
            textDecorationLine="underline"
          />
          <SText
            fStyle="BlgSb"
            text={' 또는 '}
            color={'#A1A1A1'}
            textDecorationLine="underline"
          />
          <SText
            fStyle="BlgSb"
            text={'비밀번호'}
            color={'#155DFC'}
            textDecorationLine="underline"
          />
          <SText
            fStyle="BlgSb"
            text={'를 잊으셨나요?'}
            color={'#A1A1A1'}
            textDecorationLine="underline"
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate('login')}
          style={[styles.buttonStyle, {backgroundColor: '#155DFC'}]}>
          <SText fStyle="BlgSb" text={'로그인'} color={'white'} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SWidth * 16,
    paddingBottom: SWidth * 32,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputContainer: {
    marginTop: SWidth * 66,
    paddingHorizontal: SWidth * 8,
    gap: SWidth * 32,
    width: '100%',
  },

  inputItemContainer: {
    width: '100%',
    gap: SWidth * 8,
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: SWidth * 8,
    height: SWidth * 48,
    paddingHorizontal: SWidth * 12,
  },

  BottomContainer: {
    width: '100%',
    alignItems: 'center',
    gap: SWidth * 24,
  },

  buttonStyle: {
    width: '100%',
    height: SWidth * 56,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
