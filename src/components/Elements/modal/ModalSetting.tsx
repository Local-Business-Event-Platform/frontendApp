import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {settingsModalList} from '../../../utils/listData';
import Data56 from '../../../utils/svgs/modal/Data56';
import Logout56 from '../../../utils/svgs/modal/Logout56';
import Warning56 from '../../../utils/svgs/modal/Warning56';
import {OnPressProps} from '../../../utils/types/businessType';
import SButton56 from '../SButton56';
import SText from '../SText';

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
    }
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      {modalIcon()}
      <View style={styles.textContainer}>
        <SText fStyle="BxlSb" text={modalData!.title!} />
        <View style={{alignItems: 'center'}}>
          <SText fStyle="BlgRg" text={modalData!.content!} />
          <SText fStyle="BlgRg" text={modalData!.content2} />
        </View>
      </View>
      <View style={{width: '100%', gap: SWidth * 8}}>
        <SButton56
          flex={false}
          title="ddd"
          textColor={'black'}
          ButtonColor={'red'}
          onPress={() => {}}
        />
        <SButton56
          flex={false}
          title="ddd"
          textColor={'black'}
          ButtonColor={'red'}
          onPress={() => {}}
        />
      </View>
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
