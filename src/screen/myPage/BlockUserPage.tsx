import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import SFlatList from '../../components/Elements/SFlatList';
import SText from '../../components/Elements/SText';
import BlockItem from '../../components/MyPage/BlockUser/BlockItem';
import {useModalOpen} from '../../store/modalRoute';

const BlockUserPage = () => {
  const {setModalOpen, setModalTitle, setId} = useModalOpen();
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
      <View style={styles.textContainer}>
        <SText fStyle="Hsm" text={`총 ${data.length}명`} />
      </View>
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
            onPress={() => {
              setId(item.id);
              setModalTitle('block');
              setModalOpen(true);
            }}
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
    gap: SWidth * 8,
  },

  textContainer: {
    paddingHorizontal: SWidth * 24,
  },
});
