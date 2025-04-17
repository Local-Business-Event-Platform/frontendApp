import Postcode from '@actbase/react-daum-postcode';
import React from 'react';
import {LogBox, StyleSheet, View} from 'react-native';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import {useUserData} from '../../store/userRoute';

LogBox.ignoreLogs([
  'Support for defaultProps will be removed from function components',
]);

const Address = () => {
  const navigation = useCustomNavigation();
  const {setUserData} = useUserData();
  return (
    <View style={styles.container}>
      <Postcode
        onError={() => {}}
        style={styles.addressStyle}
        jsOptions={{
          hideEngBtn: true,
          hideMapBtn: true,
        }}
        onSelected={text => {
          setUserData({
            zonecode: text.zonecode,
            address: text.address,
            buildingName: text.buildingName,
          });
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

  addressStyle: {
    width: '100%',
    height: '100%',
  },
});
