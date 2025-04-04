import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SText from '../Elements/SText';

const MapMenu = () => {
  const [menuTitle, setMenuTitle] = useState('');
  const menuList = [
    {id: 1, name: '식당'},
    {id: 2, name: '병원'},
    {id: 3, name: '운동'},
  ];

  return (
    <View style={styles.container}>
      {menuList.map(menu => (
        <Pressable
          key={menu.id}
          style={styles.itemContainer}
          onPress={() => setMenuTitle(menu.name)}>
          <View style={styles.menuItemBox}></View>
          <SText fStyle="BmdMd" text={menu.name} color={colors.secondary} />
        </Pressable>
      ))}
    </View>
  );
};

export default MapMenu;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: SWidth * 35,
    paddingBottom: SWidth * 28,
    paddingLeft: SWidth * 31,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 28,
  },

  itemContainer: {
    gap: SWidth * 8,
    alignItems: 'center',
  },

  menuItemBox: {
    width: SWidth * 64,
    height: SWidth * 64,
    borderRadius: SWidth * 8,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
