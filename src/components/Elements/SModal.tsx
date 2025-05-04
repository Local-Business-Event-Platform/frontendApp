import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import {useModalOpen} from '../../store/modalRoute';
import {modalNames} from '../../utils/listData';
import ModalDetailPage from './modal/detailModal/ModalDetailPage';
import ModalBlock from './modal/ModalBlock';
import ModalBusiness from './modal/ModalBusiness';
import ModalSetting from './modal/settingModal/ModalSetting';
import SingleModal from './modal/SingleModal/SingleModal';

const SModal = () => {
  const {modalTitle, content, setModalOpen, id, userID, idType} =
    useModalOpen();
  const modalList = () => {
    switch (modalTitle) {
      case modalNames.BUSINESS:
        return <ModalBusiness onPress={() => setModalOpen(false)} />;
      case modalNames.SETTING:
        return (
          <ModalSetting content={content} onPress={() => setModalOpen(false)} />
        );
      case modalNames.DETAIL_PAGE:
        return <ModalDetailPage setModalOpen={setModalOpen} id={id} />;
      case modalNames.BLOCK:
        return <ModalBlock setModalOpen={setModalOpen} id={id} />;
      case modalNames.SINGLE:
        return (
          <SingleModal
            content={content}
            userID={userID}
            idType={idType}
            setModalOpen={setModalOpen}
          />
        );
    }
  };
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent:
            modalTitle === modalNames.DETAIL_PAGE ? 'flex-end' : 'center',
          paddingBottom:
            modalTitle === modalNames.DETAIL_PAGE ? SWidth * 32 : 0,
          paddingHorizontal:
            modalTitle === modalNames.SETTING || modalTitle === modalNames.BLOCK
              ? SWidth * 36
              : modalTitle === modalNames.DETAIL_PAGE
              ? SWidth * 16
              : SWidth * 29,
        },
      ]}>
      <View style={styles.contentContainer}>{modalList()}</View>
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
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: SWidth * 8,
  },
});
