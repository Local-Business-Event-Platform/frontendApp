import React from 'react';
import {StyleSheet} from 'react-native';
import {useMainSearch} from '../../../store/searchRoute';
import KeywordItem from './KeywordItem';
import SearchSubTitle from './SearchSubTitle';

const Keyword = () => {
  const {setTitle, setSearch} = useMainSearch();
  return (
    <>
      <SearchSubTitle />
      <KeywordItem
        title="한정식"
        onPress={() => {
          setTitle('한정식');
          setSearch(true);
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
