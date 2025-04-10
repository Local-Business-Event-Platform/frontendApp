import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import {useModalOpen} from '../../store/modalRoute';
import ModalBusiness from './modal/ModalBusiness';
import ModalPassword from './modal/ModalPassword';
import ModalSetting from './modal/ModalSetting';

const SModal = () => {
  const {modalTitle, content, setModalOpen} = useModalOpen();
  const modalList = () => {
    switch (modalTitle) {
      case 'business':
        return <ModalBusiness onPress={() => setModalOpen(false)} />;
      case 'password':
        return <ModalPassword onPress={() => setModalOpen(false)} />;
      case 'setting':
        return (
          <ModalSetting content={content} onPress={() => setModalOpen(false)} />
        );
    }
  };
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal:
            modalTitle === 'setting' ? SWidth * 36 : SWidth * 29,
        },
      ]}>
      <View
        style={[
          styles.contentContainer,
          {padding: modalTitle === 'setting' ? SWidth * 20 : SWidth * 16},
        ]}>
        {modalList()}
      </View>
    </View>
  );
};

export default SModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40404099',
  },

  contentContainer: {
    paddingTop: SWidth * 24,
    gap: SWidth * 24,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: SWidth * 8,
  },
});
