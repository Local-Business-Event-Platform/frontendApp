import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import SButton40 from '../../Elements/SButton40';
import SText from '../../Elements/SText';

type BlockItemProps = {
  bottomWidth: number;
  image: string;
  name: string;
  address: string;
  onPress: () => void;
};

const BlockItem = ({
  bottomWidth,
  image,
  name,
  address,
  onPress,
}: BlockItemProps) => {
  return (
    <View style={[styles.itemContainer, {borderBottomWidth: bottomWidth}]}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.imageStyle}
          source={{uri: image}}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.textContainer}>
          <SText fStyle="BlgSb" text={name} color={colors.black} />
          <SText fStyle="BmdRg" text={address} color={colors.text.secondary} />
        </View>
      </View>
      <SButton40
        title="차단 해제"
        textColor={colors.text.secondary}
        ButtonColor={colors.interactive.secondary}
        // icon={<Pen24 />}
        onPress={onPress}
      />
    </View>
  );
};

export default BlockItem;

const styles = StyleSheet.create({
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
