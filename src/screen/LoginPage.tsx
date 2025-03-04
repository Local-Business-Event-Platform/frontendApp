import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import SText from '../utils/SText';

const LoginPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('main')}>
      <SText fStyle="BsmMd" text={'The quick'} />
    </TouchableOpacity>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
