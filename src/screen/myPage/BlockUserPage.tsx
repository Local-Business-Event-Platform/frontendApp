import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SFlatList from '../../components/Elements/SFlatList';
import BlockItem from '../../components/MyPage/BlockUser/BlockItem';

const BlockUserPage = () => {
  const data = [
    {
      id: 1,
      name: '김복순',
      address: '대구광역시 대명동',
      userImage: Image.resolveAssetSource(
        require('../../assets/images/myPageImage.png'),
      ).uri,
    },
    {
      id: 2,
      name: '김복순',
      address: '대구광역시 대명동',
      userImage: Image.resolveAssetSource(
        require('../../assets/images/myPageImage.png'),
      ).uri,
    },
    {
      id: 3,
      name: '김복순',
      address: '대구광역시 대명동',
      userImage: Image.resolveAssetSource(
        require('../../assets/images/myPageImage.png'),
      ).uri,
    },
    {
      id: 4,
      name: '김복순',
      address: '대구광역시 대명동',
      userImage: Image.resolveAssetSource(
        require('../../assets/images/myPageImage.png'),
      ).uri,
    },
  ];

  return (
    <View style={styles.container}>
      <SFlatList
        data={data}
        skeleton={<View />}
        paddingHorizontal={SWidth * 24}
        dataItem={({item, index}) => (
          <BlockItem
            bottomWidth={index === data.length - 1 ? 0 : 1}
            image={item.userImage}
            name={item.name}
            address={item.address}
            onPress={() => {}}
          />
        )}
      />
    </View>
  );
};

export default BlockUserPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SWidth * 16,
  },
});
