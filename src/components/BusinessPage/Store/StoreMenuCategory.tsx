import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import BAddButton from '../BAddButton';
import BContainer from '../BContainer';
import BOnlyTitle from '../BOnlyTitle';
import StoreCategoryInput from './StoreCategoryInput';
import StoreMenuCategoryItem from './StoreMenuCategoryItem';

const StoreMenuCategory = () => {
  const [categories] = useState([
    {id: 1, name: '카테고리1', img: ''},
    {id: 2, name: '카테고리2', img: ''},
    {id: 3, name: '카테고리3', img: ''},
  ]);
  const [storeData, setStoreData] = useState<{
    title: string;
    category: {name: string}[];
  }>({
    title: '',
    category: [],
  });

  const [updateClicked, setUpdateClicked] = useState<number | null>(null);

  const addCategories = () => {
    setStoreData(prevData => ({
      ...prevData,
      category: [...prevData.category, {name: ''}],
    }));
  };

  const deleteCategory = (index: number) => {
    setStoreData(prevData => {
      const newCategory = prevData.category.filter((_, i) => i !== index);
      return {...prevData, category: newCategory};
    });
  };

  return (
    <BContainer>
      <BOnlyTitle title="메뉴 카테고리" />
      {categories.length !== 0 && (
        <View style={styles.categories}>
          {categories.map(item =>
            updateClicked === item.id ? (
              <StoreCategoryInput
                key={item.id}
                value=""
                onChangeText={() => {}}
                addOnPress={() => {
                  setUpdateClicked(null);
                }}
                deleteOnPress={() => {}}
              />
            ) : (
              <StoreMenuCategoryItem
                key={item.id}
                title={item.name}
                onPress={() => setUpdateClicked(item.id)}
              />
            ),
          )}
        </View>
      )}
      {storeData?.category.length !== 0 && (
        <View style={styles.categoryList}>
          {storeData.category.map((item, index) => (
            <StoreCategoryInput
              key={index}
              value={item.name}
              onChangeText={text => {
                setStoreData(storeData => {
                  const newCategory = [...storeData.category];
                  newCategory[index].name = text;
                  return {...storeData, category: newCategory};
                });
              }}
              addOnPress={() => {}}
              deleteOnPress={() => deleteCategory(index)}
            />
          ))}
        </View>
      )}
      <BAddButton title="카테고리 추가" onPress={addCategories} />
    </BContainer>
  );
};

export default StoreMenuCategory;

const styles = StyleSheet.create({
  categories: {
    gap: SWidth * 12,
  },

  categoryList: {
    marginTop: SWidth * 12,
    gap: SWidth * 12,
  },
});
