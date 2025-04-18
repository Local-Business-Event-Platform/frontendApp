import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import {useModalOpen} from '../../store/modalRoute';
import {modalNames} from '../../utils/listData';
import ModalDetailPage from './modal/detailModal/ModalDetailPage';
import ModalBusiness from './modal/ModalBusiness';
import ModalPassword from './modal/ModalPassword';
import ModalSetting from './modal/settingModal/ModalSetting';

const SModal = () => {
  const {modalTitle, content, setModalOpen, id} = useModalOpen();
  const modalList = () => {
    switch (modalTitle) {
      case modalNames.BUSINESS:
        return <ModalBusiness onPress={() => setModalOpen(false)} />;
      case modalNames.PASSWORD:
        return <ModalPassword setModalOpen={setModalOpen} />;
      case modalNames.SETTING:
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
      {modalTitle === modalNames.DETAIL_PAGE ? (
        <ModalDetailPage setModalOpen={setModalOpen} id={id} />
      ) : (
        <View
          style={[
            styles.contentContainer,
            {
              padding:
                modalTitle === modalNames.SETTING ? SWidth * 20 : SWidth * 16,
              gap:
                modalTitle === modalNames.BUSINESS ? SWidth * 12 : SWidth * 24,
            },
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

    width: '100%',
    backgroundColor: colors.white,
    borderRadius: SWidth * 8,
  },
});
