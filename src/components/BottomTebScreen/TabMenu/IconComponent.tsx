import React from 'react';
import {StyleSheet, View} from 'react-native';

type IconComponentProps = {
  focused: boolean;
  name: string;
};

const IconComponent = ({focused, name}: IconComponentProps) => {
  switch (name) {
    case '나의 냉장고':
      return (
        <View style={styles.container}>
          {/* <Wallet focused={focused} /> */}
        </View>
      );
    case '레시피북':
      return (
        <View style={styles.container}>
          {/* <TabHeart focused={focused} /> */}
        </View>
      );
    case '모든 레시피':
      return (
        <View style={styles.container}>
          {/* <EditSquare focused={focused} /> */}
        </View>
      );
    case '설정':
      return (
        <View style={styles.container}>{/* <More focused={focused} /> */}</View>
      );
    default:
      break;
  }
};

export default IconComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
  },
});
