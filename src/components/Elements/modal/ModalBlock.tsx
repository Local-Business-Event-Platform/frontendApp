import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SButton56 from '../SButton56';
import SText from '../SText';

type ModalDetailPageProps = {
  id: number;
  setModalOpen: (newModalOpen: boolean) => void;
};

const ModalBlock = ({id, setModalOpen}: ModalDetailPageProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <SText
          fStyle="BxlSb"
          text={`´${'김순복'}' 사용자를 차단 해제할까요?`}
        />
        <SText
          fStyle="BlgRg"
          text={'차단을 해제하면 활동을 다시 볼 수 있어요.'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <SButton56
          title="취소"
          textColor={colors.icon.secondary}
          ButtonColor={colors.bg.interactive.secondary}
          onPress={() => {
            setModalOpen(false);
          }}
        />
        <SButton56
          title="차단 해제"
          textColor={colors.text.interactive.inverse}
          ButtonColor={colors.bg.interactive.primary}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ModalBlock;

const styles = StyleSheet.create({
  container: {
    paddingTop: SWidth * 28,
    padding: SWidth * 20,
    gap: SWidth * 28,
  },

  contentContainer: {
    alignItems: 'center',
    gap: SWidth * 4,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 12,
    justifyContent: 'space-between',
  },
});
