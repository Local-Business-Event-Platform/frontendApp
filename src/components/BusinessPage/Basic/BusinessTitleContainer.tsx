import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../../globalStyle';
import BusinessDelete from '../../../utils/svgs/businessPage/BusinessDelete';
import {BusinessTitleContainerProps} from '../../../utils/types/businessType';
import SText from '../../Elements/SText';
import BusinessButton from './BusinessButton';

const BusinessTitleContainer = ({
  title,
  onClick,
  onPress,
  deleteButton,
  deleteOnPress,
}: BusinessTitleContainerProps) => {
  return (
    <View style={styles.container}>
      <SText fStyle="Hmd" text={title} />
      <View style={styles.buttonContainer}>
        <BusinessButton onClick={onClick} onPress={onPress} />
        {deleteButton && onClick && (
          <Pressable style={styles.deleteButton} onPress={deleteOnPress}>
            <BusinessDelete />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default BusinessTitleContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 4,
  },

  deleteButton: {
    width: SWidth * 40,
    height: SWidth * 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.25,
    borderRadius: SWidth * 8,
    borderColor: '#404040',
  },
});
