import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import SText from '../Elements/SText';

type FindUserProps = {
  onPress: () => void;
};

const FindUser = ({onPress}: FindUserProps) => {
  return (
    <Pressable style={{flexDirection: 'row'}} onPress={onPress}>
      <SText
        fStyle="BlgSb"
        text={'아이디'}
        color={'#155DFC'}
        textDecorationLine="underline"
      />
      <SText
        fStyle="BlgSb"
        text={' 또는 '}
        color={'#A1A1A1'}
        textDecorationLine="underline"
      />
      <SText
        fStyle="BlgSb"
        text={'비밀번호'}
        color={'#155DFC'}
        textDecorationLine="underline"
      />
      <SText
        fStyle="BlgSb"
        text={'를 잊으셨나요?'}
        color={'#A1A1A1'}
        textDecorationLine="underline"
      />
    </Pressable>
  );
};

export default FindUser;

const styles = StyleSheet.create({});
