import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {screenNames} from '../../../utils/listData';
import Success56 from '../../../utils/svgs/auth/Success56';
import SButton56 from '../SButton56';
import SText from '../SText';

type ModalPasswordProps = {
  setModalOpen: (newModalOpen: boolean) => void;
};

const ModalPassword = ({setModalOpen}: ModalPasswordProps) => {
  const navigation = useCustomNavigation();
  return (
    <View style={styles.container}>
      <Success56 />
      <View style={styles.textContainer}>
        <SText fStyle="BxlSb" text={'비밀번호 변경 완료'} />
        <SText
          fStyle="BlgMd"
          text={'비밀번호가 성공적으로 변경되었습니다.'}
          color={colors.text.secondary}
        />
      </View>
      <View style={{width: '100%', height: SWidth * 56}}>
        <SButton56
          title="확인"
          textColor={colors.text.interactive.inverse}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: screenNames.LOGIN}],
            });
            setModalOpen(false);
          }}
          ButtonColor={colors.bg.interactive.primary}
        />
      </View>
    </View>
  );
};

export default ModalPassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: SWidth * 24,
    padding: SWidth * 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: SWidth * 28,
  },

  textContainer: {
    gap: SWidth * 4,
    alignItems: 'center',
  },
});
