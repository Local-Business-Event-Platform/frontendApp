import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {settingsModalList} from '../../../utils/listData';
import Data56 from '../../../utils/svgs/modal/Data56';
import Logout56 from '../../../utils/svgs/modal/Logout56';
import Warning56 from '../../../utils/svgs/modal/Warning56';
import {OnPressProps} from '../../../utils/types/businessType';
import SText from '../SText';

const ModalSetting = ({content, onPress}: OnPressProps) => {
  const modalIcon = () => {
    switch (content) {
      case '로그아웃':
        return <Logout56 />;
      case '탈퇴':
        return <Warning56 />;
      case '데이터':
        return <Data56 />;
    }
  };

  const modalTitle = () => {
    switch (content) {
      case '로그아웃':
        return (
          <View style={styles.textContainer}>
            <SText fStyle="BxlSb" text={settingsModalList[0].title} />
            <View style={{alignItems: 'center'}}>
              <SText fStyle="BlgRg" text={settingsModalList[0].content} />
              <SText fStyle="BlgRg" text={settingsModalList[0].content2} />
            </View>
          </View>
        );
      case '탈퇴':
        return (
          <View style={styles.textContainer}>
            <SText fStyle="BxlSb" text={settingsModalList[1].title} />
            <View style={{alignItems: 'center'}}>
              <SText fStyle="BlgRg" text={settingsModalList[1].content} />
              <SText fStyle="BlgRg" text={settingsModalList[1].content2} />
            </View>
          </View>
        );
      case '데이터':
        return (
          <View style={styles.textContainer}>
            <SText fStyle="BxlSb" text={settingsModalList[2].title} />
            <View style={{alignItems: 'center'}}>
              <SText fStyle="BlgRg" text={settingsModalList[2].content} />
              <SText fStyle="BlgRg" text={settingsModalList[2].content2} />
            </View>
          </View>
        );
    }
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      {modalIcon()}
      {modalTitle()}
    </Pressable>
  );
};

export default ModalSetting;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: SWidth * 28,
  },

  textContainer: {
    alignItems: 'center',
    gap: SWidth * 4,
  },
});
