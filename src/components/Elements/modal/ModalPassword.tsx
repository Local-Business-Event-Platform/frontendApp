import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {OnPressProps} from '../../../utils/types/businessType';
import SButton from '../SButton';
import SText from '../SText';

const ModalPassword = ({onPress}: OnPressProps) => {
  return (
    <View style={styles.container}>
      <SText fStyle="Hsm" text={'비밀번호 변경 완료'} />
      <View style={styles.iconContainer}>
        <SText fStyle="BlgSb" text={'아이콘'} color={'#A1A1A1'} />
      </View>
      <SText
        fStyle="BlgMd"
        text={'비밀번호가 성공적으로 변경되었습니다.'}
        color={'#404040'}
      />
      <View style={{width: '100%', height: SWidth * 56}}>
        <SButton
          title="확인"
          textColor={'white'}
          onPress={onPress}
          ButtonColor={'#155DFC'}
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
