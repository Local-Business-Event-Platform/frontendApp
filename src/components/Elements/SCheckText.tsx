import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import RightArrow24 from '../../utils/svgs/auth/RightArrow24';
import {SCheckTextProps} from '../../utils/types/type';
import SCheckBox from './SCheckBox';
import SText from './SText';

const SCheckText = ({
  checkValue,
  onPress,
  arrowOnPress,
  fStyle,
  title,
  arrow,
}: SCheckTextProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowLine}>
        <SCheckBox checkValue={checkValue} onPress={onPress} />
        <SText
          nLine={1}
          flexShrink={1}
          lineHeight={fStyle === 'BmdRg' ? SWidth * 16 : SWidth * 20}
          fStyle={fStyle}
          text={title}
        />
      </View>
      {arrow && (
        <Pressable onPress={arrowOnPress}>
          <RightArrow24 />
        </Pressable>
      )}
    </View>
  );
};

export default SCheckText;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rowLine: {
    flexShrink: 1,
    width: '100%',
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
