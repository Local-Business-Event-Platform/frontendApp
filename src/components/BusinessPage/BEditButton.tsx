import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import Edit20 from '../../utils/svgs/businessPage/Edit20';
import SText from '../Elements/SText';

const BEditButton = () => {
  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <SText
        fStyle="BmdSb"
        text={'수정'}
        color={colors.text.interactive.secondary}
        textDecorationLine="underline"
      />
      <Edit20 />
    </Pressable>
  );
};

export default BEditButton;

const styles = StyleSheet.create({
  container: {
    height: SWidth * 40,
    paddingHorizontal: SWidth * 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SWidth * 8,
    flexDirection: 'row',
    gap: SWidth * 8,
    backgroundColor: `${colors.bg.primary}E6`,
    borderWidth: 1.25,
    borderColor: colors.border.interactive.secondary,
  },
});
