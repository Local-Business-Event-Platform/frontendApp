import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import SButton56 from '../SButton56';
import SText from '../SText';

type ModalPasswordProps = {
  setModalOpen: (newModalOpen: boolean) => void;
};

const ModalPassword = ({setModalOpen}: ModalPasswordProps) => {
  const navigation = useCustomNavigation();
  return (
    <View style={styles.container}>
      <SText fStyle="Hsm" text={'비밀번호 변경 완료'} />
      <View style={styles.iconContainer}>
        <SText fStyle="BlgSb" text={'아이콘'} color={colors.text.disabled} />
      </View>
      <SText
        fStyle="BlgMd"
        text={'비밀번호가 성공적으로 변경되었습니다.'}
        color={colors.text.secondary}
      />
      <View style={{width: '100%', height: SWidth * 56}}>
        <SButton56
          title="확인"
          textColor={colors.text.interactive.inverse}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'login'}],
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: SWidth * 24,
  },

  iconContainer: {
    width: SWidth * 110,
    height: SWidth * 110,
    borderRadius: SWidth * 8,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
