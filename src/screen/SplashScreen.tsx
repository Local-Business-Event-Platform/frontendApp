import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../globalStyle';
import SText from '../components/Elements/SText';
import useCustomNavigation from '../hooks/useCustomNavigation';
import {screenNames} from '../utils/listData';

const SplashScreen = () => {
  const navigation = useCustomNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(screenNames.LOGIN);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <SText fStyle="Hsm" text={'이음터 로고'} color={colors.text.disabled} />
      </View>
      <View style={styles.textContainer}>
        <SText fStyle="BxlSb" text={'동네를 잇는 이음터'} />
        <View style={styles.content}>
          <SText
            fStyle="BlgSb"
            text={'슬로건 내용 블라블라블라'}
            color={colors.text.disabled}
          />
          <SText
            fStyle="BlgSb"
            text={'블라블라블라...'}
            color={colors.text.disabled}
          />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 205,
    gap: SWidth * 24,
    alignItems: 'center',
  },

  logoContainer: {
    width: SWidth * 184,
    height: SWidth * 184,
    borderRadius: SWidth * 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg.tertiary,
  },

  textContainer: {
    gap: SWidth * 4,
    alignItems: 'center',
  },

  content: {
    alignItems: 'center',
  },
});
