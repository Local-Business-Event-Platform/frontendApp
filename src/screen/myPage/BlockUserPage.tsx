import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import SButton40 from '../../components/Elements/SButton40';
import SFlatList from '../../components/Elements/SFlatList';
import SText from '../../components/Elements/SText';

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
          <View
            style={[
              styles.itemContainer,
              {borderBottomWidth: index === data.length - 1 ? 0 : 1},
            ]}>
            <View style={styles.imageContainer}>
              <FastImage
                style={styles.imageStyle}
                source={{uri: item.userImage}}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={styles.textContainer}>
                <SText fStyle="BlgSb" text={item.name} color={colors.black} />
                <SText
                  fStyle="BmdRg"
                  text={item.address}
                  color={colors.text.secondary}
                />
              </View>
            </View>
            <SButton40
              title="차단 해제"
              textColor={colors.text.secondary}
              ButtonColor={colors.interactive.secondary}
              // icon={<Pen24 />}
              onPress={() => {}}
            />
          </View>
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

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SWidth * 16,
    paddingVertical: SWidth * 24,
    paddingHorizontal: SWidth * 8,
    borderColor: '#A1A1A11A',
  },

  imageContainer: {
    flexDirection: 'row',
    gap: SWidth * 16,
  },

  imageStyle: {
    width: SWidth * 48,
    height: SWidth * 48,
    borderRadius: 999,
  },

  textContainer: {
    gap: SWidth * 4,
  },
});
