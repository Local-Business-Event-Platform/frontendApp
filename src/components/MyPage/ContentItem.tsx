import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SWidth} from '../../../globalStyle';
import RightArrow24 from '../../utils/svgs/auth/RightArrow24';
import SText from '../Elements/SText';

type ContentItemProps = {
  icon: JSX.Element;
  title: string;
  onPress: () => void;
};

const ContentItem = ({icon, title, onPress}: ContentItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowLine}>
        {icon}
        <SText fStyle="BlgRg" text={title} color={'#404040'} />
      </View>
      <Pressable onPress={onPress}>
        <RightArrow24 />
      </Pressable>
    </View>
  );
};

export default ContentItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SWidth * 8,
    paddingVertical: SWidth * 16,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  rowLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
