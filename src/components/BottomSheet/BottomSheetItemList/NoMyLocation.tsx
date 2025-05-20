import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import {
  handleLocation,
  openLocationSettings,
} from '../../../service/locationSettings';
import {useMyLocation} from '../../../store/mapRoute';
import BottomSheetLocation from '../../../utils/svgs/bottomSheet/BottomSheetLocation';
import SButton40 from '../../Elements/SButton40';
import NoMyLocationText from './NoMyLocationText';

const NoMyLocation = () => {
  const {setMyLocation} = useMyLocation();
  useEffect(() => {
    const cleanup = handleLocation(setMyLocation);
    return cleanup;
  }, []);

  return (
    <View style={styles.container}>
      <NoMyLocationText />
      <SButton40
        title="위치 설정하기"
        textColor={colors.text.interactive.inverse}
        ButtonColor={colors.bg.interactive.primary}
        icon={<BottomSheetLocation />}
        onPress={openLocationSettings}
      />
    </View>
  );
};

export default NoMyLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: SWidth * 16,
  },

  textGep: {
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
