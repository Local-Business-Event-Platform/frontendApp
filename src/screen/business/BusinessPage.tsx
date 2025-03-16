import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import useCustomNavigation from '../../hooks/useCustomNavigation';

const BusinessPage = () => {
  const navigation = useCustomNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('storeInfo')}>
      <Text>BusinessPage</Text>
    </Pressable>
  );
};

export default BusinessPage;

const styles = StyleSheet.create({});
