import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SWidth} from '../../../globalStyle';

const StoreInformation = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>StoreInformation</Text>
    </View>
  );
};

export default StoreInformation;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 24,
  },
});
