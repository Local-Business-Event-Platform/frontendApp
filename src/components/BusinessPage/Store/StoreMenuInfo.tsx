import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {useModalOpen} from '../../../store/modalRoute';
import BAddButton from '../BAddButton';
import BContainer from '../BContainer';
import BOnlyTitle from '../BOnlyTitle';
import StoreMenuInfoItem from './StoreMenuInfoItem';
const StoreMenuInfo = () => {
  const {setModalTitle, setModalOpen} = useModalOpen();
  const [menuList, setMenuList] = useState([
    {
      id: 1,
      img: Image.resolveAssetSource(require('../../../assets/images/Img1.png'))
        .uri,
      category: '메인 메뉴',
      title: '소고기 야채 전골',
      price: 25000,
    },
    {
      id: 2,
      img: Image.resolveAssetSource(require('../../../assets/images/Img2.png'))
        .uri,
      category: '메인 메뉴',
      title: '문어 전골',
      price: 25000,
    },
    {
      id: 3,
      img: Image.resolveAssetSource(require('../../../assets/images/Img3.png'))
        .uri,
      category: '메인 메뉴',
      title: '닭백숙 전골',
      price: 22000,
    },
  ]);
  return (
    <BContainer>
      <BOnlyTitle title="메뉴 정보" />
      {menuList.length !== 0 && (
        <View style={styles.listContainer}>
          {menuList.map(item => (
            <StoreMenuInfoItem
              key={item.id}
              image={item.img}
              category={item.category}
              title={item.title}
              price={item.price}
              onPress={() => {}}
            />
          ))}
        </View>
      )}
      <BAddButton
        title="메뉴 추가"
        onPress={() => {
          setModalTitle('business');
          setModalOpen(true);
        }}
      />
    </BContainer>
  );
};

export default StoreMenuInfo;

const styles = StyleSheet.create({
  listContainer: {
    gap: SWidth * 32,
  },
});
