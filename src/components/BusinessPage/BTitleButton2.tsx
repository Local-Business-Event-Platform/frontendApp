import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../globalStyle';
import Edit20 from '../../utils/svgs/businessPage/Edit20';
import {BTitleButtonPRops} from '../../utils/types/businessType';
import SButton40 from '../Elements/SButton40';
import SText from '../Elements/SText';

const BTitleButton = ({
  title,
  titleSize = 'Hmd',
  buttonText,
  buttonTextColor,
  onPress,
}: BTitleButtonPRops) => {
  return (
    <View style={styles.container}>
      <SText fStyle={titleSize} text={title} />
      <SButton40
        title={buttonText}
        textColor={colors.text.interactive.secondary}
        borderWidth={1.25}
        icon={<Edit20 />}
        ButtonColor={buttonTextColor}
        onPress={onPress}
      />
    </View>
  );
};

export default BTitleButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
