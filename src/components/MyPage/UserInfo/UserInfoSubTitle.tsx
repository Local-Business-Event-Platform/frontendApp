import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {MyPageTitleProps} from '../../../utils/types/myPage';
import SText from '../../Elements/SText';

const UserInfoSubTitle = ({title}: MyPageTitleProps) => {
  return (
    <View style={styles.container}>
      <SText fStyle="Hsm" text={title} />
    </View>
  );
};

export default UserInfoSubTitle;

const styles = StyleSheet.create({
  container: {
    height: SWidth * 36,
    justifyContent: 'center',
    borderBottomWidth: 1.5,
    borderColor: '#000000',
  },
});
