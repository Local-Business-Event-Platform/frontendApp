import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import Community24 from '../../../utils/svgs/bottonTab/Community24';
import Home24 from '../../../utils/svgs/bottonTab/Home24';
import Map24 from '../../../utils/svgs/bottonTab/Map24';
import MyPage24 from '../../../utils/svgs/bottonTab/MyPage24';
import Store24 from '../../../utils/svgs/bottonTab/Store24';

type IconComponentProps = {
  focused: boolean;
  name: string;
};

const IconComponent = ({focused, name}: IconComponentProps) => {
  switch (name) {
    case '홈':
      return (
        <View style={styles.container}>
          <Home24 focus={focused} />
        </View>
      );
    case '지도':
      return (
        <View style={styles.container}>
          <Map24 focus={focused} />
        </View>
      );
    case '가게 관리':
      return (
        <View style={styles.container}>
          <Store24 focus={focused} />
        </View>
      );
    case '커뮤니티':
      return (
        <View style={styles.container}>
          <Community24 focus={focused} />
        </View>
      );
    case '마이페이지':
      return (
        <View style={styles.container}>
          <MyPage24 focus={focused} />
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
