import React from 'react';
import {Keyboard, Pressable, StyleSheet} from 'react-native';
import Keyword from '../../components/MainPage/Search/Keyword';
import SearchList from '../../components/MainPage/Search/SearchList';
import {useMainSearch} from '../../store/searchRoute';

const SearchPage = () => {
  const {title, search} = useMainSearch();
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      {!search ? <Keyword /> : <SearchList />}
    </Pressable>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
