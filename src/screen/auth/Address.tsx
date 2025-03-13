import Postcode from '@actbase/react-daum-postcode';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {LogBox, StyleSheet, View} from 'react-native';
import {useUserData} from '../../store/addressRoute';
LogBox.ignoreLogs([
  'Support for defaultProps will be removed from function components',
]);
const Address = () => {
  const navigation = useNavigation();
  const {setUserData} = useUserData();
  return (
    <View style={styles.container}>
      <Postcode
        onError={() => {}}
        style={{width: '100%', height: '100%'}}
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
});
