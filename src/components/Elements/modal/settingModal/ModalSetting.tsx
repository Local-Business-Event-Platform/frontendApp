import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../../globalStyle';
import {settingsModalList, settingTypes} from '../../../../utils/listData';
import Version56 from '../../../../utils/svgs/auth/Version56';
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
      case settingTypes.LOGOUT:
        return <Logout56 />;
      case settingTypes.WARNING:
      case settingTypes.ERROR:
      case settingTypes.BLOCK:
        return <Warning56 />;
      case settingTypes.DATA:
        return <Data56 />;
      case settingTypes.LOGIN:
        return <Login56 />;
      case settingTypes.VERSION:
        return <Version56 />;
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
