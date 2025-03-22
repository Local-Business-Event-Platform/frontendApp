import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import {useModalOpen} from '../../store/modalRoute';
import ModalBusiness from './modal/ModalBusiness';
import ModalPassword from './modal/ModalPassword';

const SModal = () => {
  const {modalTitle, setModalOpen} = useModalOpen();
  const modalList = () => {
    switch (modalTitle) {
      case 'business':
        return <ModalBusiness onPress={() => setModalOpen(false)} />;
      case 'password':
        return <ModalPassword onPress={() => setModalOpen(false)} />;
    }
  };
  return (
    <View style={styles.container}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40404099',
    paddingHorizontal: SWidth * 29,
  },

  contentContainer: {
    paddingTop: SWidth * 24,
    padding: SWidth * 16,
    gap: SWidth * 24,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: SWidth * 8,
  },
});
