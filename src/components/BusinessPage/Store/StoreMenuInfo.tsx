import FastImage from '@d11/react-native-fast-image';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import {useModalOpen} from '../../../store/modalRoute';
import BusinessBurger from '../../../utils/svgs/businessPage/BusinessBurger';
import SText from '../../Elements/SText';
import BAddButton from '../BAddButton';
import BContainer from '../BContainer';
import BOnlyTitle from '../BOnlyTitle';
import StoreUpdateButton from './StoreUpdateButton';
const StoreMenuInfo = () => {
  const {setModalOpen} = useModalOpen();
  const [menuList, setMenuList] = useState([
    {
      id: 1,
      img: require('../../../assets/images/Img1.png'),
      category: '메인 메뉴',
      title: '소고기 야채 전골',
      price: 25000,
    },
    {
      id: 2,
      img: require('../../../assets/images/Img2.png'),
      category: '메인 메뉴',
      title: '문어 전골',
      price: 25000,
    },
    {
      id: 3,
      img: require('../../../assets/images/Img3.png'),
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
            <View key={item.id} style={styles.rowContainer}>
              <BusinessBurger />
              <View style={styles.rowLine}>
                <FastImage
                  source={item.img}
                  resizeMode={FastImage.resizeMode.cover}
                  style={styles.imageStyle}
                />
                <View style={styles.contentContainer}>
                  <SText
                    fStyle="BmdSb"
                    text={item.category}
                    color={'#525252'}
                  />
                  <View style={styles.contentGap}>
                    <SText fStyle="BxlSb" text={item.title} color={'#404040'} />
                    <SText fStyle="BxlSb" text={item.price} color={'#525252'} />
                  </View>
                </View>
              </View>
              <StoreUpdateButton onPress={() => {}} />
            </View>
          ))}
        </View>
      )}
      <BAddButton title="메뉴 추가" onPress={() => setModalOpen(true)} />
    </BContainer>
  );
};

export default StoreMenuInfo;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: SWidth * 24,
    gap: SWidth * 32,
  },

  rowContainer: {
    height: SWidth * 78,
    flexDirection: 'row',
    gap: SWidth * 4,
    alignItems: 'center',
  },

  rowLine: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    gap: SWidth * 16,
  },

  imageStyle: {
    width: SWidth * 78,
    height: SWidth * 78,
    borderRadius: SWidth * 4,
  },

  contentContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },

  contentGap: {
    gap: SWidth * 2,
  },
});
