import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {JoinInputButtonProps} from '../../../utils/types/joinType';
import SInput from '../../Elements/SInput';
import JoinButton from './JoinButton';

const JoinInputButton = ({
  value,
  title,
  buttonTitle,
  onChangeText,
  editable,
  keyboardType,
  placeholder,
  onPress,
  textDecorationLine,
}: JoinInputButtonProps) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <SInput
          value={value}
          title={title}
          editable={editable}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
      <JoinButton
        title={buttonTitle}
        onPress={onPress}
        textDecorationLine={textDecorationLine}
      />
    </View>
  );
};

export default JoinInputButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SWidth * 8,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
