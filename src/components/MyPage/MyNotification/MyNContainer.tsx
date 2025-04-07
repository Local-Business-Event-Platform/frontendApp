import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {MyNContainerProps} from '../../../utils/types/myPage';
import MyPageTitle from '../MyPageTitle';

const MyNContainer = ({title, marginTop, children}: MyNContainerProps) => {
  return (
    <View style={{marginTop: marginTop}}>
      <View style={styles.titleContainer}>
        <MyPageTitle title={title} />
      </View>
      {children}
    </View>
  );
};

export default MyNContainer;

const styles = StyleSheet.create({
  titleContainer: {
    height: SWidth * 32,
    justifyContent: 'center',
    borderBottomWidth: 1.5,
    borderColor: '#000000',
  },
});
