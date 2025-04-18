import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../../globalStyle';
import Plus24 from '../../../utils/svgs/businessPage/Plus24';
import SText from '../../Elements/SText';
import MyPageTitle from '../MyPageTitle';
import LocationAddItem from './LocationAddItem';

type LocationType = {
  list: {
    id: number;
    title: string;
    latitude: number;
    longitude: number;
  }[];
  setMyLocation: (latitude: number, longitude: number) => void;
};

const AddLocation = ({list, setMyLocation}: LocationType) => {
  const [address, setAddress] = useState(0);

  const handlePress = (id: number) => {
    setAddress(id);
    const selected = list.find(item => item.id === id);
    if (selected) {
      setMyLocation(selected.latitude, selected.longitude);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.lowContainer, {height: SWidth * 36}]}>
        <MyPageTitle title="등록한 동네" />
        <SText
          fStyle="BmdMd"
          text={'최대 4개까지 설정 가능'}
          color={colors.text.disabled}
        />
      </View>
      <View style={styles.locationContainer}>
        {list.map((item, index) => (
          <LocationAddItem
            key={item.id}
            title={item.title}
            isClicked={address === index + 1}
            onPress={() => handlePress(item.id)}
          />
        ))}
        <Pressable style={styles.addButton} onPress={() => {}}>
          <SText
            fStyle="BlgSb"
            text={'추가하기'}
            color={colors.text.disabled}
          />
          <Plus24 color={colors.icon.disabled} />
        </Pressable>
      </View>
    </View>
  );
};

export default AddLocation;

const styles = StyleSheet.create({
  container: {
    gap: SWidth * 16,
  },

  lowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  locationContainer: {
    gap: SWidth * 11,
  },

  addButton: {
    height: SWidth * 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderRadius: SWidth * 8,
    paddingHorizontal: SWidth * 24,
    borderStyle: 'dashed',
    borderColor: colors.border.disabled,
    backgroundColor: colors.white,
  },
});
