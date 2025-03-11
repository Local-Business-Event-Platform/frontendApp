import Postcode from '@actbase/react-daum-postcode';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAddress} from '../store/addressRoute';

const Address = () => {
  const navigation = useNavigation();
  const {setUserAddress} = useAddress();
  return (
    <View style={styles.container}>
      <Postcode
        onError={() => {}}
        style={{width: '100%', height: '100%'}}
        onSelected={text => {
          setUserAddress(text.zonecode, text.address, text.buildingName);
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
