import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import useCustomNavigation from '../../../hooks/useCustomNavigation';
import {useMainSearch} from '../../../store/searchRoute';
import BackArrow24 from '../../../utils/svgs/BackArrow24';
import SearchInput from '../../MainPage/Search/SearchInput';

const SearchAppBar = () => {
  const navigate = useCustomNavigation();
  const {title, setTitle, setSearch} = useMainSearch();

  const handleSubmit = async () => {
    console.log(title);
    setSearch(true);
  };
  console.log('title', title);
  return (
    <View style={styles.container}>
      <Pressable hitSlop={10} onPress={() => navigate.goBack()}>
        <BackArrow24 />
      </Pressable>
      <View style={styles.inputContainer}>
        <SearchInput
          value={title}
          onChangeText={text => setTitle(text)}
          onSubmitEditing={handleSubmit}
          onPress={() => {
            setTitle('');
            setSearch(false);
          }}
        />
      </View>
    </View>
  );
};

export default SearchAppBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SWidth * 48,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
    justifyContent: 'space-between',
    paddingHorizontal: SWidth * 24,
  },

  inputContainer: {
    flex: 1,
  },
});
