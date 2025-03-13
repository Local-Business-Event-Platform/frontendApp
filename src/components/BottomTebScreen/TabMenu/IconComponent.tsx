import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import TabCommunity from '../../../utils/svgs/bottonTab/TabCommunity';
import TabHome from '../../../utils/svgs/bottonTab/TabHome';
import TabMap from '../../../utils/svgs/bottonTab/TabMap';
import TabMyPage from '../../../utils/svgs/bottonTab/TabMyPage';

type IconComponentProps = {
  focused: boolean;
  name: string;
};

const IconComponent = ({focused, name}: IconComponentProps) => {
  switch (name) {
    case '홈':
      return (
        <View style={styles.container}>
          <TabHome focused={focused} />
        </View>
      );
    case '지도':
      return (
        <View style={styles.container}>
          <TabMap focused={focused} />
        </View>
      );
    case '커뮤니티':
      return (
        <View style={styles.container}>
          <TabCommunity focused={focused} />
        </View>
      );
    case '마이페이지':
      return (
        <View style={styles.container}>
          <TabMyPage focused={focused} />
        </View>
      );
    default:
      break;
  }
};

export default IconComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: SWidth * 8,
  },
});
