import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import SText from '../../Elements/SText';

type NameComponentProps = {
  focused: boolean;
  name: string;
};

const NameComponent = ({focused, name}: NameComponentProps) => {
  return (
    <View style={styles.container}>
      <SText
        fStyle="BsmMd"
        text={name}
        color={focused ? '#1447E6' : '#404040'}
      />
    </View>
  );
};

export default NameComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 2,
  },
});
