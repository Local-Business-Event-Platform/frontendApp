import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SText from '../../Elements/SText';

const NoMyLocationText = () => {
  return (
    <View style={styles.container}>
      <SText fStyle="BxlSb" text={'주변 정보를 제공할 수 없습니다.'} />
      <SText
        fStyle="BlgMd"
        text={'설정에서 위치 정보 사용을 허용해주세요.'}
        color={colors.text.tertiary}
      />
    </View>
  );
};

export default NoMyLocationText;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
