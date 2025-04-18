import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import {settingsModalList} from '../../../../utils/listData';
import Data56 from '../../../../utils/svgs/modal/Data56';
import Login56 from '../../../../utils/svgs/modal/Login56';
import Logout56 from '../../../../utils/svgs/modal/Logout56';
import Warning56 from '../../../../utils/svgs/modal/Warning56';
import {OnPressProps} from '../../../../utils/types/businessType';
import SettingContent from './SettingContent';

const ModalSetting = ({content, onPress}: OnPressProps) => {
  const modalData = settingsModalList.find(item => item.type === content);
  const modalIcon = () => {
    switch (content) {
      case '로그아웃':
        return <Logout56 />;
      case '탈퇴':
        return <Warning56 />;
      case '데이터':
        return <Data56 />;
      case 'login':
        return <Login56 />;
    }
  };

  return (
    <View style={styles.container}>
      {modalIcon()}
      <SettingContent
        type={content}
        title={modalData?.title}
        content={modalData?.content}
        content2={modalData?.content2}
        onPress={() => {}}
        closeOnPress={onPress!}
      />
    </View>
  );
};

export default ModalSetting;

const styles = StyleSheet.create({
  container: {
    paddingTop: SWidth * 24,
    padding: SWidth * 20,
    alignItems: 'center',
    gap: SWidth * 28,
  },
});
