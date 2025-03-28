import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import BusinessPlus from '../../../utils/svgs/businessPage/BusinessPlus';
import SText from '../../Elements/SText';
import MyPageTitle from '../MyPageTitle';
import LocationAddItem from './LocationAddItem';

const AddLocation = () => {
  const locationList = [
    {id: 1, title: '역삼동', isClicked: true},
    {id: 2, title: '삼성동', isClicked: false},
    {id: 3, title: '신사동', isClicked: false},
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.lowContainer, {height: SWidth * 32}]}>
        <MyPageTitle title="등록한 동네" />
        <SText
          fStyle="BmdMd"
          text={'최대 4개까지 설정 가능'}
          color={'#A1A1A1'}
        />
      </View>
      <View style={styles.locationContainer}>
        {locationList.map(item => (
          <LocationAddItem
            key={item.id}
            title={item.title}
            isClicked={item.isClicked}
            onPress={() => {}}
          />
        ))}
        <Pressable style={styles.addButton} onPress={() => {}}>
          <SText fStyle="BlgSb" text={'추가하기'} color={'#A1A1A1'} />
          <BusinessPlus color={'#A1A1A1'} />
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
    borderColor: '#A1A1A1',
    backgroundColor: '#FFFFFF',
  },
});
