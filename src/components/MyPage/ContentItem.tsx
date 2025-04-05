import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors, SWidth} from '../../../globalStyle';
import RightArrow24 from '../../utils/svgs/auth/RightArrow24';
import SText from '../Elements/SText';

type ContentItemProps = {
  icon: JSX.Element;
  title: string;
  onPress: () => void;
};

const ContentItem = ({icon, title, onPress}: ContentItemProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.rowLine}>
        {icon}
        <SText fStyle="BlgRg" text={title} color={colors.secondary} />
      </View>

      <RightArrow24 />
    </Pressable>
  );
};

export default ContentItem;

const styles = StyleSheet.create({
  container: {
    height: SWidth * 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SWidth * 8,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#A1A1A11A',
  },
  rowLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SWidth * 8,
  },
});
