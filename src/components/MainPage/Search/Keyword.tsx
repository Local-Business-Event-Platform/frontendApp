import React from 'react';
import {StyleSheet} from 'react-native';
import KeywordItem from './KeywordItem';
import SearchSubTitle from './SearchSubTitle';

const Keyword = () => {
  return (
    <>
      <SearchSubTitle />
      <KeywordItem
        title="한정식"
        onPress={() => {
          console.log('한정식');
        }}
        cancelOnPress={() => {
          console.log('한정식 삭제');
        }}
      />
    </>
  );
};

export default Keyword;

const styles = StyleSheet.create({});
