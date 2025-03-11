import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {textItems} from '../../utils/listData';
import {FindUserProps} from '../../utils/types/loginType';
import SText from '../Elements/SText';

const FindUser = ({onPress}: FindUserProps) => {
  return (
    <Pressable style={{flexDirection: 'row'}} onPress={onPress}>
      {textItems.map((item, index) => (
        <SText
          key={index}
          fStyle="BlgSb"
          text={item.text}
          color={item.color}
          textDecorationLine="underline"
        />
      ))}
    </Pressable>
  );
};

export default FindUser;

const styles = StyleSheet.create({});
