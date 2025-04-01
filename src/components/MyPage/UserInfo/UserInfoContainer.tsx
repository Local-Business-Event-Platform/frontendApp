import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import UserInfoSubTitle from './UserInfoSubTitle';

type UserInfoContainerProps = {
  title: string;
  children: React.ReactNode;
};

const UserInfoContainer = ({title, children}: UserInfoContainerProps) => {
  return (
    <View style={styles.container}>
      <UserInfoSubTitle title={title} />
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

export default UserInfoContainer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SWidth * 8,
    gap: SWidth * 28,
  },

  contentContainer: {
    gap: SWidth * 24,
  },
});
