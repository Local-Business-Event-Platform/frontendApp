import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import {useModalOpen} from '../../store/modalRoute';
import ModalDetailPage from './modal/detailModal/ModalDetailPage';
import ModalBusiness from './modal/ModalBusiness';
import ModalPassword from './modal/ModalPassword';
import ModalSetting from './modal/settingModal/ModalSetting';

const SModal = () => {
  const {modalTitle, content, setModalOpen, id} = useModalOpen();
  const modalList = () => {
    switch (modalTitle) {
      case 'business':
        return <ModalBusiness onPress={() => setModalOpen(false)} />;
      case 'password':
        return <ModalPassword setModalOpen={setModalOpen} />;
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
          justifyContent: modalTitle === 'detailPage' ? 'flex-end' : 'center',
          paddingBottom: modalTitle === 'detailPage' ? SWidth * 32 : 0,
          paddingHorizontal:
            modalTitle === 'setting'
              ? SWidth * 36
              : modalTitle === 'detailPage'
              ? SWidth * 16
              : SWidth * 29,
        },
      ]}>
      {modalTitle === 'detailPage' ? (
        <ModalDetailPage setModalOpen={setModalOpen} id={id} />
      ) : (
        <View
          style={[
            styles.contentContainer,
            {padding: modalTitle === 'setting' ? SWidth * 20 : SWidth * 16},
          ]}>
          {modalList()}
        </View>
      )}
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
